import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TourCard } from './components/TourCard';
import { tourCategories } from './data/tours';
import { TailoredExperiences } from './components/TailoredExperiences';
import { Footer } from './components/Footer';
import { BokunPage } from './components/BokunPage';
import type { TourCategory } from './types';

// ── nav helpers ─────────────────────────────────────────────────────────────

/** Collect all anchor IDs for a category (itself + any sub-categories) */
function anchorIds(cat: TourCategory): string[] {
    if (cat.subCategories && cat.subCategories.length > 0) {
        return [cat.id, ...cat.subCategories.map(s => s.id)];
    }
    return [cat.id];
}

function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── NavItem with optional dropdown ───────────────────────────────────────────

function NavItem({ cat }: { cat: TourCategory }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // close on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    // PRIVATE TOURS → always just scrolls to tailored-experiences
    if (cat.id === 'private-tours') {
        return (
            <button
                onClick={() => scrollToId('tailored-experiences')}
                className="hover:text-primary transition-colors uppercase tracking-wide font-medium text-sm"
            >
                {cat.title}
            </button>
        );
    }

    // Has sub-categories → render a dropdown
    if (cat.subCategories && cat.subCategories.length > 0) {
        return (
            <div ref={ref} className="relative">
                <button
                    className="flex items-center gap-1 hover:text-primary transition-colors uppercase tracking-wide font-medium text-sm"
                    onClick={() => setOpen(v => !v)}
                >
                    {cat.title}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                </button>

                {open && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md border border-gray-100 min-w-[200px] z-50 py-1">
                        {/* top-level anchor */}
                        <button
                            onClick={() => { scrollToId(cat.id); setOpen(false); }}
                            className="w-full text-left px-4 py-2 text-sm text-[#404041] hover:bg-gray-50 hover:text-primary transition-colors font-medium border-b border-gray-100"
                        >
                            All {cat.title}
                        </button>
                        {cat.subCategories.map(sub => (
                            <button
                                key={sub.id}
                                onClick={() => { scrollToId(sub.id); setOpen(false); }}
                                className="w-full text-left px-4 py-2 text-sm text-[#404041] hover:bg-gray-50 hover:text-primary transition-colors"
                            >
                                {sub.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // Simple link
    return (
        <button
            onClick={() => scrollToId(cat.id)}
            className="hover:text-primary transition-colors uppercase tracking-wide font-medium text-sm"
        >
            {cat.title}
        </button>
    );
}

// ── Main App ─────────────────────────────────────────────────────────────────

function App() {
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

    if (selectedProductId) {
        return <BokunPage productId={selectedProductId} onBack={() => setSelectedProductId(null)} />;
    }

    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <nav className="bg-white px-4 h-[80px] text-[#404041] sticky top-0 z-50 shadow-md flex items-center border-b border-gray-100">
                <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
                    <div className="flex items-center">
                        <img src="/images/logo.png" alt="KCG Tours" className="h-[50px] md:h-[60px] w-auto" />
                    </div>
                    <div className="hidden md:flex gap-6 items-center">
                        <button
                            onClick={() => scrollToId('hero')}
                            className="hover:text-primary transition-colors uppercase tracking-wide font-medium text-sm"
                        >
                            HOME
                        </button>
                        {tourCategories.map(cat => (
                            <NavItem key={cat.id} cat={cat} />
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <header id="hero" className="h-[100vh] bg-[#404041] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero3.webp"
                        className="w-full h-full object-cover object-bottom opacity-50"
                        alt="Kefalonia Hero"
                    />
                </div>
                <motion.div
                    className="relative z-10 text-center text-white px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-light mb-4">Your Kefalonia. Perfectly Planned.</h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Bus tours, boat cruises &amp; shore excursions — handpicked, expertly guided, unforgettable.
                    </p>
                </motion.div>
            </header>

            {/* Tour Categories */}
            <main>
                <div>
                    {tourCategories.map((category) => {
                        // PRIVATE TOURS → no cards, just skip (the section is TailoredExperiences)
                        if (category.id === 'private-tours') return null;

                        // Category has sub-categories (e.g. CRUISES)
                        if (category.subCategories && category.subCategories.length > 0) {
                            return (
                                <section
                                    key={category.id}
                                    id={category.id}
                                    className="py-[40px] scroll-mt-[60px]"
                                >
                                    {/* Category heading */}
                                    <motion.div
                                        className="text-center mb-10 flex-none"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                    >
                                        <h2 className="text-3xl md:text-[30px] font-normal text-dark mb-2">{category.title}</h2>
                                        <h4 className="text-[24px] font-normal text-primary">{category.subtitle}</h4>
                                    </motion.div>

                                    {/* Sub-categories */}
                                    {category.subCategories.map(sub => (
                                        <div key={sub.id} id={sub.id} className="mb-16 scroll-mt-[80px]">
                                            {/* Sub-category heading */}
                                            <motion.div
                                                className="text-center mb-6"
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-80px" }}
                                            >
                                                <h3 className="text-xl md:text-2xl font-medium text-dark tracking-wide uppercase border-b border-primary/30 inline-block pb-1 px-4">
                                                    {sub.title}
                                                </h3>
                                            </motion.div>

                                            <div className="w-full px-0 md:px-[40px] xl:px-[80px]">
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch justify-center">
                                                    {sub.tours.map((tour, idx) => (
                                                        <div key={idx} className="flex h-full">
                                                            <TourCard
                                                                tourTitle={tour.tourTitle}
                                                                tourType={tour.tourType}
                                                                itinerary={tour.itinerary}
                                                                operatingDays={tour.operatingDays}
                                                                duration={tour.duration}
                                                                from_price={tour.from_price}
                                                                badges={tour.badges}
                                                                bokunProductId={tour.bokunProductId}
                                                                short_description={tour.short_description}
                                                                isBookableOnBokun={tour.isBookableOnBokun}
                                                                slides={tour.slides}
                                                                onBook={() => setSelectedProductId(tour.bokunProductId)}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </section>
                            );
                        }

                        // Standard flat category
                        return (
                            <section
                                id={category.id}
                                key={category.id}
                                className="min-h-[calc(100vh-60px)] flex flex-col justify-center py-[20px] scroll-mt-[60px]"
                            >
                                <motion.div
                                    className="text-center mb-6 flex-none"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <h2 className="text-3xl md:text-[30px] font-normal text-dark mb-2">{category.title}</h2>
                                    <h4 className="text-[24px] font-normal text-primary">{category.subtitle}</h4>
                                </motion.div>

                                <div className="w-full px-0 md:px-[40px] xl:px-[80px] h-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch justify-center h-full">
                                        {(category.tours ?? []).map((tour, idx) => (
                                            <div key={idx} className="flex h-full">
                                                <TourCard
                                                    tourTitle={tour.tourTitle}
                                                    tourType={tour.tourType}
                                                    itinerary={tour.itinerary}
                                                    operatingDays={tour.operatingDays}
                                                    duration={tour.duration}
                                                    from_price={tour.from_price}
                                                    badges={tour.badges}
                                                    bokunProductId={tour.bokunProductId}
                                                    short_description={tour.short_description}
                                                    isBookableOnBokun={tour.isBookableOnBokun}
                                                    slides={tour.slides}
                                                    onBook={() => setSelectedProductId(tour.bokunProductId)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>

                {/* Tailored Experiences — also serves as the "Private Tours" anchor */}
                <div id="tailored-experiences">
                    <TailoredExperiences />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
