import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { TourCard } from './components/TourCard';
import { CategoryCarousel } from './components/CategoryCarousel';
import { tourCategories } from './data/tours';
import { SEO } from './components/SEO';
import { TailoredExperiences } from './components/TailoredExperiences';
import { Footer } from './components/Footer';
import { BokunPage } from './components/BokunPage';
import { GoldenPackagePopup } from './components/GoldenPackagePopup';
import { ThankYou } from './components/ThankYou';
import type { TourCategory, Tour } from './types';

// ── slug helper ──────────────────────────────────────────────────────────────

export function slugify(text: string) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

// ── scroll helper ────────────────────────────────────────────────────────────

function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const isMobile = window.innerWidth < 768;
    // On mobile, header hides during scroll down, so offset should be minimal
    const navHeight = isMobile ? 10 : 100;
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const closeMobileMenuAndScrollTo = (id: string) => {
        setMobileMenuOpen(false);
        scrollToId(id);
    };

    // Smart Sticky Header Logic for Mobile
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) {
                setHeaderVisible(true);
                return;
            }

            const currentScrollY = window.scrollY;
            if (currentScrollY < 100) {
                setHeaderVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setHeaderVisible(false); // Scrolling down
            } else {
                setHeaderVisible(true); // Scrolling up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Handle URL hash on mount (e.g., for QR codes like kcgtours.gr/#private)
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            // Mapping common aliases
            const targetId = hash === 'private' ? 'tailored-experiences'
                : hash === 'shorex' ? 'shore-excursions'
                : hash;
            
            // Wait slightly for DOM to be ready
            const timer = setTimeout(() => {
                scrollToId(targetId);
            }, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="min-h-screen">
            <GoldenPackagePopup />
            <SEO 
                description="Discover the best of Kefalonia with KCG Tours. Handpicked bus tours, boat cruises, private excursions, and shore excursions. Book your unforgettable Ionian island experience today."
                keywords="Kefalonia tours, Kefalonia cruises, bus tours Kefalonia, boat trips Kefalonia, Fiscardo tour, Melissani Lake, Assos, Myrtos beach, Ithaca cruise, Zakynthos cruise, private tours Kefalonia, shore excursions Argostoli, KCG Tours"
                url="https://kcgtours.gr/"
            />
            {/* Navbar */}
            <nav className={`bg-card h-[100px] text-[#404041] sticky top-0 z-50 shadow-md flex items-center border-b border-gray-100 transition-transform duration-300 ${!headerVisible ? '-translate-y-full' : 'translate-y-0'}`}>
                <div className="w-full flex justify-between items-center pl-[5px] pr-4 md:pr-8">
                    <div className="flex-shrink-0 flex items-center">
                        <img src="/images/logo-new.png" alt="KCG Tours" className="w-[140px] h-[85px] object-contain cursor-pointer" onClick={() => window.scrollTo(0, 0)} />
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
                    {/* Mobile hamburger */}
                    <button 
                        className="md:hidden p-2 text-dark hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-card flex flex-col pt-6 px-6 overflow-y-auto">
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <img src="/images/logo-new.png" alt="KCG Tours" className="h-[60px] object-contain" />
                        <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-dark hover:text-primary">
                            <X className="w-8 h-8" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 items-start pb-8">
                        <button
                            onClick={() => closeMobileMenuAndScrollTo('hero')}
                            className="text-2xl hover:text-primary transition-colors uppercase tracking-wide font-normal"
                        >
                            HOME
                        </button>
                        {tourCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => closeMobileMenuAndScrollTo(cat.id === 'private-tours' ? 'tailored-experiences' : cat.id)}
                                className="text-2xl hover:text-primary transition-colors uppercase tracking-wide font-normal text-left"
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Hero */}
            <header id="hero" className="h-[100vh] bg-[#404041] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero2.webp"
                        alt="Kefalonia Hero Background"
                        className="w-full h-full object-cover object-bottom opacity-50"
                    />
                </div>
                <motion.div
                    className="relative z-10 text-center text-white px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-light mb-4">Kefalonia Tours & Cruises <br/><span className="text-2xl md:text-4xl opacity-80 italic">Perfectly Planned</span></h1>
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
                                    className="pt-[30px] md:py-[10px] scroll-mt-[10px] md:scroll-mt-[100px] bg-[var(--color-sage)] md:bg-transparent"
                                >
                                    {/* Sub-categories — NO generic category heading shown */}
                                    {category.subCategories.map((sub, subIdx) => (
                                        <div
                                            key={sub.id}
                                            id={sub.id}
                                            className={`scroll-mt-[10px] md:scroll-mt-[120px] ${subIdx > 0 ? 'pt-[30px]' : ''}`}
                                        >
                                            {/* Sub-category heading + subtitle */}
                                            <motion.div
                                                className="text-center mb-6 md:mb-3"
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-80px" }}
                                            >
                                                <h2 className="text-2xl md:text-[30px] font-bold md:font-normal text-white md:text-dark inline-block relative pb-1">
                                                    {sub.title}
                                                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white md:bg-primary rounded-full" />
                                                </h2>
                                                {sub.subtitle && (
                                                    <p className="text-lg md:text-[20px] font-normal text-white md:text-dark mt-1">
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
                                                            externalBookingUrl={tour.externalBookingUrl}
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
                                className="pt-[30px] md:py-[10px] scroll-mt-[10px] md:scroll-mt-[100px] bg-[var(--color-sage)] md:bg-transparent"
                            >
                                <motion.div
                                    className="text-center mb-6 md:mb-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <h2 className="text-2xl md:text-[30px] font-bold md:font-normal text-white md:text-dark inline-block relative pb-1 mb-1">
                                        {category.title}
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white md:bg-primary rounded-full" />
                                    </h2>
                                    {category.subtitle && <h4 className="text-xl md:text-[24px] font-normal text-white md:text-dark mt-1">{category.subtitle}</h4>}
                                </motion.div>

                                <div className="w-full px-0 md:px-[40px] xl:px-[80px]">
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
                                                externalBookingUrl={tour.externalBookingUrl}
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
    let foundTour: Tour | null = null;

    for (const cat of tourCategories) {
        if (cat.subCategories) {
            for (const sub of cat.subCategories) {
                const match = sub.tours.find(t => slugify(t.tourTitle) === slug);
                if (match) {
                    foundTour = match;
                    break;
                }
            }
        }
        if (cat.tours) {
            const match = cat.tours.find(t => slugify(t.tourTitle) === slug);
            if (match) {
                foundTour = match;
                break;
            }
        }
        if (foundTour) break;
    }

    const foundProductId = foundTour?.bokunProductId;
    const foundTourTitle = foundTour?.tourTitle;

    // Dynamic SEO doc title
    useEffect(() => {
        window.scrollTo(0, 0); // make sure it scrolls to top on new page load
    }, [foundTourTitle]);

    if (!foundTour || !foundProductId) {
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

    // JSON-LD for the specific tour
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Trip",
        "name": foundTour.tourTitle,
        "description": foundTour.short_description || foundTour.card_subtitle || `Experience the ${foundTour.tourTitle} in Kefalonia.`,
        "image": `https://kcgtours.gr${foundTour.slides[0]?.image}`,
        "offers": {
            "@type": "Offer",
            "price": foundTour.from_price,
            "priceCurrency": "EUR",
            "url": `https://kcgtours.gr/tour/${slug}`
        },
        "itinerary": {
            "@type": "ItemList",
            "numberOfItems": foundTour.itinerary?.split(' • ').length || 1,
            "itemListElement": foundTour.itinerary?.split(' • ').map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item
            }))
        },
        "provider": {
            "@type": "TravelAgency",
            "name": "KCG Tours",
            "url": "https://kcgtours.gr/"
        }
    };

    return (
        <>
            <SEO 
                title={foundTourTitle}
                description={foundTour.short_description || foundTour.card_subtitle}
                image={`https://kcgtours.gr${foundTour.slides[0]?.image}`}
                url={`https://kcgtours.gr/tour/${slug}`}
                jsonLd={jsonLd}
            />
            <BokunPage productId={foundProductId} onBack={() => navigate('/')} />
        </>
    );
}

// ── Root App Routing Structure ────────────────────────────────────────────────

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tour/:slug" element={<TourRoute />} />
                <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
            <Analytics />
        </BrowserRouter>
    );
}

export default App;
