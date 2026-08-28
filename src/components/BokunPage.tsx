import React, { useEffect, useRef, useState } from 'react';

const BOKUN_SCRIPT_SRC = 'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=d65e9e41-1414-4365-86b6-bd24c446e641';

interface BokunPageProps {
    productId: string;
    onBack: () => void;
}

const safelyUnmountBokunIframes = (container: HTMLElement | null) => {
    try {
        const containerIframes = container ? Array.from(container.querySelectorAll('iframe')) : [];
        const bodyIframes = Array.from(
            document.body.querySelectorAll<HTMLIFrameElement>('iframe[id*="bokun"], iframe[src*="bokun"]')
        );

        const allIframes = Array.from(new Set([...containerIframes, ...bodyIframes]));

        allIframes.forEach((iframe: any) => {
            try {
                // Gracefully unregister from iFrameResizer library if present
                if (iframe.iFrameResizer && typeof iframe.iFrameResizer.close === 'function') {
                    iframe.iFrameResizer.close();
                }
            } catch (e) {
                // Ignore iFrameResizer error
            }

            try {
                // Abort all active XHR/fetch/script execution inside iframe window before detachment
                if (iframe.contentWindow && typeof iframe.contentWindow.stop === 'function') {
                    iframe.contentWindow.stop();
                }
            } catch (e) {
                // Ignore cross-origin stop error
            }

            try {
                // Replace src to about:blank to force browser to tear down JS context cleanly
                iframe.src = 'about:blank';
            } catch (e) {
                // Ignore src reset error
            }
        });

        // Clean up any orphan overlays or modal backdrops created by Bokun widgets
        const bodyOverlays = document.body.querySelectorAll('.bokun-modal-backdrop, .bokun-overlay, #bokun-widgets-cart-container');
        bodyOverlays.forEach(el => {
            try {
                el.remove();
            } catch (e) {
                // Ignore removal error
            }
        });
    } catch (e) {
        console.warn('[BokunPage] Cleanup error:', e);
    }
};

export function BokunPage({ productId, onBack }: BokunPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const retryTracker = useRef<{ productId: string; count: number }>({ productId: '', count: 0 });
    const [remountKey, setRemountKey] = useState(0);
    const widgetId = `bokunWidget_${productId}`;

    const handleBack = () => {
        safelyUnmountBokunIframes(containerRef.current);
        onBack();
    };

    useEffect(() => {
        if (!containerRef.current) return;

        // Reset the retry counter if the user navigated to a different product
        if (retryTracker.current.productId !== productId) {
            retryTracker.current = { productId, count: 0 };
        }

        let mountTimeoutId: number | undefined;
        let errorCheckTimeout: number | undefined;
        let errorCheckInterval: number | undefined;

        // Clean up any existing widgets in the container before mounting new one
        let widgetDiv = containerRef.current.querySelector(`#${widgetId}`) as HTMLDivElement | null;
        const isAlreadyMounted = widgetDiv && widgetDiv.querySelector('iframe');

        if (isAlreadyMounted) {
            return;
        }

        if (!widgetDiv) {
            safelyUnmountBokunIframes(containerRef.current);
            containerRef.current.innerHTML = '';

            widgetDiv = document.createElement('div');
            widgetDiv.id = widgetId;
            widgetDiv.className = 'bokunWidget';
            widgetDiv.setAttribute(
                'data-src',
                `https://widgets.bokun.io/online-sales/d65e9e41-1414-4365-86b6-bd24c446e641/experience/${productId}`
            );
            containerRef.current.appendChild(widgetDiv);
        }

        const w = window as any;
        const hasBokunWidgets = w.BokunWidgets && typeof w.BokunWidgets.mount === 'function';

        const existingScript = document.querySelector<HTMLScriptElement>(
            `script[src="${BOKUN_SCRIPT_SRC}"]`
        );

        if (!existingScript) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = BOKUN_SCRIPT_SRC;
            script.async = true;
            document.body.appendChild(script);
        }

        if (hasBokunWidgets) {
            mountTimeoutId = window.setTimeout(() => {
                if (w.BokunWidgets && typeof w.BokunWidgets.mount === 'function') {
                    try {
                        w.BokunWidgets.mount();
                    } catch (err) {
                        console.warn('[BokunPage] BokunWidgets.mount error:', err);
                    }
                }
            }, 50);
        }

        // AUTO-REFRESH LOGIC (Safety Net)
        errorCheckTimeout = window.setTimeout(() => {
            errorCheckInterval = window.setInterval(() => {
                if (!containerRef.current) return;
                const iframe = containerRef.current.querySelector('iframe');
                
                if (iframe && iframe.clientHeight > 10 && iframe.clientHeight < 350) {
                    if (retryTracker.current.count < 1) {
                        console.warn('[BokunPage] Widget error detected (small height). Auto-refreshing...');
                        retryTracker.current.count += 1;
                        
                        safelyUnmountBokunIframes(containerRef.current);
                        containerRef.current.innerHTML = '';
                        
                        setRemountKey(k => k + 1);
                    }
                }
            }, 2000);
        }, 6000);

        return () => {
            if (mountTimeoutId) window.clearTimeout(mountTimeoutId);
            if (errorCheckTimeout) window.clearTimeout(errorCheckTimeout);
            if (errorCheckInterval) window.clearInterval(errorCheckInterval);

            // Execute clean teardown when unmounting component or navigating away
            safelyUnmountBokunIframes(containerRef.current);
        };
    }, [productId, widgetId, remountKey]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header / Navbar specific to booking page with a back button */}
            <nav className="bg-card px-4 h-[80px] text-[#404041] sticky top-0 z-50 shadow-md flex items-center border-b border-gray-100">
                <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
                    <button onClick={handleBack} className="text-primary hover:text-dark font-medium flex items-center gap-2">
                        <span>&larr;</span> Back to Tours
                    </button>
                    <div className="flex items-center">
                        <img src="/images/logo-new.png" alt="KCG Tours" className="h-[40px] md:h-[50px] w-auto cursor-pointer" onClick={handleBack} />
                    </div>
                    {/* Placeholder to keep logo centered */}
                    <div className="w-[120px] hidden md:block"></div>
                </div>
            </nav>

            <div className="w-full">
                <div
                    ref={containerRef}
                    className="w-full bg-white min-h-[600px]"
                >
                    {/* Bokun widget will be injected here by useEffect */}
                </div>
            </div>
        </div>
    );
}
