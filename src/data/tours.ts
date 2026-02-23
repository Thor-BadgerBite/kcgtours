import type { TourCategory } from '../types';

export const tourCategories: TourCategory[] = [
    {
        id: "bus-tours",
        title: "Kefalonia Bus Tours",
        subtitle: "Discover the island's highlights in comfort",
        tours: [
            {
                tourTitle: "Fiscardo Island Tour",
                tourType: "ORGANIZED TOUR",
                itinerary: "Myrtos • Fiscardo • Assos • Melissani • Drogarati",
                operatingDays: "Every: Tuesday & Friday",
                from_price: 37.50,
                badges: { isBestSeller: true },
                short_description: "North Kefalonia's finest villages & caves in one full day",
                duration: "8 Hours",
                bokunProductId: "1125444",
                slides: [
                    { image: "/images/1125444/assos.webp", title: "Assos" },
                    { image: "/images/1125444/assos2.webp", title: "Assos" },
                    { image: "/images/1125444/drogarati.webp", title: "Drogarati" },
                    { image: "/images/1125444/fiscardo.webp", title: "Fiscardo" },
                    { image: "/images/1125444/fiscardo2.webp", title: "Fiscardo" },
                    { image: "/images/1125444/fiscardo3.webp", title: "Fiscardo" },
                    { image: "/images/1125444/melissani.webp", title: "Melissani" },
                    { image: "/images/1125444/myrtos.webp", title: "Myrtos" },
                    { image: "/images/1125444/myrtos2.webp", title: "Myrtos" }
                ]
            },
            {
                tourTitle: "Sunday Island Tour",
                tourType: "ORGANIZED TOUR",
                itinerary: "Myrtos • Fiscardo • Assos • Melissani • Drogarati",
                operatingDays: "Every: Sunday",
                from_price: 37.50,
                badges: {},
                short_description: "The complete northern island experience — every Sunday",
                duration: "8 Hours",
                bokunProductId: "1155681",
                slides: [
                    { image: "/images/1155681/assos.webp", title: "Assos" },
                    { image: "/images/1155681/assos2.webp", title: "Assos" },
                    { image: "/images/1155681/drogarati.webp", title: "Drogarati" },
                    { image: "/images/1155681/fiscardo.webp", title: "Fiscardo" },
                    { image: "/images/1155681/fiscardo2.webp", title: "Fiscardo" },
                    { image: "/images/1155681/melissani.webp", title: "Melissani" },
                    { image: "/images/1155681/myrtos.webp", title: "Myrtos" },
                    { image: "/images/1155681/myrtos2.webp", title: "Myrtos" }
                ]
            },
            {
                tourTitle: "Kefalonian Adventure",
                tourType: "ORGANIZED TOUR",
                itinerary: "Lixouri • Kipouria • Petani • Agia Efimia • St. Gerasimos • Winery",
                operatingDays: "Every: Thursday",
                from_price: 37.50,
                badges: { isSpecialOffer: true },
                short_description: "West coast monasteries, panoramic views & Robola wine tasting",
                duration: "8 Hours",
                bokunProductId: "1125442",
                slides: [
                    { image: "/images/1125442/ag.efimia.webp", title: "Ag Efimia" },
                    { image: "/images/1125442/kipouria.webp", title: "Kipouria" },
                    { image: "/images/1125442/lixouri.webp", title: "Lixouri" },
                    { image: "/images/1125442/petani.webp", title: "Petani" },
                    { image: "/images/1125442/st.gerasimos.webp", title: "St Gerasimos" },
                    { image: "/images/1125442/st.gerasimos2.webp", title: "St Gerasimos" },
                    { image: "/images/1125442/winery.webp", title: "Winery" },
                    { image: "/images/1125442/winery2.webp", title: "Winery" }
                ]
            },
            {
                tourTitle: "Kefalonia Entdecken",
                tourType: "PRIVATE TOUR",
                itinerary: "Myrtos • Fiscardo • Assos • Melissani • Drogarati",
                operatingDays: "On Request",
                from_price: 37.50,
                badges: { isExclusive: true },
                short_description: "Exklusiv auf Deutsch — die Highlights Kefaloniás privat erleben",
                duration: "8 Hours",
                bokunProductId: "1144488",
                slides: [
                    { image: "/images/1144448/assos.webp", title: "Assos" },
                    { image: "/images/1144448/assos2.webp", title: "Assos" },
                    { image: "/images/1144448/drogarati.webp", title: "Drogarati" },
                    { image: "/images/1144448/fiscardo.webp", title: "Fiscardo" },
                    { image: "/images/1144448/fiscardo2.webp", title: "Fiscardo" },
                    { image: "/images/1144448/melissani.webp", title: "Melissani" },
                    { image: "/images/1144448/myrtos.webp", title: "Myrtos" },
                    { image: "/images/1144448/myrtos2.webp", title: "Myrtos" }
                ]
            },
            {
                tourTitle: "Discover Ithaca — Cruise & Tour",
                tourType: "ORGANIZED TOUR",
                itinerary: "Vathy • Gidaki Beach • Kioni • Stavros",
                operatingDays: "Every: Wednesday",
                from_price: 58.00,
                badges: { isBestSeller: true },
                short_description: "Ferry to mythical Ithaca — sail to Gidaki, stroll Kioni & Vathy",
                duration: "10 Hours",
                bokunProductId: "1125443",
                slides: [
                    { image: "/images/1125443/kioni.webp", title: "Kioni" },
                    { image: "/images/1125443/odysseus.webp", title: "Odysseus" },
                    { image: "/images/1125443/sami.webp", title: "Sami" },
                    { image: "/images/1125443/stavros.webp", title: "Stavros" },
                    { image: "/images/1125443/vathy.webp", title: "Vathy" },
                    { image: "/images/1125443/vathy2.webp", title: "Vathy" }
                ]
            },
            {
                tourTitle: "Discover Ithaca — Bus Tour",
                tourType: "ORGANIZED TOUR",
                itinerary: "Vathy • Kioni • Stavros • Polis Bay",
                operatingDays: "Every: Wednesday",
                from_price: 38.00,
                badges: {},
                short_description: "The full Ithaca island loop by bus — Vathy, Kioni & Odysseus' village",
                duration: "10 Hours",
                bokunProductId: "1125441",
                slides: [
                    { image: "/images/1125441/kioni.webp", title: "Kioni" },
                    { image: "/images/1125441/odysseus.webp", title: "Odysseus" },
                    { image: "/images/1125441/sami.webp", title: "Sami" },
                    { image: "/images/1125441/stavros.webp", title: "Stavros" },
                    { image: "/images/1125441/vathy.webp", title: "Vathy" },
                    { image: "/images/1125441/vathy2.webp", title: "Vathy" }
                ]
            }
        ]
    },
    {
        id: "cruises",
        title: "Ionian Cruises",
        subtitle: "Set sail on the crystal waters of the Ionian Sea",
        tours: [
            {
                tourTitle: "Queen Bee — Argostoli Bay",
                tourType: "CRUISE",
                itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                operatingDays: "Daily",
                from_price: 65.00,
                badges: { isBestSeller: true },
                short_description: "Classic Argostoli bay cruise aboard the 43ft Gobbi Queen Bee",
                duration: "Full Day / Sunset",
                bokunProductId: "1156361",
                slides: [
                    { image: "/images/1156361/queenbee1.webp", title: "Queen Bee" },
                    { image: "/images/1156361/queenbee2.webp", title: "Queen Bee" },
                    { image: "/images/1156361/queenbee3.webp", title: "Queen Bee" },
                    { image: "/images/1156361/queenbee4.webp", title: "Queen Bee" },
                    { image: "/images/1156361/queenbee5.webp", title: "Queen Bee" },
                    { image: "/images/1156361/queenbee6.webp", title: "Queen Bee" },
                    { image: "/images/1156361/queenbee7.webp", title: "Queen Bee" }
                ]
            },
            {
                tourTitle: "Artemis — Argostoli Bay",
                tourType: "CRUISE",
                itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                operatingDays: "Daily",
                from_price: 65.00,
                badges: {},
                short_description: "Sun, sea & Xi's red clay beach — cruise Argostoli Bay on Artemis",
                duration: "Full Day / Sunset",
                bokunProductId: "1156340",
                slides: [
                    { image: "/images/1156340/artemis1.webp", title: "Artemis" },
                    { image: "/images/1156340/artemis2.webp", title: "Artemis" },
                    { image: "/images/1156340/artemis3.webp", title: "Artemis" },
                    { image: "/images/1156340/artemis4.webp", title: "Artemis" },
                    { image: "/images/1156340/artemis5.webp", title: "Artemis" },
                    { image: "/images/1156340/artemis6.webp", title: "Artemis" }
                ]
            },
            {
                tourTitle: "Lady O — Argostoli Bay",
                tourType: "CRUISE",
                itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                operatingDays: "Daily",
                from_price: 65.00,
                badges: {},
                short_description: "Relax & swim in turquoise waters on the stylish Lady O cruise",
                duration: "Full Day / Sunset",
                bokunProductId: "1153752",
                slides: [
                    { image: "/images/1153752/ladyo1.webp", title: "Lady O" },
                    { image: "/images/1153752/ladyo2.webp", title: "Lady O" },
                    { image: "/images/1153752/ladyo3.webp", title: "Lady O" },
                    { image: "/images/1153752/ladyo4.webp", title: "Lady O" },
                    { image: "/images/1153752/ladyo5.webp", title: "Lady O" },
                    { image: "/images/1153752/ladyo6.webp", title: "Lady O" },
                    { image: "/images/1153752/ladyo7.webp", title: "Lady O" },
                    { image: "/images/1153752/ladyo8.webp", title: "Lady O" },
                    { image: "/images/1153752/ladyo9.webp", title: "Lady O" }
                ]
            },
            {
                tourTitle: "Efplia — Argostoli Bay",
                tourType: "CRUISE",
                itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                operatingDays: "Daily",
                from_price: 70.00,
                badges: {},
                short_description: "Glass-bottom views & BBQ lunch on the Efplia bay cruise",
                duration: "Full Day",
                bokunProductId: "1156321",
                slides: [
                    { image: "/images/1156321/efplia1.webp", title: "Efplia" },
                    { image: "/images/1156321/efplia2.webp", title: "Efplia" },
                    { image: "/images/1156321/efplia3.webp", title: "Efplia" },
                    { image: "/images/1156321/efplia4.webp", title: "Efplia" },
                    { image: "/images/1156321/efplia5.webp", title: "Efplia" },
                    { image: "/images/1156321/efplia6.webp", title: "Efplia" },
                    { image: "/images/1156321/efplia7.webp", title: "Efplia" }
                ]
            },
            {
                tourTitle: "Fiscardo Cruise from Skala",
                tourType: "CRUISE",
                itinerary: "Skala • Sami • Fiscardo • Koutsoupia Beach",
                operatingDays: "Every: Tuesday & Saturday",
                from_price: 55.00,
                badges: { isSpecialOffer: true },
                short_description: "Sail north from Skala past stunning coastlines to cosmopolitan Fiscardo",
                duration: "Full Day",
                bokunProductId: "1156322",
                slides: [
                    { image: "/images/1156322/fiscardocruise1.webp", title: "Fiscardo Cruise" },
                    { image: "/images/1156322/fiscardocruise2.webp", title: "Fiscardo Cruise" },
                    { image: "/images/1156322/fiscardocruise3.webp", title: "Fiscardo Cruise" },
                    { image: "/images/1156322/fiscardocruise4.webp", title: "Fiscardo Cruise" },
                    { image: "/images/1156322/fiscardocruise5.webp", title: "Fiscardo Cruise" },
                    { image: "/images/1156322/fiscardocruise6.webp", title: "Fiscardo Cruise" },
                    { image: "/images/1156322/fiscardocruise7.webp", title: "Fiscardo Cruise" }
                ]
            },
            {
                tourTitle: "Zante Cruise from Skala",
                tourType: "CRUISE",
                itinerary: "Skala • Navagio Shipwreck • Blue Caves • Alykes",
                operatingDays: "Every: Thursday",
                from_price: 55.00,
                badges: { isExclusive: true },
                short_description: "Navagio & Blue Caves — Zakynthos' icons in one epic day at sea",
                duration: "Full Day",
                bokunProductId: "1156323",
                slides: [
                    { image: "/images/1156323/zantecruise1.webp", title: "Zante Cruise" },
                    { image: "/images/1156323/zantecruise2.webp", title: "Zante Cruise" },
                    { image: "/images/1156323/zantecruise3.webp", title: "Zante Cruise" },
                    { image: "/images/1156323/zantecruise4.webp", title: "Zante Cruise" },
                    { image: "/images/1156323/zantecruise5.webp", title: "Zante Cruise" }
                ]
            },
            {
                tourTitle: "Ithaca Cruise from Skala",
                tourType: "CRUISE",
                itinerary: "Skala • Gidaki Beach • Vathy • Kioni • Koutsoupia Beach",
                operatingDays: "Every: Wednesday, Friday & Sunday",
                from_price: 55.00,
                badges: {},
                short_description: "Sail to mythical Ithaca — swim Gidaki, explore Vathy & Kioni",
                duration: "Full Day",
                bokunProductId: "1156324",
                slides: [
                    { image: "/images/1156324/ithacacruise1.webp", title: "Ithaca Cruise" },
                    { image: "/images/1156324/ithacacruise2.jpg", title: "Ithaca Cruise" },
                    { image: "/images/1156324/ithacacruise3.jpg", title: "Ithaca Cruise" },
                    { image: "/images/1156324/ithacacruise4.jpg", title: "Ithaca Cruise" },
                    { image: "/images/1156324/ithacacruise5.jpg", title: "Ithaca Cruise" },
                    { image: "/images/1156324/ithacacruise6.jpg", title: "Ithaca Cruise" }
                ]
            },
            {
                tourTitle: "Lobster Fishing Cruise",
                tourType: "CRUISE",
                itinerary: "Agia Pelagia • Net Points • Beach Anchor • Fresh Seafood Lunch",
                operatingDays: "Daily (Weather Permitting)",
                from_price: 100.00,
                badges: { isExclusive: true },
                short_description: "Live a fisherman's day — pull the nets & feast on the fresh catch",
                duration: "8 Hours",
                bokunProductId: "1156325",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/18/kefalonia_discover_private_tour_001.jpg", title: "Authentic Fishing Experience" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg", title: "Fresh Seafood on Board" }
                ]
            }
        ]
    },
    {
        id: "shore-excursions",
        title: "Shore Excursions",
        subtitle: "Make the most of your time ashore",
        tours: [
            {
                tourTitle: "Assos & Fiscardo",
                tourType: "SHORE EXCURSION",
                itinerary: "Assos Village • Fiscardo • Myrtos Photo Stop",
                operatingDays: "On Request / Cruise Ship Days",
                from_price: 285.00,
                badges: { isBestSeller: true },
                short_description: "Two of Kefalonia's most beautiful villages in one scenic half-day",
                duration: "5–6 Hours",
                bokunProductId: "1156326",
                slides: [
                    { image: "/images/1156326/assos.webp", title: "Assos" },
                    { image: "/images/1156326/assos2.webp", title: "Assos" },
                    { image: "/images/1156326/fiscardo.webp", title: "Fiscardo" },
                    { image: "/images/1156326/fiscardo2.webp", title: "Fiscardo" }
                ]
            },
            {
                tourTitle: "Kefalonia Mini Adventure",
                tourType: "SHORE EXCURSION",
                itinerary: "Robola Winery • Melissani Lake • Agia Efimia • Myrtos View",
                operatingDays: "On Request / Cruise Ship Days",
                from_price: 300.00,
                badges: {},
                short_description: "Kefalonia's must-see wonders packed into one unforgettable half-day",
                duration: "4.5–5 Hours",
                bokunProductId: "1156327",
                slides: [
                    { image: "/images/1156327/ag.efimia.webp", title: "Ag Efimia" },
                    { image: "/images/1156327/st.gerasimos.webp", title: "St Gerasimos" },
                    { image: "/images/1156327/st.gerasimos2.webp", title: "St Gerasimos" },
                    { image: "/images/1156327/winery.webp", title: "Winery" },
                    { image: "/images/1156327/winery2.webp", title: "Winery" }
                ]
            }
        ]
    },
    {
        id: "activities",
        title: "Activities & Transfers",
        subtitle: "Elevate your Kefalonia experience",
        tours: [
            {
                tourTitle: "Private VIP Transfer",
                tourType: "TRANSFER",
                itinerary: "Airport to Resort • Port to Villa",
                operatingDays: "24/7 Service",
                from_price: 40.00,
                badges: { isBestSeller: true },
                short_description: "Airport & Port Premium Shuttles",
                duration: "Flexible",
                bokunProductId: "PLACEHOLDER_ACT_1",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/18/kefalonia_discover_private_tour_001.jpg", title: "Luxury Vehicles" },
                    { image: "https://avalontravel-kefalonia.gr//images/2024/05/06/depositphotos_359881686_xl.jpg", title: "Arrive in Style" }
                ]
            },
            {
                tourTitle: "Culinary Tasting Class",
                tourType: "ACTIVITY",
                itinerary: "Local Farm • Traditional Kitchen • Wine Tasting",
                operatingDays: "Every: Mondays & Thursdays",
                from_price: 90.00,
                badges: { isExclusive: true },
                short_description: "Local gastronomy masterclass",
                duration: "3 Hours",
                bokunProductId: "PLACEHOLDER_ACT_2",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/14/small-wine-1.jpg", title: "Taste of Kefalonia" },
                    { image: "https://avalontravel-kefalonia.gr//images/2023/12/08/drogarati-small-1.jpg", title: "Food Artisans" }
                ]
            },
            {
                tourTitle: "Guided Mount Ainos Hike",
                tourType: "ACTIVITY",
                itinerary: "Ainos National Park • Enos Peak • Pine Forests",
                operatingDays: "Every: Wednesdays, Saturdays",
                from_price: 60.00,
                badges: { isSpecialOffer: true },
                short_description: "National Park summit trails",
                duration: "5 Hours",
                bokunProductId: "PLACEHOLDER_ACT_3",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/04/338034533_954071412292503_750301414178413546_n.jpg", title: "Mountain Peak" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/15/kipoureon-monastery-kefalonia.jpg", title: "Pine Forest Trails" }
                ]
            }
        ]
    }
];