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
                    { image: "/images/1125444/assos.webp", title: "A Moment Worth Staying For" },
                    { image: "/images/1125444/assos2.webp", title: "Where the Mountain Meets the Sea" },
                    { image: "/images/1125444/drogarati.webp", title: "A Million Years in the Making" },
                    { image: "/images/1125444/fiscardo.webp", title: "Colours of the North" },
                    { image: "/images/1125444/fiscardo2.webp", title: "Where the Ionian Yachts Sleep" },
                    { image: "/images/1125444/fiscardo3.webp", title: "A Quiet Evening in the Village" },
                    { image: "/images/1125444/melissani.webp", title: "Ancient, Still & Breathtaking" },
                    { image: "/images/1125444/myrtos.webp", title: "The View That Stops You" },
                    { image: "/images/1125444/myrtos2.webp", title: "Endless Shades of Blue" }
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
                    { image: "/images/1155681/assos.webp", title: "A Village Framed in Green & Blue" },
                    { image: "/images/1155681/assos2.webp", title: "Painted in Turquoise" },
                    { image: "/images/1155681/drogarati.webp", title: "Deep, Dark & Magnificent" },
                    { image: "/images/1155681/fiscardo.webp", title: "Sunday Colours at the Harbour" },
                    { image: "/images/1155681/fiscardo2.webp", title: "Rooftops & Rigging" },
                    { image: "/images/1155681/melissani.webp", title: "Light from Another World" },
                    { image: "/images/1155681/myrtos.webp", title: "The Coastline You'll Never Forget" },
                    { image: "/images/1155681/myrtos2.webp", title: "Blue Beyond Blue" }
                ]
            },
            {
                tourTitle: "Kefalonian Adventure",
                tourType: "ORGANIZED TOUR",
                itinerary: "Lixouri • Kipouria • Agia Efimia • St. Gerasimos • Winery",
                operatingDays: "Every: Thursday",
                from_price: 37.50,
                badges: { isSpecialOffer: true },
                short_description: "West coast monasteries, panoramic views & wine tasting",
                duration: "8 Hours",
                bokunProductId: "1125442",
                slides: [
                    { image: "/images/1125442/ag.efimia.webp", title: "A Peaceful Corner of the Ionian" },
                    { image: "/images/1125442/kipouria.webp", title: "Faith on the Edge" },
                    { image: "/images/1125442/lixouri.webp", title: "The Island's Other Soul" },
                    { image: "/images/1125442/petani.webp", title: "Wild, Hidden & Unforgettable" },
                    { image: "/images/1125442/st.gerasimos.webp", title: "Where the Island Prays" },
                    { image: "/images/1125442/st.gerasimos2.webp", title: "Gold, Light & Devotion" },
                    { image: "/images/1125442/winery.webp", title: "A Thousand Bottles of Kefalonia" },
                    { image: "/images/1125442/winery2.webp", title: "The Taste You'll Remember" }
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
                    { image: "/images/1144448/assos.webp", title: "Ein Dorf wie gemalt" },
                    { image: "/images/1144448/assos2.webp", title: "Türkis trifft Grün" },
                    { image: "/images/1144448/drogarati.webp", title: "Eine Million Jahre alt" },
                    { image: "/images/1144448/fiscardo.webp", title: "Venezianisches Flair im Norden" },
                    { image: "/images/1144448/fiscardo2.webp", title: "Wo die Yachten ankern" },
                    { image: "/images/1144448/melissani.webp", title: "Uralt, still und atemberaubend" },
                    { image: "/images/1144448/myrtos.webp", title: "Der schönste Blick der Insel" },
                    { image: "/images/1144448/myrtos2.webp", title: "Endlose Blautöne" }
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
                    { image: "/images/1125443/kioni.webp", title: "Tucked Away & Perfectly Beautiful" },
                    { image: "/images/1125443/odysseus.webp", title: "Greetings from the Hero" },
                    { image: "/images/1125443/sami.webp", title: "Where Every Journey Begins" },
                    { image: "/images/1125443/stavros.webp", title: "Peaceful, Timeless, Ithaca" },
                    { image: "/images/1125443/vathy.webp", title: "A Harbour Steeped in Myth" },
                    { image: "/images/1125443/vathy2.webp", title: "The Bay That Holds a Thousand Stories" }
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
                    { image: "/images/1125441/kioni.webp", title: "A Village That Feels Like a Secret" },
                    { image: "/images/1125441/odysseus.webp", title: "In the Footsteps of a Legend" },
                    { image: "/images/1125441/sami.webp", title: "The Journey Begins Here" },
                    { image: "/images/1125441/stavros.webp", title: "Village Church, Infinite View" },
                    { image: "/images/1125441/vathy.webp", title: "Where Odysseus Once Returned" },
                    { image: "/images/1125441/vathy2.webp", title: "The Most Beautiful Bay in the Ionian" }
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
                    { image: "/images/1156361/queenbee1.webp", title: "Where Every Good Day Begins" },
                    { image: "/images/1156361/queenbee2.webp", title: "Ready to Cast Off" },
                    { image: "/images/1156361/queenbee3.webp", title: "Out in the Open Ionian" },
                    { image: "/images/1156361/queenbee4.webp", title: "Crystal Clear & Calling" },
                    { image: "/images/1156361/queenbee5.webp", title: "Framed by Ancient Stone" },
                    { image: "/images/1156361/queenbee6.webp", title: "Good Company, Open Skies" },
                    { image: "/images/1156361/queenbee7.webp", title: "The Golden Hour Send-Off" }
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
                    { image: "/images/1156340/artemis1.webp", title: "Wild, White & Wonderfully Remote" },
                    { image: "/images/1156340/artemis2.webp", title: "Anchored in Paradise" },
                    { image: "/images/1156340/artemis3.webp", title: "All to Ourselves" },
                    { image: "/images/1156340/artemis4.webp", title: "Built for This Kind of Day" },
                    { image: "/images/1156340/artemis5.webp", title: "Come On In, the Water's Perfect" },
                    { image: "/images/1156340/artemis6.webp", title: "A Timeless Welcome" }
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
                    { image: "/images/1153752/ladyo1.webp", title: "Anchored in Turquoise" },
                    { image: "/images/1153752/ladyo2.webp", title: "Warm Wood & Open Water" },
                    { image: "/images/1153752/ladyo3.webp", title: "Music, Laughter & Sunshine" },
                    { image: "/images/1153752/ladyo4.webp", title: "A Perfect Summer Afternoon" },
                    { image: "/images/1153752/ladyo5.webp", title: "Elegant on Every Sea" },
                    { image: "/images/1153752/ladyo6.webp", title: "A Floating Home Away From Home" },
                    { image: "/images/1153752/ladyo7.webp", title: "From the Captain's Seat" },
                    { image: "/images/1153752/ladyo8.webp", title: "The Finest BBQ in the Ionian" },
                    { image: "/images/1153752/ladyo9.webp", title: "Live Music, Golden Light & Good Food" }
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
                    { image: "/images/1156321/efplia1.webp", title: "Morning at the Marina" },
                    { image: "/images/1156321/efplia2.webp", title: "Just the Two of You & the Sea" },
                    { image: "/images/1156321/efplia3.webp", title: "Setting the Table for a Perfect Day" },
                    { image: "/images/1156321/efplia4.webp", title: "Shimmering Ahead" },
                    { image: "/images/1156321/efplia5.webp", title: "Little Treats, Big Flavours" },
                    { image: "/images/1156321/efplia6.webp", title: "Sun Deck Bliss" },
                    { image: "/images/1156321/efplia7.webp", title: "Proud, Blue & Beautiful" }
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
                bokunProductId: "1164973",
                slides: [
                    { image: "/images/1164973/fiscardocruise1.webp", title: "The Village in Full Swing" },
                    { image: "/images/1164973/fiscardocruise2.webp", title: "A Hidden Beach All to Yourself" },
                    { image: "/images/1164973/fiscardocruise3.webp", title: "Pulling into Port" },
                    { image: "/images/1164973/fiscardocruise4.webp", title: "Where the Sky Opens Up" },
                    { image: "/images/1164973/fiscardocruise5.webp", title: "Somewhere Lovely to Swim" },
                    { image: "/images/1164973/fiscardocruise6.webp", title: "A Marina Full of Dreams" },
                    { image: "/images/1164973/fiscardocruise7.webp", title: "Tucked Away & Gloriously Quiet" }
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
                bokunProductId: "1164937",
                slides: [
                    { image: "/images/1164937/zantecruise1.webp", title: "The Most Famous Shipwreck in the World" },
                    { image: "/images/1164937/zantecruise2.webp", title: "Navagio from Above" },
                    { image: "/images/1164937/zantecruise3.webp", title: "Nature's Arches" },
                    { image: "/images/1164937/zantecruise4.webp", title: "A Warm Little Harbour Stop" },
                    { image: "/images/1164937/zantecruise5.webp", title: "The Whole Boat Jumped In" }
                ]
            },
            {
                tourTitle: "Ithaca Cruise from Skala",
                tourType: "CRUISE",
                itinerary: "Skala • Gidaki Beach • Vathy • Kioni • Koutsoupia Beach",
                operatingDays: "Every: Wednesday & Sunday",
                from_price: 55.00,
                badges: {},
                short_description: "Sail to mythical Ithaca — swim Gidaki, explore Vathy & Kioni",
                duration: "Full Day",
                bokunProductId: "1165014",
                slides: [
                    { image: "/images/1165014/ithacacruise1.webp", title: "Colourful, Charming & Completely Ithaca" },
                    { image: "/images/1165014/ithacacruise2.webp", title: "A Quiet Little Bay All to Ourselves" },
                    { image: "/images/1165014/ithacacruise3.webp", title: "The Hero Still Stands Watch" },
                    { image: "/images/1165014/ithacacruise4.webp", title: "The Perfect Swim Stop" },
                    { image: "/images/1165014/ithacacruise5.webp", title: "A Village That Welcomes You Gently" },
                    { image: "/images/1165014/ithacacruise6.webp", title: "Swimming in the Harbour's Heart" }
                ]
            },
            {
                tourTitle: "Ithaca Cruise from Skala No Kioni",
                tourType: "CRUISE",
                itinerary: "Skala • Gidaki Beach • Vathy • Koutsoupia Beach",
                operatingDays: "Every: Monday & Friday",
                from_price: 45.00,
                badges: {},
                short_description: "Sail to mythical Ithaca — 2 swim stops, explore Vathy",
                duration: "Full Day",
                bokunProductId: "1165024",
                slides: [
                    { image: "/images/1165024/ithacacruise1.webp", title: "Colourful, Charming & Completely Ithaca" },
                    { image: "/images/1165024/ithacacruise2.webp", title: "A Quiet Little Bay All to Ourselves" },
                    { image: "/images/1165024/ithacacruise3.webp", title: "The Hero Still Stands Watch" },
                    { image: "/images/1165024/ithacacruise4.webp", title: "The Perfect Swim Stop" },
                    { image: "/images/1165024/ithacacruise5.webp", title: "A Village That Welcomes You Gently" },
                    { image: "/images/1165024/ithacacruise6.webp", title: "Swimming in the Harbour's Heart" }
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
                    { image: "/images/1156326/assos.webp", title: "An Afternoon Worth Lingering For" },
                    { image: "/images/1156326/assos2.webp", title: "Green Hills, Turquoise Bay" },
                    { image: "/images/1156326/fiscardo.webp", title: "Life at the Waterfront" },
                    { image: "/images/1156326/fiscardo2.webp", title: "Terracotta Rooftops & Sailboats" }
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
                    { image: "/images/1156327/ag.efimia.webp", title: "Calm Waters, Warm Welcome" },
                    { image: "/images/1156327/st.gerasimos.webp", title: "Sacred & Serene" },
                    { image: "/images/1156327/st.gerasimos2.webp", title: "Gilded with History" },
                    { image: "/images/1156327/winery.webp", title: "Rows of Kefalonian Gold" },
                    { image: "/images/1156327/winery2.webp", title: "A Sip of Something Special" }
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