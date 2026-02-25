import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

/**
 * Deterministic base offset so popular-looking tours start from a realistic number.
 * The offset is derived purely from the tour ID string — no randomness, so every
 * visitor sees the same base count for the same tour.
 */
function getBaseCount(tourId: string): number {
    let hash = 0;
    for (let i = 0; i < tourId.length; i++) {
        const char = tourId.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // convert to 32-bit int
    }
    return 250 + (Math.abs(hash) % 700); // 250–950
}

/**
 * Fetches the real-time view count for a tour, and increments it once per browser session.
 *
 * @param tourId  - The unique tour identifier (bokunProductId)
 * @returns       - The current view count (base offset + real DB count), or 0 while loading
 */
export function useViewCounter(tourId: string): number {
    const [viewCount, setViewCount] = useState<number>(0);

    useEffect(() => {
        if (!tourId) return;

        const sessionKey = `viewed_${tourId}`;
        const alreadyViewed = sessionStorage.getItem(sessionKey);

        const run = async () => {
            const base = getBaseCount(tourId);

            try {
                if (alreadyViewed) {
                    // Already counted this session — just READ the current count
                    const { data, error } = await supabase
                        .from('tour_views')
                        .select('view_count')
                        .eq('tour_id', tourId)
                        .maybeSingle();

                    if (error) throw error;
                    setViewCount(base + (data?.view_count ?? 0));
                } else {
                    // First visit this session — atomically INCREMENT via RPC
                    const { data, error } = await supabase
                        .rpc('increment_tour_view', { p_tour_id: tourId });

                    if (error) throw error;
                    sessionStorage.setItem(sessionKey, '1');
                    setViewCount(base + (data ?? 0));
                }
            } catch (err) {
                console.error('[useViewCounter] Supabase error:', err);
                // Graceful fallback — show base count only
                setViewCount(getBaseCount(tourId));
            }
        };

        run();
    }, [tourId]);

    return viewCount;
}
