import React, { useEffect, useRef } from 'react';

const BOKUN_SCRIPT_SRC = 'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=d65e9e41-1414-4365-86b6-bd24c446e641';

interface BokunPageProps {
    productId: string;
    onBack: () => void;
}

export function BokunPage({ productId, onBack }: BokunPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetId = `bokunWidget_${productId}`;

    useEffect(() => {
        if (!containerRef.current) return;

        // Inject widget div with an id so iFrameSizer can locate it
        containerRef.current.innerHTML = '';

        const widgetDiv = document.createElement('div');
        widgetDiv.id = widgetId;
        widgetDiv.className = 'bokunWidget';
        widgetDiv.setAttribute(
            'data-src',
            `https://widgets.bokun.io/online-sales/d65e9e41-1414-4365-86b6-bd24c446e641/experience/${productId}`
        );
        containerRef.current.appendChild(widgetDiv);

        // Only inject the loader script once — if it's already in the DOM,
        // call the existing loader API to initialise this new widget instead.
        const existingScript = document.querySelector<HTMLScriptElement>(
            `script[src="${BOKUN_SCRIPT_SRC}"]`
        );

        if (!existingScript) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = BOKUN_SCRIPT_SRC;
            script.async = true;
            containerRef.current.appendChild(script);
        } else {
            // Loader already present — ask it to scan for new widgets
            const w = window as any;
            if (w.BokunWidgets && typeof w.BokunWidgets.mount === 'function') {
                w.BokunWidgets.mount();
            }
        }

        // Cleanup: do NOT wipe innerHTML here — Bokun may still have XHR
        // requests in-flight that would fail with "Document is already detached"
        // if we destroy the container nodes while they are pending.
        // The container is cleared at the top of the next effect run (above)
        // when productId changes, which is safe because the new effect starts
        // only after React has finished with the previous render cycle.
        return () => { /* intentionally empty */ };
    }, [productId]);

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
