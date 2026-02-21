import type { TourCategory } from '../types';

export const tourCategories: TourCategory[] = [
    {
        id: "bus-tours",
        title: "Kefalonia Bus Tours",
        subtitle: "Discover the island's highlights in comfort",
        tours: [
            {
                tourTitle: "Private Tour of Kefalonia's Treasures",
                short_description: "Caves, Villages, Wine & Cultural Highlights",
                duration: "6 Hours",
                bokunProductId: "PLACEHOLDER_BUS_1",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/05/06/depositphotos_359881686_xl.jpg", title: "Majestic Vistas" },
                    { image: "https://avalontravel-kefalonia.gr//images/2023/12/04/myrtos.jpg", title: "Myrtos Beach View" }
                ]
            },
            {
                tourTitle: "The Jewels of Kefalonia",
                short_description: "Assos, Fiscardo & Melissani Lake",
                duration: "8 Hours",
                bokunProductId: "PLACEHOLDER_BUS_2",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2025/11/10/bigstock-landscape-with-assos-village-o-475850305.jpg", title: "Colorful Buildings" },
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/03/melissani-14.jpg", title: "Underground Lake" }
                ]
            },
            {
                tourTitle: "Private Vineyard Experience",
                short_description: "Wine, Culture & Tradition",
                duration: "4 Hrs & 30 min",
                bokunProductId: "PLACEHOLDER_BUS_3",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/14/small-wine-1.jpg", title: "Elegant & Tranquil" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/15/haristatos-estate-5-1520x800.jpg", title: "Local Wineries" }
                ]
            }
        ]
    },
    {
        id: "cruises",
        title: "Island Cruises",
        subtitle: "Sail the Ionian Sea in style",
        tours: [
            {
                tourTitle: "Ithaca Coastal Discovery",
                short_description: "Swim Stops & Hidden Coves",
                duration: "Full Day",
                bokunProductId: "PLACEHOLDER_CRUISE_1",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/04/338034533_954071412292503_750301414178413546_n.jpg", title: "Mythical Island" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg", title: "Blue Waters" }
                ]
            },
            {
                tourTitle: "Zakynthos Shipwreck Sail",
                short_description: "Navagio Beach & Blue Caves",
                duration: "8 Hours",
                bokunProductId: "PLACEHOLDER_CRUISE_2",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/05/06/depositphotos_359881686_xl.jpg", title: "Shipwreck View" },
                    { image: "https://avalontravel-kefalonia.gr//images/2023/12/08/drogarati-small-1.jpg", title: "Crystal Sea" }
                ]
            },
            {
                tourTitle: "Sunset Dinner Cruise",
                short_description: "Argostoli Gulf Evening Sail",
                duration: "4 Hours",
                bokunProductId: "PLACEHOLDER_CRUISE_3",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2023/12/04/myrtos.jpg", title: "Golden Hour" },
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/18/kefalonia_discover_private_tour_001.jpg", title: "Romantic Evening" }
                ]
            }
        ]
    },
    {
        id: "shore-excursions",
        title: "Shore Excursions",
        subtitle: "Maximize your cruise stopover",
        tours: [
            {
                tourTitle: "Argostoli Highlights Half-Day",
                short_description: "Robola Winery & St. Gerasimos",
                duration: "4 Hours",
                bokunProductId: "PLACEHOLDER_SHORE_1",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/15/kipoureon-monastery-kefalonia.jpg", title: "Monastery Stop" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/11/10/bigstock-landscape-with-assos-village-o-475850305.jpg", title: "Island Culture" }
                ]
            },
            {
                tourTitle: "Express Myrtos & Melissani",
                short_description: "Must-sees for short layovers",
                duration: "5 Hours",
                bokunProductId: "PLACEHOLDER_SHORE_2",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2024/01/03/melissani-14.jpg", title: "Cave Excursion" },
                    { image: "https://avalontravel-kefalonia.gr//images/2023/12/04/myrtos.jpg", title: "Best Beach" }
                ]
            },
            {
                tourTitle: "Fiscardo VIP Access",
                short_description: "Private transfer & Village walk",
                duration: "6 Hours",
                bokunProductId: "PLACEHOLDER_SHORE_3",
                slides: [
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/15/haristatos-estate-5-1520x800.jpg", title: "Luxury Stop" },
                    { image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg", title: "Northern Port" }
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
