import { TourCategory } from '../types';

export const tourCategories: TourCategory[] = [
    {
        id: "bus-tours",
        title: "Kefalonia Bus Tours",
        subtitle: "Discover the island's highlights in comfort",
        tours: [
            {
                tourTitle: "Full Island Discovery",
                duration: "Full Day · 8 Hours",
                bokunProductId: "REPLACE_WITH_BOKUN_ID",
                slides: [
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2024/05/06/depositphotos_359881686_xl.jpg",
                        title: "Enchanting Blue",
                        subtitle: "Melissani Lake"
                    },
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2023/12/04/myrtos.jpg",
                        title: "Scenic Views",
                        subtitle: "Myrtos Beach"
                    },
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2023/12/08/drogarati-small-1.jpg",
                        title: "Natural Wonders",
                        subtitle: "Drogarati Cave"
                    }
                ]
            },
            {
                tourTitle: "North Kefalonia Highlights",
                duration: "Half Day · 5 Hours",
                bokunProductId: "REPLACE_WITH_BOKUN_ID",
                slides: [
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2025/11/10/bigstock-landscape-with-assos-village-o-475850305.jpg",
                        title: "Charming Villages",
                        subtitle: "Assos Village"
                    },
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2024/01/03/melissani-14.jpg",
                        title: "Hidden Gems",
                        subtitle: "Underground Lake"
                    },
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2024/01/18/kefalonia_discover_private_tour_001.jpg",
                        title: "Coastal Drives",
                        subtitle: "Ionian Sea"
                    }
                ]
            },
            {
                tourTitle: "Wine Tasting & Traditions",
                duration: "Half Day · 4 Hours",
                bokunProductId: "REPLACE_WITH_BOKUN_ID",
                slides: [
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2025/10/14/small-wine-1.jpg",
                        title: "Local Flavors",
                        subtitle: "Robola Winery"
                    },
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2025/10/15/haristatos-estate-5-1520x800.jpg",
                        title: "Vineyards",
                        subtitle: "Haristatos Estate"
                    },
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2025/10/15/kipoureon-monastery-kefalonia.jpg",
                        title: "Historic Sites",
                        subtitle: "Kipoureon Monastery"
                    }
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
                tourTitle: "Ithaca Discovery",
                duration: "Full Day · 8 Hours",
                bokunProductId: "REPLACE_WITH_BOKUN_ID",
                slides: [
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2024/01/04/338034533_954071412292503_750301414178413546_n.jpg",
                        title: "Mythical Island",
                        subtitle: "Ithaca Coast"
                    },
                    {
                        image: "https://avalontravel-kefalonia.gr//images/2025/10/24/small10.jpg",
                        title: "Secluded Beaches",
                        subtitle: "Swim Stops"
                    }
                ]
            }
        ]
    }
];
