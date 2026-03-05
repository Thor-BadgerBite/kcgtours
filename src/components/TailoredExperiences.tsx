import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, ChevronDown, Check, Stars, Sparkles } from 'lucide-react';

const PLACES_OF_INTEREST = [
    'Myrtos Beach',
    'Assos Village',
    'Fiscardo',
    'Melissani Lake',
    'Drogarati Cave',
    'Antisamos Beach',
    'Skala Beach',
    'Lourdas Beach',
    'Xi Beach (Red Sand)',
    'Agia Efimia',
    'Argostoli Town',
    'Lixouri',
    'Saint Gerasimos Monastery',
    'Robola Winery',
    'Kipouria Monastery',
    'Ithaca Island',
    'Petani Beach',
    'Ainos National Park',
    'Poros Village',
    'Ainos National Park',
    'Saint George Castle',
];

export function TailoredExperiences() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        guests: '',
        message: '',
    });
    const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
    const [placesOpen, setPlacesOpen] = useState(false);
    const placesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleOutside(e: MouseEvent) {
            if (placesRef.current && !placesRef.current.contains(e.target as Node)) {
                setPlacesOpen(false);
            }
        }
        if (placesOpen) document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, [placesOpen]);

    const togglePlace = (place: string) => {
        setSelectedPlaces(prev =>
            prev.includes(place) ? prev.filter(p => p !== place) : [...prev, place]
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! Your inquiry for a tailored experience has been submitted. We will get back to you shortly.');
        setFormData({ name: '', email: '', date: '', guests: '', message: '' });
        setSelectedPlaces([]);
    };

    const placesLabel = selectedPlaces.length === 0
        ? 'Select places…'
        : selectedPlaces.length === 1
            ? selectedPlaces[0]
            : `${selectedPlaces.length} places selected`;

    return (
        <section id="contact" className="py-6 bg-sage relative overflow-hidden">
            {/* Background texture image */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img src="/images/beach.jpg" className="w-full h-full object-cover grayscale" alt="" />
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Column: Information & Inspiration */}
                    <motion.div
                        className="flex-1 flex flex-col justify-between"
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-sm">
                                <div className="bg-primary p-2 rounded-full text-white shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Pick Your Spots</h4>
                                    <p className="text-gray-500">Myrtos, Assos, Melissani & more — you choose.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-sm">
                                <div className="bg-primary p-2 rounded-full text-white shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Your Own Pace</h4>
                                    <p className="text-gray-500">No fixed schedule. Linger as long as you like.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-sm">
                                <div className="bg-primary p-2 rounded-full text-white shrink-0">
                                    <Stars size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Crafted by Experts</h4>
                                    <p className="text-gray-500">Our local team builds the perfect trip around your wishes.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-sm">
                                <div className="bg-primary p-2 rounded-full text-white shrink-0">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Anything Goes</h4>
                                    <p className="text-gray-500">Beach, caves, wine, villages — dream it, we'll make it happen.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        className="flex-1 flex flex-col"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-card p-4 rounded-2xl shadow-lg border border-gray-100 relative overflow-visible flex flex-col flex-1">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 rounded-bl-full pointer-events-none" />

                            <h3 className="text-2xl text-dark font-semibold mb-4">Request a Custom Tour</h3>
                            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">

                                {/* Row 1: Name + Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Name *</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
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
                                            className="w-full px-3 py-2.5 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Date + Guests + Places of Interest */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Guests</label>
                                        <select
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-600 bg-white"
                                        >
                                            <option value="">Select</option>
                                            <option value="1-2">1 – 2</option>
                                            <option value="3-4">3 – 4</option>
                                            <option value="5-8">5 – 8</option>
                                            <option value="9+">9+</option>
                                        </select>
                                    </div>

                                    {/* Places of Interest Dropdown */}
                                    <div className="space-y-1" ref={placesRef}>
                                        <label className="text-sm font-medium text-gray-700">Places of Interest</label>
                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={() => setPlacesOpen(v => !v)}
                                                className="w-full px-3 py-2.5 rounded-md border border-gray-200 bg-white text-left text-gray-600 text-sm flex items-center justify-between focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            >
                                                <span className="truncate">{placesLabel}</span>
                                                <ChevronDown className={`w-4 h-4 shrink-0 ml-1 transition-transform duration-200 ${placesOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            {placesOpen && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl z-50 max-h-56 overflow-y-auto">
                                                    {PLACES_OF_INTEREST.map(place => (
                                                        <button
                                                            key={place}
                                                            type="button"
                                                            onClick={() => togglePlace(place)}
                                                            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors"
                                                        >
                                                            <span className={`w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-colors ${selectedPlaces.includes(place) ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                                                                {selectedPlaces.includes(place) && <Check className="w-3 h-3 text-white" />}
                                                            </span>
                                                            <span className={selectedPlaces.includes(place) ? 'text-primary font-medium' : 'text-gray-700'}>
                                                                {place}
                                                            </span>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3: Message */}
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-gray-700">Your Ideas / Needs *</label>
                                    <textarea
                                        required
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2.5 rounded-md border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                                        placeholder="Tell us about special requirements, preferred pace, dietary needs, etc."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-hover text-white hover:text-dark font-bold py-3.5 rounded-md transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
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
