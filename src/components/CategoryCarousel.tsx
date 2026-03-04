import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { EmblaOptionsType } from 'embla-carousel';

interface Props {
    items: React.ReactNode[];
    isBusTours?: boolean;
}

export function CategoryCarousel({ items, isBusTours = false }: Props) {
    const [shouldScroll, setShouldScroll] = useState(false);

    // Determine if we exceed the limit for the current screen size
    useEffect(() => {
        function checkLimit() {
            let limit = 1; // mobile
            if (window.innerWidth >= 1024) {
                limit = 3; // lg
            } else if (window.innerWidth >= 768) {
                limit = 2; // md
            }
            setShouldScroll(items.length > limit);
        }

        checkLimit();
        window.addEventListener('resize', checkLimit);
        return () => window.removeEventListener('resize', checkLimit);
    }, [items.length]);

    // If we exceed the limit, we duplicate items to ensure Embla can loop flawlessly 
    // without ever stopping, even if it's 4 items showing 3.
    const displayItems = shouldScroll ? [...items, ...items, ...items, ...items] : items;

    const options: EmblaOptionsType = {
        loop: true,
        align: 'start',
        skipSnaps: false,
        active: shouldScroll // disable embla entirely if under limit
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.reInit();
    }, [emblaApi, shouldScroll, displayItems.length]);

    // For bus-tours, display exactly as original (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
    if (isBusTours || !shouldScroll) {
        return (
            <div className={`grid gap-6 md:gap-8 items-stretch justify-center h-full mx-auto ${items.length === 1 ? 'grid-cols-1 md:w-1/2 lg:w-1/3' :
                    items.length === 2 ? 'grid-cols-1 md:grid-cols-2 lg:w-2/3' :
                        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'
                }`}>
                {items.map((item, idx) => (
                    <div key={idx} className="flex h-full w-full">
                        {item}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="relative group overflow-visible w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-6 md:-ml-8 touch-pan-y">
                    {displayItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-none w-full md:w-1/2 lg:w-1/3 pl-6 md:pl-8 h-full"
                            style={{ minWidth: 0 }}
                        >
                            <div className="h-full flex flex-col justify-stretch">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className="absolute left-[-20px] md:left-[-40px] lg:left-[-60px] top-1/2 -translate-y-1/2 
                           w-10 h-10 md:w-12 md:h-12 bg-white/90 shadow-lg rounded-full flex items-center justify-center
                           text-[#404041] hover:text-primary transition-colors opacity-0 group-hover:opacity-100 z-10
                           disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-[-20px] md:right-[-40px] lg:right-[-60px] top-1/2 -translate-y-1/2 
                           w-10 h-10 md:w-12 md:h-12 bg-white/90 shadow-lg rounded-full flex items-center justify-center
                           text-[#404041] hover:text-primary transition-colors opacity-0 group-hover:opacity-100 z-10
                           disabled:opacity-50 disabled:cursor-not-allowed hidden md:flex"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <button
                onClick={scrollPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center text-[#404041] hover:text-primary transition-colors z-10 md:hidden"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center text-[#404041] hover:text-primary transition-colors z-10 md:hidden"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}
