import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Eye, ChevronLeft, ChevronRight, Send, ChevronDown, MapPinCheckInside, X, Share2, CheckCircle, AlertCircle } from 'lucide-react';
import { useViewCounter } from '../hooks/useViewCounter';
import { slugify } from '../App';
import type { TourSlide } from '../types';
import { sendMailRequest } from '../lib/mail';

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
    /** Short catchy headline shown at the top of the card */
    card_subtitle?: string;
    /** For non-Bokun tours: fuller description shown in the card footer */
    short_description?: string;
    /** true  → show itinerary / operating / duration + "View More & Book"
     *  false → show short_description + "Make a Request" */
    isBookableOnBokun: boolean;
    isPrivateAvailable?: boolean;
    /** Short description shown in the private request form */
    private_description?: string;
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
    card_subtitle,
    short_description,
    isBookableOnBokun,
    isPrivateAvailable,
    private_description,
    onBook,
    onRequest,
}: TourCardProps) {
    const carouselMode = false;
    const showBadges = false;
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 20,
        active: carouselMode && slides.length > 1
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);
    const shareRef = useRef<HTMLDivElement>(null);
    const { viewCount, incrementView } = useViewCounter(bokunProductId, baseViews);

    // Private request form state
    const [formFields, setFormFields] = useState({ name: '', email: '', guests: '', date: '', description: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formError, setFormError] = useState('');

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('loading');
        setFormError('');
        const result = await sendMailRequest({
            source: 'tour-private-request',
            tourTitle,
            name: formFields.name,
            email: formFields.email,
            guests: formFields.guests,
            date: formFields.date,
            description: formFields.description,
        });
        if (result.success) {
            setFormStatus('success');
            setFormFields({ name: '', email: '', guests: '', date: '', description: '' });
        } else {
            setFormStatus('error');
            setFormError(result.error || 'Something went wrong. Please try again.');
        }
    };

    // Close share popup when clicking outside
    useEffect(() => {
        function handleOutside(e: MouseEvent) {
            if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
                setShareOpen(false);
            }
        }
        if (shareOpen) document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, [shareOpen]);

    const tourUrl = typeof window !== 'undefined'
        ? `${window.location.origin}/tour/${slugify(tourTitle)}`
        : '';
    const shareText = encodeURIComponent(`Check out ${tourTitle} on KCG Tours!`);
    const shareUrl = encodeURIComponent(tourUrl);

    const shareLinks = [
        {
            label: 'Facebook',
            color: '#1877F2',
            href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12z" />
                </svg>
            ),
        },
        {
            label: 'WhatsApp',
            color: '#25D366',
            href: `https://wa.me/?text=${shareText}%20${shareUrl}`,
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
        },
        {
            label: 'X / Twitter',
            color: '#000000',
            href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
            ),
        },
        {
            label: 'Viber',
            color: '#7360F2',
            href: `viber://forward?text=${shareText}%20${tourUrl}`,
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M11.398.002C8.967-.028 3.375.56 1.03 5.77c-1.15 2.528-1.07 5.818-.976 7.944.094 2.126.443 6.22 3.94 7.293a.304.304 0 01.21.313l-.05 2.4.014.014c-.004.05.01.094.05.13.053.044.127.038.174-.012l2.47-2.478a.301.301 0 01.256-.086c.755.086 1.517.128 2.285.121 1.217-.01 4.984-.02 7.668-2.502 2.758-2.543 2.543-6.7 2.543-6.7l.004-.002V11.3c.083-.49.037-6.41-4.498-9.41-.91-.576-2.07-1.18-3.72-1.888z" />
                </svg>
            ),
        },
        {
            label: 'Email',
            color: '#EA4335',
            href: `mailto:?subject=${encodeURIComponent(tourTitle + ' | KCG Tours')}&body=${shareText}%20${tourUrl}`,
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            ),
        },
    ];

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
            alert(`Make a Request for: ${tourTitle}`);
        }
    };

    return (
        <motion.div
            className="w-full h-full relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={isMobile || isFlipped ? {} : { scale: 1.02 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setDropdownOpen(false); setShareOpen(false); }}
        >
            <AnimatePresence mode="wait">
                {!isFlipped ? (
                    /* ── Front Face ── */
                    <motion.div
                        key="front"
                        className="w-full h-full flex flex-col bg-card rounded-md shadow-[0px_4px_15px_rgba(0,0,0,0.15)]"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                        {/* Top Text Header Block */}
                        <div className="bg-card p-3 text-center flex-none mt-2 md:mt-0">
                            <h3 className="text-dark font-bold md:font-normal text-xl md:text-2xl mb-1">{tourTitle}</h3>
                            <p className="text-primary font-light text-lg min-h-[56px] flex items-center justify-center">
                                <span className="line-clamp-2">{card_subtitle || short_description || slides[0]?.subtitle || 'Kefalonia Highlights'}</span>
                            </p>
                        </div>

                        {/* Slider Section */}
                        <div className="relative w-full aspect-[16/10] md:aspect-[16/10] shadow-[0_4px_10px_rgba(0,0,0,0.1)] z-10">
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

                        {/* ── Card Footer ── */}
                        <div className="relative p-3 flex flex-col items-center justify-center gap-[2px] bg-card z-10 flex-1 text-center">
                            {/* View Counter */}
                            <div className="absolute top-3 left-4 z-20 flex items-center gap-1.5 text-gray-500 hover:text-dark transition-colors text-[14px] font-medium">
                                <Eye className="w-[18px] h-[18px]" />
                                <span>{viewCount} views</span>
                            </div>

                            {/* Share Button — only for Bokun bookable tours */}
                            {isBookableOnBokun && (
                                <div ref={shareRef} className="absolute top-3 right-4 z-30 text-left">
                                    <button
                                        type="button"
                                        onClick={() => setShareOpen(v => !v)}
                                        className="flex items-center gap-1.5 text-gray-500 hover:text-dark transition-colors text-[14px] font-medium"
                                        aria-label="Share this tour"
                                    >
                                        <Share2 className="w-[18px] h-[18px]" />
                                        <span>Share</span>
                                    </button>

                                    <AnimatePresence>
                                        {shareOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.85, y: -6 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.85, y: -6 }}
                                                transition={{ duration: 0.18, ease: 'easeOut' }}
                                                className="absolute top-full right-0 mt-2 flex flex-col gap-1.5 bg-white rounded-lg shadow-2xl border border-gray-100 p-2 min-w-[160px] z-50 text-left"
                                            >
                                                {shareLinks.map(link => (
                                                    <a
                                                        key={link.label}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={() => setShareOpen(false)}
                                                        className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium text-white hover:opacity-90 transition-opacity"
                                                        style={{ backgroundColor: link.color }}
                                                    >
                                                        {link.icon}
                                                        {link.label}
                                                    </a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}

                            <span className="text-dark uppercase tracking-wide font-bold text-[16px] md:text-[18px] mt-7 mb-1 md:mt-2 md:mb-0">{tourType}</span>

                            {isBookableOnBokun ? (
                                <>
                                    <div className="h-[44px] md:h-[60px] flex items-center justify-center w-full mb-0 md:mb-1">
                                        <p className="text-primary font-medium text-[16px] md:text-[18px] leading-snug line-clamp-2">{itinerary}</p>
                                    </div>
                                    <p className="text-[18px] text-dark font-normal leading-snug">
                                        <span className="text-dark font-medium mr-1">Operating:</span>{operatingDays}
                                    </p>
                                    <p className="text-[18px] text-dark font-normal leading-snug">
                                        <span className="text-dark font-medium mr-1">Duration:</span>{duration}
                                    </p>

                                    <div className="w-full flex justify-center mt-auto mt-2">
                                        {isPrivateAvailable ? (
                                            <div className="flex w-full gap-2 relative">
                                                <button
                                                    onClick={() => setIsFlipped(true)}
                                                    className="flex-1 text-white py-2 px-1 text-[16px] font-bold bg-[color:var(--color-dark)] hover:bg-[color:var(--color-primary)] rounded shadow-sm transition-colors duration-300 flex items-center justify-center gap-1.5 whitespace-nowrap"
                                                >
                                                    <MapPinCheckInside className="w-[18px] h-[18px] shrink-0" />
                                                    <span className="hidden sm:inline">Private Option</span>
                                                    <span className="sm:hidden">Private</span>
                                                </button>
                                                <button
                                                    onClick={handleBookNow}
                                                    className="flex-1 text-white py-2 px-1 text-[16px] font-bold bg-primary hover:bg-primary-hover rounded shadow-sm transition-colors duration-300 ease-out whitespace-nowrap"
                                                >
                                                    View &amp; Book
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={handleBookNow}
                                                className="text-white hover:text-dark py-2 px-8 w-[80%] max-w-[300px] font-bold bg-primary hover:bg-primary-hover rounded shadow-sm transition-colors duration-300 ease-out text-[18px]"
                                            >
                                                View More &amp; Book
                                            </button>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="text-dark font-normal text-[16px] leading-relaxed mt-1 px-2">
                                        {short_description}
                                    </p>
                                    <div className="w-full flex justify-center mt-auto mt-2">
                                        <button
                                            onClick={() => isPrivateAvailable ? setIsFlipped(true) : handleRequest()}
                                            className="flex items-center justify-center gap-2 text-white hover:text-dark py-2 px-8 w-[80%] max-w-[300px] font-bold bg-[color:var(--color-dark)] hover:bg-[color:var(--color-primary)] rounded shadow-sm transition-colors duration-300 ease-out text-[18px]"
                                        >
                                            <MapPinCheckInside className="w-4 h-4" />
                                            Make a Request
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                ) : (
                    /* ── Back Face: Private Request Form ── */
                    <motion.div
                        key="back"
                        className="w-full h-full bg-[color:var(--color-card)] rounded-md shadow-[0px_4px_15px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                        {/* Header */}
                        <div className="p-4 bg-[color:var(--color-dark)] text-white flex justify-between items-center flex-none">
                            <h3 className="font-bold text-[18px] flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <MapPinCheckInside className="w-5 h-5 text-primary" />
                                Private Request
                            </h3>
                            <button
                                onClick={() => setIsFlipped(false)}
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Form Body */}
                        <div className="p-4 flex-1 overflow-y-auto flex flex-col">
                            <p className="text-[18px] text-dark mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <span className="font-medium">Private experience for </span>
                                <span className="text-primary font-semibold">{tourTitle}</span>
                                {private_description && (
                                    <span className="block mt-2 font-light text-[#404041]">{private_description}</span>
                                )}
                            </p>
                            {formStatus === 'success' ? (
                                <div className="flex flex-col items-center justify-center flex-1 gap-4 py-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    <CheckCircle className="w-14 h-14 text-primary" />
                                    <p className="text-dark font-semibold text-[18px] text-center">Request Sent!</p>
                                    <p className="text-gray-500 text-[15px] text-center">We'll get back to you very soon.</p>
                                    <button
                                        onClick={() => { setIsFlipped(false); setFormStatus('idle'); }}
                                        className="mt-2 text-white py-2 px-8 font-bold bg-primary hover:bg-primary-hover rounded shadow-sm transition-colors duration-300 ease-out text-[16px]"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form
                                    className="flex flex-col gap-3 flex-1"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                    onSubmit={handleFormSubmit}
                                >
                                    <input
                                        type="text"
                                        name="name"
                                        value={formFields.name}
                                        onChange={handleFormChange}
                                        placeholder="Your Name"
                                        required
                                        className="w-full border border-gray-200 rounded px-3 py-2 text-[16px] text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-white"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formFields.email}
                                        onChange={handleFormChange}
                                        placeholder="Your Email"
                                        required
                                        className="w-full border border-gray-200 rounded px-3 py-2 text-[16px] text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-white"
                                    />
                                    <div className="flex gap-2 w-full">
                                        <input
                                            type="number"
                                            name="guests"
                                            value={formFields.guests}
                                            onChange={handleFormChange}
                                            placeholder="Guests"
                                            min="1"
                                            required
                                            className="w-1/3 border border-gray-200 rounded px-3 py-2 text-[16px] text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-white"
                                        />
                                        <input
                                            type="date"
                                            name="date"
                                            value={formFields.date}
                                            onChange={handleFormChange}
                                            required
                                            className="w-2/3 border border-gray-200 rounded px-3 py-2 text-[16px] text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-gray-500 bg-white"
                                        />
                                    </div>
                                    <textarea
                                        name="description"
                                        value={formFields.description}
                                        onChange={handleFormChange}
                                        placeholder="Tell us about your group — anything that will help us personalise your experience"
                                        className="flex-1 min-h-[60px] w-full border border-gray-200 rounded px-3 py-2 text-[16px] text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-white resize-none"
                                    />
                                    {formStatus === 'error' && (
                                        <div className="flex items-center gap-2 text-red-600 text-[13px] bg-red-50 border border-red-200 rounded px-3 py-2">
                                            <AlertCircle className="w-4 h-4 shrink-0" />
                                            {formError}
                                        </div>
                                    )}
                                    <div className="w-full flex justify-center">
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'loading'}
                                            className="text-white hover:text-dark py-2 px-8 w-[80%] max-w-[300px] font-bold bg-primary hover:bg-primary-hover rounded shadow-sm transition-colors duration-300 ease-out text-[18px] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === 'loading' ? (
                                                <><span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> Sending…</>
                                            ) : (
                                                <><Send className="w-4 h-4" /> Send Request</>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
