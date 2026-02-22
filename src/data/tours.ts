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
                from_price: 35.00,
                badges: { isBestSeller: true },
                short_description: "North Kefalonia's finest villages & caves in one full day",
                duration: "8 Hours",
                bokunProductId: "PLACEHOLDER_BUS_FISCARDO",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2025/11/10/bigstock-landscape-with-assos-village-o-475850305.jpg", title: "Assos Village" },
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/03/melissani-14.jpg", title: "Melissani Lake" }
                ]
            },
            {
                tourTitle: "Sunday Island Tour",
                tourType: "ORGANIZED TOUR",
                itinerary: "Myrtos • Fiscardo • Assos • Melissani • Drogarati",
                operatingDays: "Every: Sunday",
                from_price: 35.00,
                badges: {},
                short_description: "The complete northern island experience — every Sunday",
                duration: "8 Hours",
                bokunProductId: "PLACEHOLDER_BUS_SUNDAY",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2023/12/04/myrtos.jpg", title: "Myrtos Beach" },
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/03/melissani-14.jpg", title: "Underground Lake" }
                ]
            },
            {
                tourTitle: "Kefalonian Adventure",
                tourType: "ORGANIZED TOUR",
                itinerary: "Lixouri • Kipouria • Petani • Myrtos • Agia Efimia • St. Gerasimos • Winery",
                operatingDays: "Every: Thursday",
                from_price: 35.00,
                badges: { isSpecialOffer: true },
                short_description: "West coast monasteries, panoramic views & Robola wine tasting",
                duration: "8 Hours",
                bokunProductId: "PLACEHOLDER_BUS_ADVENTURE",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/05/06/depositphotos_359881686_xl.jpg", title: "Petani Panorama" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/14/small-wine-1.jpg", title: "Orealios Gaea Winery" }
                ]
            },
            {
                tourTitle: "Kefalonia Entdecken",
                tourType: "PRIVATE TOUR",
                itinerary: "Myrtos • Fiscardo • Assos • Melissani • Drogarati",
                operatingDays: "On Request",
                from_price: 450.00,
                badges: { isExclusive: true },
                short_description: "Exklusiv auf Deutsch — die Highlights Kefaloniás privat erleben",
                duration: "8 Hours",
                bokunProductId: "PLACEHOLDER_BUS_ENTDECKEN",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2025/11/10/bigstock-landscape-with-assos-village-o-475850305.jpg", title: "Assos Dorf" },
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/03/melissani-14.jpg", title: "Melissani See" }
                ]
            },
            {
                tourTitle: "Discover Ithaca — Cruise & Tour",
                tourType: "ORGANIZED TOUR",
                itinerary: "Vathy • Gidaki Beach • Kioni • Stavros",
                operatingDays: "Every: Wednesday",
                from_price: 55.00,
                badges: { isBestSeller: true },
                short_description: "Ferry to mythical Ithaca — sail to Gidaki, stroll Kioni & Vathy",
                duration: "10 Hours",
                bokunProductId: "PLACEHOLDER_BUS_ITHACA_CRUISE_TOUR",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/04/338034533_954071412292503_750301414178413546_n.jpg", title: "Ithaca — Island of Odysseus" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg", title: "Kioni Village" }
                ]
            },
            {
                tourTitle: "Discover Ithaca — Bus Tour",
                tourType: "ORGANIZED TOUR",
                itinerary: "Vathy • Kioni • Stavros • Polis Bay",
                operatingDays: "Every: Wednesday",
                from_price: 45.00,
                badges: {},
                short_description: "The full Ithaca island loop by bus — Vathy, Kioni & Odysseus' village",
                duration: "10 Hours",
                bokunProductId: "PLACEHOLDER_BUS_ITHACA_BUS",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/04/338034533_954071412292503_750301414178413546_n.jpg", title: "Vathy Harbour" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg", title: "Kioni Bay" }
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
                from_price: 45.00,
                badges: { isBestSeller: true },
                short_description: "Classic Argostoli bay cruise aboard the 43ft Gobbi Queen Bee",
                duration: "Full Day / Sunset",
                bokunProductId: "PLACEHOLDER_CRUISE_QUEENBEE",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/18/kefalonia_discover_private_tour_001.jpg", title: "Queen Bee" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg", title: "Xi Beach" }
                ]
            },
            {
                tourTitle: "Artemis — Argostoli Bay",
                tourType: "CRUISE",
                itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                operatingDays: "Daily",
                from_price: 50.00,
                badges: {},
                short_description: "Sun, sea & Xi's red clay beach — cruise Argostoli Bay on Artemis",
                duration: "Full Day / Sunset",
                bokunProductId: "PLACEHOLDER_CRUISE_ARTEMIS",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/18/kefalonia_discover_private_tour_001.jpg", title: "Artemis Cruises" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg", title: "Xi Beach Clay Spa" }
                ]
            },
            {
                tourTitle: "Lady O — Argostoli Bay",
                tourType: "CRUISE",
                itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                operatingDays: "Daily",
                from_price: 50.00,
                badges: {},
                short_description: "Relax & swim in turquoise waters on the stylish Lady O cruise",
                duration: "Full Day / Sunset",
                bokunProductId: "PLACEHOLDER_CRUISE_LADYO",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/18/kefalonia_discover_private_tour_001.jpg", title: "Lady O Cruises" },
                    { image: "https://avalontravel-kefalonia.gr//images/2023/12/04/myrtos.jpg", title: "Ionian Waters" }
                ]
            },
            {
                tourTitle: "Efplia — Argostoli Bay",
                tourType: "CRUISE",
                itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                operatingDays: "Daily",
                from_price: 45.00,
                badges: {},
                short_description: "Glass-bottom views & BBQ lunch on the Efplia bay cruise",
                duration: "Full Day",
                bokunProductId: "PLACEHOLDER_CRUISE_EFPLIA",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/18/kefalonia_discover_private_tour_001.jpg", title: "Efplia Cruises" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg", title: "Vardiani Island" }
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
                bokunProductId: "PLACEHOLDER_CRUISE_FISCARDO_SKALA",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2025/11/10/bigstock-landscape-with-assos-village-o-475850305.jpg", title: "Fiscardo Village" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg", title: "Koutsoupia Beach" }
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
                bokunProductId: "PLACEHOLDER_CRUISE_ZANTE_SKALA",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/05/06/depositphotos_359881686_xl.jpg", title: "Navagio Shipwreck" },
                    { image: "https://avalontravel-kefalonia.gr//images/2023/12/04/myrtos.jpg", title: "Blue Caves" }
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
                bokunProductId: "PLACEHOLDER_CRUISE_ITHACA_SKALA",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/04/338034533_954071412292503_750301414178413546_n.jpg", title: "Ithaca Island" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg", title: "Gidaki Beach" }
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
                bokunProductId: "PLACEHOLDER_CRUISE_LOBSTER",
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
                bokunProductId: "PLACEHOLDER_SHORE_ASSOS_FISCARDO",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2025/11/10/bigstock-landscape-with-assos-village-o-475850305.jpg", title: "Assos Village" },
                    { image: "https://avalontravel-kefalonia.gr//images/2024/05/06/depositphotos_359881686_xl.jpg", title: "Fiscardo Harbour" }
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
                bokunProductId: "PLACEHOLDER_SHORE_MINI_ADVENTURE",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/03/melissani-14.jpg", title: "Melissani Cave Lake" },
                    { image: "https://avalontravel-kefalonia.gr//images/2023/12/04/myrtos.jpg", title: "Myrtos Panorama" }
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