import React from 'react';
import { motion } from 'framer-motion';
import { TourCard } from './components/TourCard';
import { tourCategories } from './data/tours';

function App() {
    return (
        <div className="min-h-screen bg-[#d0d3d4] text-[#424242]">
            {/* Basic Navbar Placeholder */}
            <nav className="bg-[#404041] px-4 h-[60px] text-white sticky top-0 z-50 shadow-md flex items-center">
                <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
                    <div className="font-bold text-xl">Avalon Travel</div>
                    <div className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
                        <a href="#hero" className="hover:text-[#64a1e0] transition-colors font-semibold">HOME</a>
                        {tourCategories.map(cat => (
                            <a key={cat.id} href={`#${cat.id}`} className="hover:text-[#64a1e0] transition-colors">{cat.title}</a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Basic Hero Placeholder */}
            <header id="hero" className="h-[100vh] bg-[#404041] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://avalontravel-kefalonia.gr/images/2024/05/06/depositphotos_359881686_xl.jpg"
                        className="w-full h-full object-cover opacity-50"
                        alt="Hero background"
                    />
                </div>
                <motion.div
                    className="relative z-10 text-center text-white px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-light mb-4">Discover Kefalonia</h1>
                    <p className="text-xl md:text-2xl opacity-90">Private Tours & Excursions</p>
                </motion.div>
            </header>

            {/* Tour Categories */}
            <main>
                <div>
                    {tourCategories.map((category) => (
                        <section id={category.id} key={category.id} className="min-h-[calc(100vh-60px)] flex flex-col justify-center py-[40px] scroll-mt-[60px]">
                            <motion.div
                                className="text-center mb-12 flex-none"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <h2 className="text-3xl md:text-[30px] font-normal text-[#404041] mb-2">{category.title}</h2>
                                <h4 className="text-[24px] font-normal text-[#5d95d0]">{category.subtitle}</h4>
                            </motion.div>

                            <div className="w-full px-0 md:px-[40px] xl:px-[80px]">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch justify-center h-full">
                                    {category.tours.map((tour, idx) => (
                                        <div key={idx} className="flex h-full">
                                            <TourCard
                                                tourTitle={tour.tourTitle}
                                                duration={tour.duration}
                                                bokunProductId={tour.bokunProductId}
                                                slides={tour.slides}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <footer className="bg-white py-12 text-center text-[#303030]">
                <p>&copy; 2026 Avalon Travel.</p>
            </footer>
        </div>
    );
}

export default App;
