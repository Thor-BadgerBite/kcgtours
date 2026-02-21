import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TourSlide } from '../types';

interface TourCardProps {
    slides: TourSlide[];
    tourTitle: string;
    duration: string;
    bokunProductId: string;
}

export function TourCard({ slides, tourTitle, duration, bokunProductId }: TourCardProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
            setProgress(0);
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
            setProgress(0);
        }
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) {
            emblaApi.scrollTo(index);
            setProgress(0);
        }
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

        let intervalId: NodeJS.Timeout;
        if (!isHovered) {
            intervalId = setInterval(() => {
                setProgress((prev) => {
                    const next = prev + (UPDATE_INTERVAL / SLIDE_DURATION) * 100;
                    if (next >= 100) {
                        scrollNext();
                        return 0;
                    }
                    return next;
                });
            }, UPDATE_INTERVAL);
        }

        return () => clearInterval(intervalId);
    }, [isHovered, scrollNext]);

    const handleBookNow = () => {
        if (window.BokunWidget) {
            window.BokunWidget.open(bokunProductId);
        } else {
            console.warn('BokunWidget not loaded');
            alert(`Booking tool placeholder for ${tourTitle} (${bokunProductId})`);
        }
    };

    return (
        <motion.div
            className="bg-white group overflow-hidden w-full flex flex-col h-full shadow-[0px_3px_3px_0px_rgba(0,0,0,0.4)] relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="relative w-full h-[350px] md:h-[600px] lg:h-[550px]"
            >
                <div className="overflow-hidden h-full" ref={emblaRef}>
                    <div className="flex h-full w-full touch-pan-y">
                        {slides.map((slide, idx) => (
                            <div
                                key={idx}
                                className="relative flex-[0_0_100%] min-w-0 h-full overflow-hidden"
                            >
                                <motion.div
                                    className="w-full h-full absolute inset-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: selectedIndex === idx ? 1 : 0 }}
                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Captions */}
                <AnimatePresence mode="wait">
                    {slides[selectedIndex] && (
                        <motion.div
                            key={selectedIndex}
                            className="absolute bottom-16 left-8 right-8 z-10 pointer-events-none text-white drop-shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.h3
                                className="text-[25px] font-normal mb-1 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                            >
                                {slides[selectedIndex].title}
                            </motion.h3>
                            {slides[selectedIndex].subtitle && (
                                <motion.p
                                    className="text-lg opacity-90"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    {slides[selectedIndex].subtitle}
                                </motion.p>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <button
                        type="button"
                        onClick={scrollPrev}
                        className="w-10 h-10 rounded-full border border-white/70 bg-black/15 hover:bg-black/40 flex items-center justify-center text-white transition-colors pointer-events-auto"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        type="button"
                        onClick={scrollNext}
                        className="w-10 h-10 rounded-full border border-white/70 bg-black/15 hover:bg-black/40 flex items-center justify-center text-white transition-colors pointer-events-auto"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-8 left-8 flex gap-2 z-20">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => scrollTo(idx)}
                            className={`w-3 h-3 rounded-[18px] border-2 border-white/60 transition-colors duration-300 ${selectedIndex === idx ? 'bg-white' : 'bg-transparent'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/30 z-20">
                    <div
                        className="h-full bg-white transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Card Footer Content */}
            <div className="p-6 flex flex-col justify-between items-start gap-4 bg-white z-10 flex-grow pt-8">
                <div>
                    <h4 className="text-xl font-bold text-[#404041] hover:text-[#5d95d0] transition-colors">{tourTitle}</h4>
                    <p className="text-sm text-gray-500 mt-2 font-light">{duration}</p>
                </div>

                <button
                    onClick={handleBookNow}
                    className="w-full text-white text-center py-3 px-8 font-bold bg-[#5d95d0] hover:shadow-[inset_400px_0px_0_0px_#404041] rounded-[30px] transition-all duration-300 ease-out mt-4"
                >
                    Book Now
                </button>
            </div>
        </motion.div>
    );
}
