import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export function TailoredExperiences() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement email sending logic here
        alert('Thank you! Your inquiry for a tailored experience has been submitted. We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', date: '', guests: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-sage">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Column: Information & Inspiration */}
                    <motion.div
                        className="flex-1 flex flex-col justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-light text-white mb-2 leading-tight">
                            Tailored <span className="font-semibold text-white">Experiences</span>
                        </h2>
                        <h3 className="text-xl text-white/80 mb-6 font-light">Crafting Your Perfect Kefalonia Journey</h3>

                        <p className="text-white/90 mb-8 leading-relaxed text-lg">
                            At KCG Tours, we believe that every traveler is unique.
                            If you have specific destinations in mind or prefer to create your own itinerary,
                            we are here to bring your vision to life. From secluded beaches and hidden gems
                            to specialized wine tasting and cultural deep-dives, let us design a luxury
                            private tour that perfectly matches your pace and interests.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-sm">
                                <div className="bg-primary p-2 rounded-full text-white shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Pick Your Spots</h4>
                                    <p className="text-gray-500">Myrtos, Assos, Melissani & more.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-sm">
                                <div className="bg-primary p-2 rounded-full text-white shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Your Own Pace</h4>
                                    <p className="text-gray-500">No rush, spend as much time as you like.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 rounded-bl-full pointer-events-none" />

                            <h3 className="text-2xl text-dark font-semibold mb-6">Request a Custom Tour</h3>
                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Name *</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Email *</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder="+1 (xxx)"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Guests</label>
                                        <select
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-600 bg-white"
                                        >
                                            <option value="">Select</option>
                                            <option value="1-2">1 - 2</option>
                                            <option value="3-4">3 - 4</option>
                                            <option value="5-8">5 - 8</option>
                                            <option value="9+">9+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Your Ideas / Needs *</label>
                                    <textarea
                                        required
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                                        placeholder="Tell us about places you want to visit, special requirements, etc."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-hover text-white hover:text-dark group font-bold py-4 rounded-md transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                >
                                    <span>Send Inquiry</span>
                                    <Mail size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
