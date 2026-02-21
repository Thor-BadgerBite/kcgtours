import React from 'react';
import { motion } from 'framer-motion';
import { TourCard } from './components/TourCard';
import { tourCategories } from './data/tours';

function App() {
    return (
        <div className="min-h-screen bg-[#f1f3f5] text-[#424242]">
            {/* Basic Navbar Placeholder */}
            <nav className="bg-[#404041] p-4 text-white sticky top-0 z-50 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                    <div className="font-bold text-xl">Avalon Travel</div>
                    <div className="hidden md:flex gap-6">
                        <a href="#" className="hover:text-[#64a1e0] transition-colors">HOME</a>
                        <a href="#" className="hover:text-[#64a1e0] transition-colors">TOURS</a>
                        <a href="#" className="hover:text-[#64a1e0] transition-colors">CONTACT</a>
                    </div>
                </div>
            </nav>

            {/* Basic Hero Placeholder */}
            <header className="h-[100vh] bg-[#404041] flex items-center justify-center relative overflow-hidden">
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
            <main className="py-20">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                    {tourCategories.map((category) => (
                        <section key={category.id} className="mb-24">
                            <motion.div
                                className="text-center mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <h2 className="text-3xl md:text-[30px] font-normal text-[#404041] mb-2">{category.title}</h2>
                                <h4 className="text-[24px] font-normal text-[#5d95d0]">{category.subtitle}</h4>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                                {category.tours.map((tour, idx) => (
                                    <TourCard
                                        key={idx}
                                        tourTitle={tour.tourTitle}
                                        duration={tour.duration}
                                        bokunProductId={tour.bokunProductId}
                                        slides={tour.slides}
                                    />
                                ))}
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
