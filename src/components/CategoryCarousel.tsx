import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { EmblaOptionsType } from 'embla-carousel';

interface Props {
    items: React.ReactNode[];
    isBusTours?: boolean;
}

export function CategoryCarousel({ items, isBusTours = false }: Props) {
    const options: EmblaOptionsType = {
        loop: true,
        align: 'start',
        skipSnaps: false
    };
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    // We want to detect if the items currently fit without sliding
    const [canScroll, setCanScroll] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
        setCanScroll(emblaApi.canScrollNext() || emblaApi.canScrollPrev());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        // Also listen to resize to check if scrollability changed 
        // e.g., mobile 1 slide vs desktop 3 slides
        const handleResize = () => {
            emblaApi.reInit();
            onSelect();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [emblaApi, onSelect]);

    // For bus-tours, display exactly as original (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
    if (isBusTours) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch justify-center h-full">
                {items.map((item, idx) => (
                    <div key={idx} className="flex h-full w-full">
                        {item}
                    </div>
                ))}
            </div>
        );
    }

    // For other categories, if items length is small enough that it doesn't need to scroll, 
    // Embla will handle it, or we can just render the carousel which won't let you scroll.
    return (
        <div className="relative group overflow-visible w-full">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-6 md:-ml-8 touch-pan-y">
                    {items.map((item, idx) => (
                        // Each item takes full width on mobile, 1/2 on tablet, 1/3 on desktop
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

            {/* Navigation Buttons - visible only if can scroll (items more than 1/2/3 limit) */}
            {canScroll && (
                <>
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

                    {/* Mobile always visible buttons at the bottom if we want them, or within frame - 
                        Since touch is enabled on mobile, often we just hide arrows, but user asked for "horizontal with right/left arrows" 
                        We will put them visible on mobile too but at edges inside or below to avoid them being out of bounds */}
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
                </>
            )}
        </div>
    );
}
