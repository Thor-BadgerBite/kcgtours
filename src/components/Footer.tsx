import React from 'react';
import { Facebook, Instagram, ShieldCheck, MapPin, Phone, Mail, Award, Star, Youtube, Linkedin, Tent } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-sage pt-6 pb-4 border-t border-gray-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-start mb-6">

                    {/* Left Column: Contact Details */}
                    <div className="flex flex-col text-white space-y-4">
                        <h4 className="text-2xl md:text-lg font-semibold text-white mb-2">KCG Travel</h4>
                        <div className="space-y-3 text-lg md:text-sm">
                            <p className="font-light leading-relaxed mb-4">
                                Your trusted travel partner in Kefalonia offering accommodation, transfers, car hire and unforgettable island experiences.
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail size={16} className="text-white shrink-0" />
                                <a href="mailto:info@kcgservices.gr" className="text-white/80 hover:text-white transition-colors">info@kcgservices.gr</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone size={16} className="text-white shrink-0" />
                                <span>+30 2671 025653</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <MapPin size={16} className="mt-1 shrink-0 text-white" />
                                <span>Argostoli-Aerodromiou, Lassi<br />Kefalonia, Greece, 21800</span>
                            </p>
                        </div>

                        <div className="pt-4 flex flex-col items-center md:items-start text-center md:text-left">
                            <h4 className="text-lg md:text-sm font-semibold text-white mb-3 uppercase tracking-wider">Follow Us</h4>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <a href="https://www.facebook.com/kcg.services.kefalonia/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-card hover:bg-[#d7393e] text-dark hover:text-white flex items-center justify-center rounded transition-colors shadow-sm" aria-label="Facebook">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://www.instagram.com/kcg.travel.services/?hl=en" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-card hover:bg-[#d7393e] text-dark hover:text-white flex items-center justify-center rounded transition-colors shadow-sm" aria-label="Instagram">
                                    <Instagram size={18} />
                                </a>
                                <a href="https://www.tripadvisor.com/Attraction_Review-g644214-d10413398-Reviews-KCG_Travel_Services-Lassi_Kefalonia_Ionian_Islands.html" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-card hover:bg-[#d7393e] text-dark hover:text-white flex items-center justify-center rounded transition-colors shadow-sm" aria-label="Tripadvisor">
                                    <svg width="18px" height="18px" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 6.009h-2.829C15.211 4.675 12.813 4 10 4s-5.212.675-7.171 2.009H0c.428.42.827 1.34.993 2.04A4.954 4.954 0 0 0 0 11.008c0 2.757 2.243 5 5 5a4.97 4.97 0 0 0 3.423-1.375L10 17l1.577-2.366A4.97 4.97 0 0 0 15 16.01c2.757 0 5-2.243 5-5 0-1.112-.377-2.13-.993-2.96.166-.7.565-1.62.993-2.04zm-15 8.4c-1.875 0-3.4-1.525-3.4-3.4s1.525-3.4 3.4-3.4 3.4 1.525 3.4 3.4-1.525 3.4-3.4 3.4zm5-3.4a5.008 5.008 0 0 0-4.009-4.9C7.195 5.704 8.53 5.5 10 5.5s2.805.204 4.009.61A5.008 5.008 0 0 0 10 11.008zm5 3.4c-1.875 0-3.4-1.525-3.4-3.4s1.525-3.4 3.4-3.4 3.4 1.525 3.4 3.4-1.525 3.4-3.4 3.4zM5 8.86c-1.185 0-2.15.964-2.15 2.15s.965 2.15 2.15 2.15 2.15-.964 2.15-2.15-.965-2.15-2.15-2.15zm0 2.791a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3zm10-2.791c-1.185 0-2.15.964-2.15 2.15s.965 2.15 2.15 2.15 2.15-.964 2.15-2.15-.965-2.15-2.15-2.15zm0 2.791a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3z"/></svg>
                                </a>
                                <a href="https://www.youtube.com/@kcgtravelincomingservices305" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-card hover:bg-[#d7393e] text-dark hover:text-white flex items-center justify-center rounded transition-colors shadow-sm" aria-label="YouTube">
                                    <Youtube size={18} />
                                </a>
                                <a href="https://gr.linkedin.com/company/kcg-travel" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-card hover:bg-[#d7393e] text-dark hover:text-white flex items-center justify-center rounded transition-colors shadow-sm" aria-label="LinkedIn">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Logo & Review Badges */}
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                        <div>
                            <img src="/images/logo-white.png" alt="KCG Tours" className="h-[80px] md:h-[100px] w-auto mx-auto" />
                        </div>

                        <div className="flex flex-row gap-3 items-stretch justify-center w-full max-w-[340px] mx-auto">
                            {/* Custom Outstanding TripAdvisor Badge */}
                            <a
                                href="https://www.tripadvisor.co.uk/Attraction_Review-g644214-d10413398-Reviews-KCG_Travel_Services-Lassi_Kefalonia_Ionian_Islands.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white p-3 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow border border-gray-100 group relative overflow-hidden w-1/2 max-w-[160px] text-center"
                            >
                                <div className="absolute top-0 inset-x-0 h-1 bg-[#34E0A1]"></div>
                                <div className="flex flex-col items-center justify-between h-full gap-2 pt-1">
                                    <div className="flex justify-center">
                                        <img src="/images/tripadvisor.png" alt="Tripadvisor Excellence Award" className="h-[45px] md:h-[50px] w-auto object-contain" />
                                    </div>

                                    <div className="text-center flex-grow flex flex-col justify-center">
                                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">Recommended by</p>
                                        <p className="text-[#000] font-bold text-sm leading-tight group-hover:text-primary transition-colors">94% of travellers</p>
                                    </div>

                                    <div className="flex flex-col items-center gap-1.5 mt-auto">
                                        <div className="flex items-center gap-0.5 text-[#34E0A1] bg-[#34E0A1]/10 px-2 py-1 rounded-full">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} size={11} fill="currentColor" />
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-[#000] font-medium underline decoration-gray-300 underline-offset-2 group-hover:decoration-primary transition-all">Read reviews</span>
                                    </div>
                                </div>
                            </a>

                            {/* Custom Google Reviews Badge */}
                            <a
                                href="https://www.google.com/search?kgmid=/g/11y_jkvz24&hl=el-GR&q=KCG+Tours&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=61b2fbd08caba3b0&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m5/1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white p-3 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow border border-gray-100 group relative overflow-hidden w-1/2 max-w-[160px] text-center"
                            >
                                <div className="absolute top-0 inset-x-0 h-1 bg-[#4285F4]"></div>
                                <div className="flex flex-col items-center justify-between h-full gap-2 pt-1">
                                    <div className="flex items-center justify-center gap-1.5 h-[45px] md:h-[50px]">
                                        <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.39-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                        </svg>
                                        <span className="text-base font-bold text-gray-700 tracking-tight" style={{ fontFamily: 'Product Sans, Arial, sans-serif' }}>Google</span>
                                    </div>

                                    <div className="text-center flex-grow flex flex-col justify-center">
                                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">Rating: 5.0 / 5.0</p>
                                        <p className="text-[#000] font-bold text-sm leading-tight group-hover:text-primary transition-colors">50+ Reviews</p>
                                    </div>

                                    <div className="flex flex-col items-center gap-1.5 mt-auto">
                                        <div className="flex items-center gap-0.5 text-[#FBBC05] bg-[#FBBC05]/10 px-2 py-1 rounded-full">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} size={11} fill="currentColor" />
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-[#000] font-medium underline decoration-gray-300 underline-offset-2 group-hover:decoration-primary transition-all">Write review</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Online Bookings & Policies */}
                    <div className="flex flex-col md:items-end text-white space-y-6 md:text-right">
                        <div>
                            <h4 className="text-2xl md:text-lg font-semibold text-white mb-2">Online Bookings</h4>
                            <p className="text-lg md:text-sm mb-4">Make your online reservation now easily & safe!</p>

                            <a href="https://kcgtravel.gr/wp-content/uploads/2025/08/Excursions-Terms-and-Conditions-and-Cancellation-Policy.pdf" target="_blank" rel="noopener noreferrer" className="text-lg md:text-sm font-semibold hover:text-white transition-colors border-b border-gray-300 pb-1 inline-block uppercase tracking-wider text-white/80">
                                Excursions Terms & Conditions
                            </a>
                        </div>

                        <div className="pt-2">
                            <h4 className="text-lg md:text-sm font-semibold text-white mb-3 uppercase tracking-wider">Partners</h4>
                            <ul className="space-y-2 text-lg md:text-sm flex flex-col md:items-end">
                                <li><a href="https://kcgtravel.gr" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">KCG Travel</a></li>
                                <li><a href="https://kefaloniatransfers.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Kefalonia Transfers</a></li>
                                <li><a href="https://kcgcarhire.gr" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">KCG Car Hire</a></li>
                            </ul>
                        </div>

                        <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-lg inline-flex flex-col md:items-end mt-2">
                            <span className="text-sm md:text-[10px] text-white/60 uppercase tracking-widest font-semibold mb-0.5">Proud to be</span>
                            <span className="text-white font-bold text-lg md:text-sm whitespace-nowrap tracking-wide">
                                part of <span className="text-white text-xl md:text-base">KCG Family</span>
                            </span>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar %} */}
                <div className="border-t border-white/20 pt-3 mt-3 flex flex-col md:flex-row justify-between items-center text-base md:text-xs text-white/70 text-center md:text-left gap-2">
                    <p>&copy; {new Date().getFullYear()} KCG Travel Services Kefalonia. All rights reserved.</p>
                    <p>MHTE License No: <span className="font-semibold">0458E600001187Y1</span></p>
                </div>
            </div>
        </footer>
    );
}
