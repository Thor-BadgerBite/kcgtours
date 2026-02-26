import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Eye, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { useViewCounter } from '../hooks/useViewCounter';
import type { TourSlide } from '../types';

interface TourCardProps {
    slides: TourSlide[];
    tourTitle: string;
    tourType: string;
    itinerary?: string;
    operatingDays?: string;
    duration?: string;
    from_price: number | string;
    badges?: {
        isExclusive?: boolean;
        isBestSeller?: boolean;
        isSpecialOffer?: boolean;
        [key: string]: boolean | undefined;
    };
    bokunProductId: string;
    baseViews?: number;
    short_description?: string;
    /** true  → show itinerary / operating / duration + "View More & Book"
     *  false → show short_description + "Make a Request" */
    isBookableOnBokun: boolean;
    onBook?: () => void;
    onRequest?: () => void;
}

export function TourCard({
    slides,
    tourTitle,
    tourType,
    itinerary,
    operatingDays,
    duration,
    from_price,
    badges,
    bokunProductId,
    baseViews,
    short_description,
    isBookableOnBokun,
    onBook,
    onRequest,
}: TourCardProps) {
    const carouselMode = false;
    const showBadges = false;

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);
    const { viewCount, incrementView } = useViewCounter(bokunProductId, baseViews);

    const scrollPrev = useCallback(() => {
        if (emblaApi) { emblaApi.scrollPrev(); setProgress(0); }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) { emblaApi.scrollNext(); setProgress(0); }
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) { emblaApi.scrollTo(index); setProgress(0); }
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setProgress(0);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    useEffect(() => {
        const SLIDE_DURATION = 5000;
        const UPDATE_INTERVAL = 50;
        let intervalId: ReturnType<typeof setInterval>;
        if (!isHovered && carouselMode) {
            intervalId = setInterval(() => {
                setProgress((prev) => {
                    const next = prev + (UPDATE_INTERVAL / SLIDE_DURATION) * 100;
                    if (next >= 100) { scrollNext(); return 0; }
                    return next;
                });
            }, UPDATE_INTERVAL);
        }
        return () => clearInterval(intervalId);
    }, [isHovered, scrollNext]);

    const handleBookNow = () => {
        incrementView();
        if (onBook) {
            onBook();
        } else if (window.BokunWidget) {
            window.BokunWidget.open(bokunProductId);
        } else {
            console.warn('BokunWidget not loaded');
            alert(`Booking tool placeholder for ${tourTitle} (${bokunProductId})`);
        }
    };

    const handleRequest = () => {
        if (onRequest) {
            onRequest();
        } else {
            // Placeholder — later this will open an inline request form
            alert(`Make a Request for: ${tourTitle}`);
        }
    };

    return (
        <motion.div
            className="bg-card group overflow-hidden w-full flex flex-col h-full rounded-md shadow-[0px_4px_15px_rgba(0,0,0,0.15)] relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Top Text Header Block */}
            <div className="bg-card p-4 text-center flex-none">
                <h3 className="text-dark font-normal text-xl md:text-2xl mb-1">{tourTitle}</h3>
                <p className="text-primary font-light text-lg min-h-[56px] flex items-center justify-center">
                    <span className="line-clamp-2">{short_description || slides[0]?.subtitle || 'Kefalonia Highlights'}</span>
                </p>
            </div>

            {/* Slider Section */}
            <div className="relative w-full aspect-[16/10] shadow-[0_4px_10px_rgba(0,0,0,0.1)] z-10">
                {/* Price Pill */}
                <div className="absolute top-4 right-4 z-30 bg-[color:var(--color-price-bg)] text-white px-3 py-1.5 rounded-sm shadow-md font-bold text-sm tracking-wide">
                    FROM: {typeof from_price === 'number' ? from_price.toFixed(2) : from_price}€
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 z-30 flex flex-col gap-2 items-start">
                    {showBadges && badges?.isExclusive && (
                        <span className="bg-[color:var(--color-badge-exclusive)] text-white px-3 py-1 rounded-sm shadow-md font-bold text-[10px] uppercase tracking-wider">Exclusive</span>
                    )}
                    {showBadges && badges?.isBestSeller && (
                        <span className="bg-[color:var(--color-badge-bestseller)] text-white px-3 py-1 rounded-sm shadow-md font-bold text-[10px] uppercase tracking-wider">Best Seller</span>
                    )}
                    {showBadges && badges?.isSpecialOffer && (
                        <span className="bg-[color:var(--color-badge-special)] text-white px-3 py-1 rounded-sm shadow-md font-bold text-[10px] uppercase tracking-wider">Special Offer</span>
                    )}
                </div>

                {/* View Counter */}
                <div className="absolute bottom-4 left-4 z-30 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded text-sm font-medium shadow-sm transition-all duration-300">
                    <Eye className="w-4 h-4" />
                    <span>{viewCount} views</span>
                </div>

                <div className="overflow-hidden h-full" ref={emblaRef}>
                    <div className="flex h-full w-full touch-pan-y">
                        {(carouselMode ? slides : [slides[0]]).map((slide, idx) => (
                            <div key={idx} className="relative flex-[0_0_100%] min-w-0 h-full overflow-hidden">
                                <motion.div
                                    className="w-full h-full absolute inset-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: selectedIndex === idx ? 1 : 0 }}
                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                >
                                    <img src={slide.image} alt={slide.title} className="object-cover w-full h-full" />
                                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Captions */}
                <AnimatePresence mode="wait">
                    {carouselMode && slides[selectedIndex] && (
                        <motion.div
                            key={selectedIndex}
                            className="absolute inset-x-0 bottom-12 flex justify-center z-10 pointer-events-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-8"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.h3
                                className="text-[20px] md:text-[24px] font-normal leading-tight text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            >
                                {slides[selectedIndex].title}
                            </motion.h3>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Arrows */}
                {carouselMode && (
                    <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between items-center z-20 pointer-events-none">
                        <button type="button" onClick={scrollPrev} className="w-12 h-12 rounded-full border border-white/50 bg-black/20 hover:bg-black/50 flex items-center justify-center text-white transition-colors pointer-events-auto" aria-label="Previous slide">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button type="button" onClick={scrollNext} className="w-12 h-12 rounded-full border border-white/50 bg-black/20 hover:bg-black/50 flex items-center justify-center text-white transition-colors pointer-events-auto" aria-label="Next slide">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                )}

                {/* Dots */}
                {carouselMode && (
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => scrollTo(idx)}
                                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full border border-white/80 transition-colors duration-300 shadow-sm ${selectedIndex === idx ? 'bg-white' : 'bg-transparent/20'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* ── Card Footer ─────────────────────────────── */}
            <div className="p-4 flex flex-col items-center gap-1 bg-card z-10 flex-none text-center">
                <span className="text-dark uppercase tracking-wide font-bold text-[18px] mb-1">{tourType}</span>

                {isBookableOnBokun ? (
                    /* ── Bokun-bookable: show itinerary / operating / duration ── */
                    <>
                        <p className="text-primary font-medium text-[18px] mb-2 leading-relaxed">{itinerary}</p>
                        <p className="text-[18px] text-gray-500 font-light">
                            <span className="text-dark font-medium mr-1">Operating:</span>{operatingDays}
                        </p>
                        <p className="text-[18px] text-gray-500 mt-1 font-light">
                            <span className="text-dark font-medium mr-1">Duration:</span>{duration}
                        </p>

                        <div className="w-full flex justify-center mt-4">
                            <button
                                onClick={handleBookNow}
                                className="text-white hover:text-dark py-2 px-8 w-[80%] max-w-[300px] font-bold bg-primary hover:bg-primary-hover rounded shadow-sm transition-colors duration-300 ease-out text-base"
                            >
                                View More &amp; Book
                            </button>
                        </div>
                    </>
                ) : (
                    /* ── On-request: show short_description + "Make a Request" ── */
                    <>
                        <p className="text-gray-500 font-light text-[16px] leading-relaxed mt-1 px-2 line-clamp-3">
                            {short_description}
                        </p>

                        <div className="w-full flex justify-center mt-4">
                            <button
                                onClick={handleRequest}
                                className="flex items-center justify-center gap-2 text-white hover:text-dark py-2 px-8 w-[80%] max-w-[300px] font-bold bg-[color:var(--color-dark)] hover:bg-[color:var(--color-primary)] rounded shadow-sm transition-colors duration-300 ease-out text-base"
                            >
                                <Send className="w-4 h-4" />
                                Make a Request
                            </button>
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    );
}
