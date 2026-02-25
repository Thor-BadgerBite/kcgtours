import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

/**
 * Deterministic base offset so tours start from a realistic-looking number.
 * Derived purely from the tour ID — same result for every visitor.
 */
function getBaseCount(tourId: string): number {
    let hash = 0;
    for (let i = 0; i < tourId.length; i++) {
        const char = tourId.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return 250 + (Math.abs(hash) % 700); // 250–950
}

/**
 * Manages the view counter for a tour.
 *
 * - On mount: reads the current count from Supabase (no increment).
 * - `incrementView()`: atomically increments in DB and updates local state.
 *   Call this every time the user opens the tour detail (e.g. clicks "View More & Book").
 *   No deduplication — every open counts, even from the same user.
 * - Re-syncs with DB whenever the user returns to the tab.
 *
 * @param tourId  The unique tour identifier (bokunProductId)
 * @returns       { viewCount, incrementView }
 */
export function useViewCounter(tourId: string): {
    viewCount: number;
    incrementView: () => Promise<void>;
} {
    const [viewCount, setViewCount] = useState<number>(0);
    const base = getBaseCount(tourId);

    // READ — fetch the latest count without incrementing
    const fetchCount = useCallback(async () => {
        if (!tourId) return;
        try {
            const { data, error } = await supabase
                .from('tour_views')
                .select('view_count')
                .eq('tour_id', tourId)
                .maybeSingle();
            if (error) throw error;
            setViewCount(base + (data?.view_count ?? 0));
        } catch (err) {
            console.error('[useViewCounter] fetch error:', err);
            setViewCount(base);
        }
    }, [tourId, base]);

    // WRITE — increment by 1 and update UI instantly (optimistic + confirmed)
    const incrementView = useCallback(async () => {
        if (!tourId) return;
        // Optimistic update first so the user sees it immediately
        setViewCount(prev => prev + 1);
        try {
            const { data, error } = await supabase
                .rpc('increment_tour_view', { p_tour_id: tourId });
            if (error) throw error;
            // Confirm with the real DB value
            setViewCount(base + (data ?? 0));
        } catch (err) {
            console.error('[useViewCounter] increment error:', err);
            // Optimistic update already applied — just leave it
        }
    }, [tourId, base]);

    // Fetch on mount
    useEffect(() => {
        fetchCount();
    }, [fetchCount]);

    // Re-sync when user returns to the tab (e.g. after closing Bokun widget)
    useEffect(() => {
        if (!tourId) return;
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                fetchCount();
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [tourId, fetchCount]);

    return { viewCount, incrementView };
}
