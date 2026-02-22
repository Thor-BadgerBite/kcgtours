import React from 'react';
import { Facebook, Instagram, ShieldCheck, MapPin, Phone, Mail, Award, Star, Youtube, Linkedin, Tent } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-sage pt-16 pb-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-start mb-12">

                    {/* Left Column: Contact Details */}
                    <div className="flex flex-col text-white space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-2">KCG Travel</h4>
                        <div className="space-y-3 text-sm">
                            <p className="font-light leading-relaxed mb-4">
                                Your trusted travel partner in Kefalonia offering accommodation, transfers, car hire and unforgettable island experiences.
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail size={16} className="text-primary shrink-0" />
                                <a href="mailto:info@kcgtravel.gr" className="hover:text-primary transition-colors">info@kcgtravel.gr</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone size={16} className="text-primary shrink-0" />
                                <span>+30 2671 025653</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <MapPin size={16} className="mt-1 shrink-0 text-primary" />
                                <span>Argostoli-Aerodromiou, Lassi<br />Kefalonia, Greece, 21800</span>
                            </p>
                        </div>

                        <div className="pt-4">
                            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Follow Us</h4>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://www.facebook.com/kcg.services.kefalonia/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary hover:bg-primary-hover hover:text-dark text-white flex items-center justify-center rounded transition-colors shadow-sm" aria-label="Facebook">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://www.instagram.com/kcg.travel.services/?hl=en" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary hover:bg-primary-hover hover:text-dark text-white flex items-center justify-center rounded transition-colors shadow-sm" aria-label="Instagram">
                                    <Instagram size={18} />
                                </a>
                                <a href="https://www.tripadvisor.com/Attraction_Review-g644214-d10413398-Reviews-KCG_Travel_Services-Lassi_Kefalonia_Ionian_Islands.html" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary hover:bg-primary-hover hover:text-dark text-white flex items-center justify-center rounded transition-colors shadow-sm" aria-label="Tripadvisor">
                                    <Tent size={18} />
                                </a>
                                <a href="https://www.youtube.com/@kcgtravelincomingservices305" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary hover:bg-primary-hover hover:text-dark text-white flex items-center justify-center rounded transition-colors shadow-sm" aria-label="YouTube">
                                    <Youtube size={18} />
                                </a>
                                <a href="https://gr.linkedin.com/company/kcg-travel" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary hover:bg-primary-hover hover:text-dark text-white flex items-center justify-center rounded transition-colors shadow-sm" aria-label="LinkedIn">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Logo & TripAdvisor */}
                    <div className="flex flex-col items-center justify-center text-center space-y-8">
                        <div>
                            <img src="/images/logo.png" alt="KCG Tours" className="h-[80px] md:h-[100px] w-auto mx-auto" />
                        </div>

                        {/* Custom Outstanding TripAdvisor Badge */}
                        <a
                            href="https://www.tripadvisor.co.uk/Attraction_Review-g644214-d10413398-Reviews-KCG_Travel_Services-Lassi_Kefalonia_Ionian_Islands.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow border border-gray-100 group relative overflow-hidden max-w-[280px] w-full"
                        >
                            <div className="absolute top-0 inset-x-0 h-1 bg-[#34E0A1]"></div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-end justify-center gap-2">
                                    <Award className="text-[#34E0A1] mb-1" size={24} />
                                    <span className="font-extrabold text-[#000] text-xl tracking-tight">Tripadvisor</span>
                                </div>

                                <div className="text-center">
                                    <p className="text-xs uppercase font-bold text-gray-400 tracking-widest mb-1">Recommended by</p>
                                    <p className="text-[#000] font-bold text-lg leading-tight group-hover:text-primary transition-colors">Top Reviews &bull; 5 Stars</p>
                                </div>

                                <div className="flex items-center gap-1 text-[#34E0A1] bg-[#34E0A1]/10 px-3 py-1.5 rounded-full">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={14} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-xs text-[#000] font-medium mt-1 underline decoration-gray-300 underline-offset-4 group-hover:decoration-primary transition-all">Read our latest reviews</span>
                            </div>
                        </a>
                    </div>

                    {/* Right Column: Online Bookings & Policies */}
                    <div className="flex flex-col md:items-end text-white space-y-6 md:text-right">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Online Bookings</h4>
                            <p className="text-sm mb-4">Make your online reservation now easily & safe!</p>

                            <a href="#" className="text-sm font-semibold hover:text-primary transition-colors border-b border-gray-300 pb-1 inline-block uppercase tracking-wider text-white/80">
                                Booking Terms & Privacy Policy
                            </a>
                        </div>

                        <div className="bg-card px-4 py-2 rounded shadow-sm border border-gray-100 flex items-center gap-2 max-w-fit">
                            <ShieldCheck className="text-green-500" size={20} />
                            <span className="text-xs font-bold text-gray-600 block leading-tight">
                                SECURED BY <br />
                                <span className="text-black text-sm">SECTIGO</span>
                            </span>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar %} */}
                <div className="border-t border-white/20 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/70 text-center md:text-left gap-4">
                    <p>&copy; {new Date().getFullYear()} KCG Travel Services Kefalonia. All rights reserved.</p>
                    <p>License No: <span className="font-semibold">0458E6000000XXXX</span></p>
                </div>
            </div>
        </footer>
    );
}
