import React, { useEffect, useRef } from 'react';

interface BokunPageProps {
    productId: string;
    onBack: () => void;
}

export function BokunPage({ productId, onBack }: BokunPageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear container completely
        containerRef.current.innerHTML = '';

        // Create the widget div
        const widgetDiv = document.createElement('div');
        widgetDiv.className = 'bokunWidget';
        widgetDiv.setAttribute('data-src', `https://widgets.bokun.io/online-sales/d65e9e41-1414-4365-86b6-bd24c446e641/experience/${productId}`);

        // Create the script tag
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=d65e9e41-1414-4365-86b6-bd24c446e641';
        script.async = true;

        containerRef.current.appendChild(widgetDiv);
        containerRef.current.appendChild(script);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [productId]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header / Navbar specific to booking page with a back button */}
            <nav className="bg-white px-4 h-[80px] text-[#404041] sticky top-0 z-50 shadow-md flex items-center border-b border-gray-100">
                <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
                    <button onClick={onBack} className="text-primary hover:text-dark font-medium flex items-center gap-2">
                        <span>&larr;</span> Back to Tours
                    </button>
                    <div className="flex items-center">
                        <img src="/images/logo.png" alt="KCG Tours" className="h-[40px] md:h-[50px] w-auto cursor-pointer" onClick={onBack} />
                    </div>
                    {/* Placeholder to keep logo centered */}
                    <div className="w-[120px] hidden md:block"></div>
                </div>
            </nav>

            <div className="max-w-5xl mx-auto p-4 md:p-8 mt-4">
                <div
                    ref={containerRef}
                    className="bg-white rounded-lg shadow-sm p-4 md:p-8 min-h-[600px]"
                >
                    {/* Bokun widget will be injected here by useEffect */}
                </div>
            </div>
        </div>
    );
}
