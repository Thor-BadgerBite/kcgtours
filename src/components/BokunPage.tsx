import React, { useEffect, useRef, useState } from 'react';

const BOKUN_SCRIPT_SRC = 'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=d65e9e41-1414-4365-86b6-bd24c446e641';

interface BokunPageProps {
    productId: string;
    onBack: () => void;
}

export function BokunPage({ productId, onBack }: BokunPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const retryTracker = useRef<{ productId: string; count: number }>({ productId: '', count: 0 });
    const [remountKey, setRemountKey] = useState(0);
    const widgetId = `bokunWidget_${productId}`;

    useEffect(() => {
        if (!containerRef.current) return;

        // Reset the retry counter if the user navigated to a different product
        if (retryTracker.current.productId !== productId) {
            retryTracker.current = { productId, count: 0 };
        }

        // Polling interval reference
        let intervalId: number | undefined;
        let errorCheckTimeout: number | undefined;
        let errorCheckInterval: number | undefined;

        // Clean up previous iframe resizers to reduce "IFrame not found" errors
        // DO NOT wipe the iframe from DOM here if we're unmounting, just let the resizer know
        // it shouldn't expect messages anymore.
        const cleanupResizers = () => {
            if (containerRef.current) {
                const iframes = containerRef.current.querySelectorAll('iframe');
                iframes.forEach((iframe: any) => {
                    if (iframe.iFrameResizer && typeof iframe.iFrameResizer.close === 'function') {
                        try {
                            iframe.iFrameResizer.close();
                        } catch (e) {
                            console.warn('Could not gracefully close iFrameResizer', e);
                        }
                    }
                });
            }
        };

        // Check if the exact widget we want is already injected and mounted (contains an iframe)
        // This helps handle React 18 double-invocations without clearing the loading interval
        let widgetDiv = containerRef.current.querySelector(`#${widgetId}`) as HTMLDivElement | null;
        const isAlreadyMounted = widgetDiv && widgetDiv.querySelector('iframe');

        if (isAlreadyMounted) {
            return;
        }

        if (!widgetDiv) {
            cleanupResizers();
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

        const tryMount = () => {
            const w = window as any;
            if (w.BokunWidgets && typeof w.BokunWidgets.mount === 'function') {
                w.BokunWidgets.mount();
                if (intervalId) {
                    window.clearInterval(intervalId);
                    intervalId = undefined;
                }
            }
        };

        const existingScript = document.querySelector<HTMLScriptElement>(
            `script[src="${BOKUN_SCRIPT_SRC}"]`
        );

        if (!existingScript) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = BOKUN_SCRIPT_SRC;
            script.async = true;
            containerRef.current.appendChild(script);
        }

        // Start polling for window.BokunWidgets instead of giving up immediately
        tryMount();
        if (!(window as any).BokunWidgets) {
            intervalId = window.setInterval(tryMount, 200);
        }

        // AUTO-REFRESH LOGIC (Safety Net)
        // Give the widget 6 seconds to initialize and load.
        errorCheckTimeout = window.setTimeout(() => {
            errorCheckInterval = window.setInterval(() => {
                if (!containerRef.current) return;
                const iframe = containerRef.current.querySelector('iframe');
                
                // If the iframe loaded but is suspiciously small (e.g., an "An error occurred" box)
                // A normal booking calendar is usually > 500px tall.
                if (iframe && iframe.clientHeight > 10 && iframe.clientHeight < 350) {
                    if (retryTracker.current.count < 1) {
                        console.warn('[BokunPage] Widget error detected (small height). Auto-refreshing...');
                        retryTracker.current.count += 1;
                        
                        // Force wipe the broken widget
                        cleanupResizers();
                        containerRef.current.innerHTML = '';
                        
                        // Trigger a remount
                        setRemountKey(k => k + 1);
                    }
                }
            }, 2000);
        }, 6000);

        return () => {
            if (intervalId) window.clearInterval(intervalId);
            if (errorCheckTimeout) window.clearTimeout(errorCheckTimeout);
            if (errorCheckInterval) window.clearInterval(errorCheckInterval);
            // Cleanup: do NOT wipe innerHTML here — Bokun may still have XHR
            // requests in-flight that would fail with "Document is already detached".
            // Let the browser handle DOM teardown when the user actually navigates away.
        };
    }, [productId, widgetId, remountKey]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header / Navbar specific to booking page with a back button */}
            <nav className="bg-card px-4 h-[80px] text-[#404041] sticky top-0 z-50 shadow-md flex items-center border-b border-gray-100">
                <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
                    <button onClick={onBack} className="text-primary hover:text-dark font-medium flex items-center gap-2">
                        <span>&larr;</span> Back to Tours
                    </button>
                    <div className="flex items-center">
                        <img src="/images/logo-new.png" alt="KCG Tours" className="h-[40px] md:h-[50px] w-auto cursor-pointer" onClick={onBack} />
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
