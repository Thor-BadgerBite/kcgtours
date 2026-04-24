import React from 'react';
import { useNavigate } from 'react-router-dom';

export function GoldenPackageBanner() {
    const navigate = useNavigate();

    return (
        <div
            id="golden-package-banner"
            className="w-full"
            style={{ background: 'linear-gradient(100deg, #3d5a51 0%, #69857A 50%, #7a9b8e 100%)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">

                {/* Left — title + badge */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="bg-yellow-400 text-[#2d2d2d] text-[12px] font-black px-2.5 py-0.5 rounded-full tracking-wide uppercase whitespace-nowrap">
                        Save 30%
                    </span>
                    <div>
                        <p className="text-white font-bold text-[16px] leading-tight">
                            Golden Island Tour
                        </p>
                        <p className="text-white/65 text-[11px] leading-none mt-0.5">
                            Limited Time Offer
                        </p>
                    </div>
                </div>

                {/* Center — tours */}
                <div className="hidden md:flex items-center gap-1 text-white/75 text-[12px]">
                    <span className="text-yellow-400">●</span>
                    <span>Fiscardo Island Tour</span>
                    <span className="mx-2 text-white/30">|</span>
                    <span className="text-yellow-400">●</span>
                    <span>Kefalonian Adventure</span>
                    <span className="mx-2 text-white/30">|</span>
                    <span className="text-yellow-400">●</span>
                    <span>Discover Ithaca</span>
                </div>

                {/* Right — CTA */}
                <button
                    id="golden-package-banner-book-now"
                    onClick={() => navigate('/tour/fiscardo-island-tour')}
                    className="flex-shrink-0 bg-[#F7F7F0] hover:bg-white text-[#3d5a51] font-extrabold text-[14px] px-5 py-1.5 rounded-full transition-all duration-200 shadow hover:shadow-md whitespace-nowrap"
                >
                    Book Now &amp; Save 30%
                </button>
            </div>
        </div>
    );
}
