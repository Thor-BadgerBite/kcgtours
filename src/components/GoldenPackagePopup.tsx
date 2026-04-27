import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const POPUP_SESSION_KEY = 'golden_package_popup_shown';
const SHOW_DELAY_MS = 2500;

const TOURS = [
    {
        name: 'Fiscardo Island Tour',
        stops: 'Myrtos • Assos • Fiscardo • Melissani • Drogarati',
    },
    {
        name: 'Kefalonian Adventure',
        stops: 'Lixouri • Kipouria • Petani • St. Gerasimos • Winery',
    },
    {
        name: 'Discover Ithaca — Bus Tour',
        stops: 'Vathy • Kioni • Stavros • Polis Bay',
    },
];

export function GoldenPackagePopup() {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem(POPUP_SESSION_KEY)) return;
        const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
        return () => clearTimeout(timer);
    }, []);

    const close = () => {
        setVisible(false);
        sessionStorage.setItem(POPUP_SESSION_KEY, 'true');
    };

    const handleBook = () => {
        close();
        navigate('/tour/fiscardo-island-tour');
    };

    return (
        <AnimatePresence>
            {visible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-[200] bg-black/55 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={close}
                    />

                    {/* Popup */}
                    <motion.div
                        className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative bg-[#F7F7F0] rounded-2xl shadow-2xl w-full max-w-[420px] overflow-hidden pointer-events-auto"
                            initial={{ scale: 0.88, y: 24 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 16, opacity: 0 }}
                            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                        >
                            {/* Close button */}
                            <button
                                onClick={close}
                                aria-label="Close popup"
                                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/20 hover:bg-black/35 text-white transition-colors"
                            >
                                <X size={15} strokeWidth={2.5} />
                            </button>

                            {/* ── Panoramic Image Strip ── */}
                            <div className="relative w-full h-[145px] overflow-hidden">
                                <img
                                    src="/images/1125444/myrtos.webp"
                                    alt="Myrtos Beach, Kefalonia"
                                    className="w-full h-full object-cover object-center"
                                />
                                {/* Gradient fade into the green header below */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(74,107,95,0.55) 80%, #4a6b5f 100%)'
                                    }}
                                />
                                {/* Overlay text on image */}
                                <div className="absolute bottom-3 left-4">
                                    <span className="text-white/80 text-[15px] font-medium tracking-widest uppercase">
                                        Kefalonia &amp; Ithaca
                                    </span>
                                </div>
                            </div>

                            {/* ── Header ── */}
                            <div
                                className="relative px-5 pt-2 pb-3 overflow-hidden"
                                style={{ background: 'linear-gradient(135deg, #4a6b5f 0%, #69857A 60%, #7a9b8e 100%)' }}
                            >
                                {/* Decorative circles */}
                                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/5" />
                                <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-white/5" />

                                <div className="relative">
                                    {/* Badge row */}
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="bg-yellow-400 text-[#2d2d2d] text-[15px] font-black px-2.5 py-0.5 rounded-full tracking-wide uppercase">
                                            Save 30%
                                        </span>
                                        <span className="text-white/65 text-[15px]">
                                            Limited Time Offer!
                                        </span>
                                    </div>

                                    <h2 className="text-white text-[26px] font-bold leading-tight tracking-tight">
                                        Economy Ticket
                                    </h2>
                                    <p className="text-white/75 text-[19px] leading-snug">
                                        Three unforgettable days
                                    </p>
                                </div>
                            </div>

                            {/* ── Body ── */}
                            <div className="px-5 pt-3 pb-4">

                                {/* Tour list */}
                                <div className="space-y-2 mb-3">
                                    {TOURS.map((tour, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <span className="mt-[3px] text-yellow-500 text-[20px] leading-none flex-shrink-0">●</span>
                                            <div>
                                                <p className="text-[#404041] font-bold text-[19px] leading-tight">
                                                    {tour.name}
                                                </p>
                                                <p className="text-gray-700 text-[15px] mt-0.5 leading-snug">
                                                    {tour.stops}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pickup info */}
                                <div className="bg-white rounded-xl px-3.5 py-2 mb-3 border border-[#69857A]/15 flex items-start gap-2">
                                    <p className="text-[13.5px] text-gray-500 leading-relaxed">
                                        <span className="font-semibold text-[#404041]">Pickups</span> from Argostoli, Lassi &amp; Svoronata Areas{' '}
                                    </p>
                                </div>

                                {/* CTA */}
                                <button
                                    id="golden-package-book-now"
                                    onClick={handleBook}
                                    className="w-full bg-[#69857A] hover:bg-[#5a7369] active:bg-[#4d6560] text-white font-extrabold py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-[19.5px] tracking-wide leading-none"
                                    style={{ transform: 'translateZ(0)' }}
                                >
                                    Book Now &amp; Save 30%
                                </button>

                                <button
                                    onClick={close}
                                    className="w-full mt-1 text-[16px] text-gray-400 hover:text-gray-600 transition-colors py-1"
                                >
                                    No thanks, I'll browse tours
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
