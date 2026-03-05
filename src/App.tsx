import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TourCard } from './components/TourCard';
import { CategoryCarousel } from './components/CategoryCarousel';
import { tourCategories } from './data/tours';
import { TailoredExperiences } from './components/TailoredExperiences';
import { Footer } from './components/Footer';
import { BokunPage } from './components/BokunPage';
import type { TourCategory } from './types';

// ── slug helper ──────────────────────────────────────────────────────────────

export function slugify(text: string) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

// ── scroll helper ────────────────────────────────────────────────────────────

function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 60;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
}

// ── NavItem with optional dropdown ───────────────────────────────────────────

function NavItem({ cat }: { cat: TourCategory }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    // PRIVATE TOURS → scrolls to tailored-experiences
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

    // Has sub-categories → dropdown
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
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md border border-gray-100 min-w-[210px] z-50 py-1">
                        {/* Top-level anchor */}
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

    // Simple button link
    return (
        <button
            onClick={() => scrollToId(cat.id)}
            className="hover:text-primary transition-colors uppercase tracking-wide font-medium text-sm"
        >
            {cat.title}
        </button>
    );
}

// ── HomePage component ───────────────────────────────────────────────────────

function HomePage() {
    const navigate = useNavigate();

    // scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <nav className="bg-white px-4 h-[80px] text-[#404041] sticky top-0 z-50 shadow-md flex items-center border-b border-gray-100">
                <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
                    <div className="flex items-center">
                        <img src="/images/logo.png" alt="KCG Tours" className="h-[50px] md:h-[60px] w-auto cursor-pointer" onClick={() => window.scrollTo(0, 0)} />
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
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-center opacity-50"
                    >
                        <source src="/images/intro_hero.mp4" type="video/mp4" />
                    </video>
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
                        // PRIVATE TOURS → no cards, handled by TailoredExperiences below
                        if (category.id === 'private-tours') return null;

                        // ── Category with sub-categories (CRUISES) ───────────────────────
                        if (category.subCategories && category.subCategories.length > 0) {
                            return (
                                <section
                                    key={category.id}
                                    id={category.id}
                                    className="py-[40px] scroll-mt-[60px]"
                                >
                                    {/* Sub-categories — NO generic category heading shown */}
                                    {category.subCategories.map((sub, subIdx) => (
                                        <div
                                            key={sub.id}
                                            id={sub.id}
                                            className={`scroll-mt-[80px] ${subIdx > 0 ? 'mt-16' : ''}`}
                                        >
                                            {/* Sub-category heading + subtitle */}
                                            <motion.div
                                                className="text-center mb-6"
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-80px" }}
                                            >
                                                <h2 className="text-3xl md:text-[30px] font-normal text-dark inline-block relative pb-2">
                                                    {sub.title}
                                                    {/* Red underline */}
                                                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
                                                </h2>
                                                {sub.subtitle && (
                                                    <p className="text-[20px] font-normal text-primary mt-3">
                                                        {sub.subtitle}
                                                    </p>
                                                )}
                                            </motion.div>

                                            <div className="w-full px-0 md:px-[40px] xl:px-[80px]">
                                                <CategoryCarousel
                                                    isBusTours={category.id === 'bus-tours'}
                                                    items={sub.tours.map((tour, idx) => (
                                                        <TourCard
                                                            key={idx}
                                                            tourTitle={tour.tourTitle}
                                                            tourType={tour.tourType}
                                                            itinerary={tour.itinerary}
                                                            operatingDays={tour.operatingDays}
                                                            duration={tour.duration}
                                                            from_price={tour.from_price}
                                                            badges={tour.badges}
                                                            bokunProductId={tour.bokunProductId}
                                                            baseViews={tour.baseViews}
                                                            card_subtitle={tour.card_subtitle}
                                                            short_description={tour.short_description}
                                                            isBookableOnBokun={tour.isBookableOnBokun}
                                                            isPrivateAvailable={tour.isPrivateAvailable}
                                                            private_description={tour.private_description}
                                                            slides={tour.slides}
                                                            onBook={() => navigate(`/tour/${slugify(tour.tourTitle)}`)}
                                                        />
                                                    ))}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </section>
                            );
                        }

                        // ── Standard flat category ────────────────────────────────────────
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
                                    <CategoryCarousel
                                        isBusTours={category.id === 'bus-tours'}
                                        items={(category.tours ?? []).map((tour, idx) => (
                                            <TourCard
                                                key={idx}
                                                tourTitle={tour.tourTitle}
                                                tourType={tour.tourType}
                                                itinerary={tour.itinerary}
                                                operatingDays={tour.operatingDays}
                                                duration={tour.duration}
                                                from_price={tour.from_price}
                                                badges={tour.badges}
                                                bokunProductId={tour.bokunProductId}
                                                baseViews={tour.baseViews}
                                                card_subtitle={tour.card_subtitle}
                                                short_description={tour.short_description}
                                                isBookableOnBokun={tour.isBookableOnBokun}
                                                isPrivateAvailable={tour.isPrivateAvailable}
                                                private_description={tour.private_description}
                                                slides={tour.slides}
                                                onBook={() => navigate(`/tour/${slugify(tour.tourTitle)}`)}
                                            />
                                        ))}
                                    />
                                </div>
                            </section>
                        );
                    })}
                </div>

                {/* Tailored Experiences — "Private Tours" scrolls here */}
                <div id="tailored-experiences">
                    <TailoredExperiences />
                </div>
            </main>

            <Footer />
        </div>
    );
}

// ── TourRoute Component ───────────────────────────────────────────────────────

function TourRoute() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    // Find productId and match
    let foundProductId: string | null = null;
    let foundTourTitle = "";

    for (const cat of tourCategories) {
        if (cat.subCategories) {
            for (const sub of cat.subCategories) {
                const match = sub.tours.find(t => slugify(t.tourTitle) === slug);
                if (match) {
                    foundProductId = match.bokunProductId;
                    foundTourTitle = match.tourTitle;
                    break;
                }
            }
        }
        if (cat.tours) {
            const match = cat.tours.find(t => slugify(t.tourTitle) === slug);
            if (match) {
                foundProductId = match.bokunProductId;
                foundTourTitle = match.tourTitle;
                break;
            }
        }
        if (foundProductId) break;
    }

    // Dynamic SEO doc title
    useEffect(() => {
        window.scrollTo(0, 0); // make sure it scrolls to top on new page load
        if (foundTourTitle) {
            document.title = `${foundTourTitle} | KCG Tours`;
        }
        return () => { document.title = "KCG Tours Kefalonia"; };
    }, [foundTourTitle]);

    if (!foundProductId) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-3xl font-light mb-4 text-[#404041]">Tour not found</h1>
                <button
                    onClick={() => navigate('/')}
                    className="text-white hover:text-dark py-2 px-8 font-bold bg-primary hover:bg-primary-hover rounded shadow transition-colors"
                >
                    Return Home
                </button>
            </div>
        );
    }

    // Standard behavior: going back returns to previous route history
    return <BokunPage productId={foundProductId} onBack={() => navigate(-1)} />;
}

// ── Root App Routing Structure ────────────────────────────────────────────────

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tour/:slug" element={<TourRoute />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
