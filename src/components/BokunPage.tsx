import React, { useEffect, useRef } from 'react';

const BOKUN_CHANNEL_UUID = 'd65e9e41-1414-4365-86b6-bd24c446e641';
const BOKUN_SCRIPT_SRC = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${BOKUN_CHANNEL_UUID}`;

interface BokunPageProps {
    productId: string;
    onBack: () => void;
}

export function BokunPage({ productId, onBack }: BokunPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetId = `bokunWidget_${productId}`;

    const handleBack = () => {
        onBack();
    };

    useEffect(() => {
        if (!containerRef.current) return;

        // Clean container and create the new bokunWidget element
        containerRef.current.innerHTML = '';
        const widgetDiv = document.createElement('div');
        widgetDiv.id = widgetId;
        widgetDiv.className = 'bokunWidget';
        widgetDiv.setAttribute(
            'data-src',
            `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL_UUID}/experience/${productId}`
        );
        containerRef.current.appendChild(widgetDiv);

        const w = window as any;

        // If BokunWidgets is already loaded, initialize the new widget element
        if (w.BokunWidgets && typeof w.BokunWidgets.initializeAll === 'function') {
            try {
                w.BokunWidgets.initializeAll();
            } catch (e) {
                console.warn('[BokunPage] BokunWidgets.initializeAll error:', e);
            }
        } else if (w.BokunWidgets && typeof w.BokunWidgets.mount === 'function') {
            try {
                w.BokunWidgets.mount();
            } catch (e) {
                console.warn('[BokunPage] BokunWidgets.mount error:', e);
            }
        } else {
            // Load Bokun loader if not present
            let script = document.querySelector<HTMLScriptElement>(`script[src*="BokunWidgetsLoader"]`);
            if (!script) {
                script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = BOKUN_SCRIPT_SRC;
                script.async = true;
                document.head.appendChild(script);
            }
        }

        return () => {
            // Only clean up the widget container contents when unmounting,
            // preserving Bokun's global modal and cart roots in document.body
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [productId, widgetId]);

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
