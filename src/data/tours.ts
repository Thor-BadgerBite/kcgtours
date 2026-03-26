import type { TourCategory } from '../types';

export const tourCategories: TourCategory[] = [
    // ─────────────────────────────────────────────
    //  BUS TOURS  (our own organised tours)
    // ─────────────────────────────────────────────
    {
        id: "bus-tours",
        title: "Bus Tours",
        subtitle: "Discover the island's highlights in comfort",
        tours: [
            {
                tourTitle: "Fiscardo Island Tour",
                tourType: "ORGANIZED TOUR",
                itinerary: "Myrtos • Fiscardo • Assos • Melissani • Drogarati",
                operatingDays: "Every: Tuesday & Friday",
                from_price: 37.50,
                badges: { isBestSeller: true },
                card_subtitle: "North Kefalonia's finest villages & caves in one full day",
                short_description: "North Kefalonia's finest villages & caves in one full day",
                duration: "8 Hours",
                bokunProductId: "1125444",
                baseViews: 1743,
                isBookableOnBokun: true,
                isPrivateAvailable: true,
                private_description: "Enjoy the entire Fiscardo Island Tour exclusively with your group — no crowds, your own pace. From the jaw-dropping cliff road down to Myrtos, through the medieval lanes of Assos and on to cosmopolitan Fiscardo, with Melissani Lake & Drogarati Cave included. We'll tailor the stops and timing entirely around you.",
                slides: [
                    { image: "/images/1125444/fiscardo.webp", title: "A Moment Worth Staying For" },
                    { image: "/images/1125444/assos2.webp", title: "Where the Mountain Meets the Sea" },
                    { image: "/images/1125444/drogarati.webp", title: "A Million Years in the Making" },
                    { image: "/images/1125444/assos.webp", title: "Colours of the North" },
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
                card_subtitle: "The complete northern island experience — every Sunday",
                short_description: "The complete northern island experience — every Sunday",
                duration: "8 Hours",
                bokunProductId: "1155681",
                baseViews: 1612,
                isBookableOnBokun: true,
                isPrivateAvailable: true,
                private_description: "Take the Sunday Island Tour as a private experience, just for your family or group. The best of northern Kefalonia — Myrtos, Assos, Fiscardo, Melissani & Drogarati — with complete flexibility on pace, photo stops and lunch breaks. Perfect for families, couples or small groups seeking a more personal adventure.",
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
                operatingDays: "Every: Saturday",
                from_price: 37.50,
                badges: { isSpecialOffer: true },
                card_subtitle: "West coast monasteries, panoramic views & wine tasting",
                short_description: "West coast monasteries, panoramic views & wine tasting",
                duration: "8 Hours",
                bokunProductId: "1125442",
                baseViews: 1558,
                isBookableOnBokun: true,
                isPrivateAvailable: true,
                private_description: "Experience the Kefalonian Adventure privately — the west coast, the monastery of Kipouria perched above the sea, panoramic views, an authentic winery visit and wine tasting, with no time pressure. Ideal for groups who want to linger longer at the places that matter most.",
                slides: [
                    { image: "/images/1125442/winery.webp", title: "A Peaceful Corner of the Ionian" },
                    { image: "/images/1125442/kipouria.webp", title: "Faith on the Edge" },
                    { image: "/images/1125442/lixouri.webp", title: "The Island's Other Soul" },
                    { image: "/images/1125442/ag.efimia.webp", title: "Wild, Hidden & Unforgettable" },
                    { image: "/images/1125442/st.gerasimos.webp", title: "Where the Island Prays" },
                    { image: "/images/1125442/st.gerasimos2.webp", title: "Gold, Light & Devotion" },
                    { image: "/images/1125442/petani.webp", title: "A Thousand Bottles of Kefalonia" },
                    { image: "/images/1125442/winery2.webp", title: "The Taste You'll Remember" }
                ]
            },
            {
                tourTitle: "Kefalonia Entdecken",
                tourType: "EXCLUSIVE GERMAN TOUR",
                itinerary: "Myrtos • Fiscardo • Assos • Melissani • Drogarati",
                operatingDays: "On Request",
                from_price: 55.00,
                badges: { isExclusive: true },
                card_subtitle: "Exklusiv auf Deutsch — die Highlights Kefaloniás privat erleben",
                short_description: "Exklusiv auf Deutsch — die Highlights Kefaloniás privat erleben",
                duration: "8 Hours",
                bokunProductId: "1144488",
                baseViews: 1521,
                isBookableOnBokun: true,
                isPrivateAvailable: true,
                private_description: "Erleben Sie Kefalonia auf Deutsch, ganz privat für Ihre Gruppe. Vom Myrtos-Strand über das venezianische Dörfchen Assos bis hin zum Yachthafen Fiscardo, der Melissani-Höhle und der Tropfsteinhöhle Drogarati — alles in Ihrem Tempo, mit persönlicher Begleitung und ohne Sprachbarrieren.",
                slides: [
                    { image: "/images/1144448/fiscardo3.webp", title: "Ein Dorf wie gemalt" },
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
                card_subtitle: "Ferry to mythical Ithaca — sail to Gidaki, stroll Kioni & Vathy",
                short_description: "Ferry to mythical Ithaca — sail to Gidaki, stroll Kioni & Vathy",
                duration: "10 Hours",
                bokunProductId: "1125443",
                baseViews: 1689,
                isBookableOnBokun: true,
                isPrivateAvailable: true,
                private_description: "Discover mythical Ithaca privately — take the ferry across the Ionian and explore at your own leisure. Swim at wild Gidaki Beach, wander the charming harbour of Kioni and the Venetian capital Vathy, stopping wherever your curiosity leads. A deeply personal journey into the island of Odysseus.",
                slides: [
                    { image: "/images/1125443/vathy2.webp", title: "Tucked Away & Perfectly Beautiful" },
                    { image: "/images/1125443/odysseus.webp", title: "Greetings from the Hero" },
                    { image: "/images/1125443/sami.webp", title: "Where Every Journey Begins" },
                    { image: "/images/1125443/stavros.webp", title: "Peaceful, Timeless, Ithaca" },
                    { image: "/images/1125443/vathy.webp", title: "A Harbour Steeped in Myth" },
                    { image: "/images/1125443/kioni.webp", title: "The Bay That Holds a Thousand Stories" }
                ]
            },
            {
                tourTitle: "Discover Ithaca — Bus Tour",
                tourType: "ORGANIZED TOUR",
                itinerary: "Vathy • Kioni • Stavros • Polis Bay",
                operatingDays: "Every: Wednesday",
                from_price: 40.00,
                badges: {},
                card_subtitle: "The full Ithaca island loop by bus — Vathy, Kioni & Odysseus' village",
                short_description: "The full Ithaca island loop by bus — Vathy, Kioni & Odysseus' village",
                duration: "10 Hours",
                bokunProductId: "1125441",
                baseViews: 1537,
                isBookableOnBokun: true,
                isPrivateAvailable: true,
                private_description: "See all of Ithaca by private coach — Vathy, Kioni, the village of Stavros where Odysseus is said to have grown up, and Polis Bay. A relaxed, fully private island loop with your own guide, your own itinerary and no strangers sharing your day.",
                slides: [
                    { image: "/images/1125441/vathy.webp", title: "A Village That Feels Like a Secret" },
                    { image: "/images/1125441/odysseus.webp", title: "In the Footsteps of a Legend" },
                    { image: "/images/1125441/sami.webp", title: "The Journey Begins Here" },
                    { image: "/images/1125441/stavros.webp", title: "Village Church, Infinite View" },
                    { image: "/images/1125441/kioni.webp", title: "Where Odysseus Once Returned" },
                    { image: "/images/1125441/vathy2.webp", title: "The Most Beautiful Bay in the Ionian" }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────────
    //  CRUISES  (with sub-categories incl. Sailing)
    // ─────────────────────────────────────────────
    {
        id: "cruises",
        title: "Cruises",
        subtitle: "Set sail on the crystal waters of the Ionian Sea",
        subCategories: [
            {
                id: "argostoli-bay-cruises",
                title: "Argostoli Bay Cruises",
                subtitle: "Daily departures from Argostoli Marina — swim, sunbathe & discover hidden bays",
                tours: [
                    {
                        tourTitle: "Queen Bee I & II",
                        tourType: "CRUISE",
                        itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                        operatingDays: "Daily",
                        from_price: 65.00,
                        badges: { isBestSeller: true },
                        card_subtitle: "Classic Argostoli bay cruise aboard the 43ft Gobbi Queen Bee",
                        short_description: "Classic Argostoli bay cruise aboard the 43ft Gobbi Queen Bee",
                        duration: "Full Day / Sunset",
                        bokunProductId: "1156361",
                        isBookableOnBokun: true,
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
                        tourTitle: "Artemis Cruise",
                        tourType: "CRUISE",
                        itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                        operatingDays: "Daily",
                        from_price: 65.00,
                        badges: {},
                        card_subtitle: "Sun, sea & Xi's red clay beach — cruise Argostoli Bay on Artemis",
                        short_description: "Sun, sea & Xi's red clay beach — cruise Argostoli Bay on Artemis",
                        duration: "Full Day / Sunset",
                        bokunProductId: "1156340",
                        isBookableOnBokun: true,
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
                        tourTitle: "Lady O BBQ Cruise",
                        tourType: "CRUISE",
                        itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                        operatingDays: "Daily",
                        from_price: 65.00,
                        badges: {},
                        card_subtitle: "Relax & swim in turquoise waters on the stylish Lady O cruise",
                        short_description: "Relax & swim in turquoise waters on the stylish Lady O cruise",
                        duration: "Full Day / Sunset",
                        bokunProductId: "1153752",
                        isBookableOnBokun: true,
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
                        tourTitle: "Efplia Cruise",
                        tourType: "CRUISE",
                        itinerary: "Argostoli • White Rocks • Vardiani Island • Xi Beach",
                        operatingDays: "Daily",
                        from_price: 70.00,
                        badges: {},
                        card_subtitle: "Glass-bottom views & BBQ lunch on the Efplia bay cruise",
                        short_description: "Glass-bottom views & BBQ lunch on the Efplia bay cruise",
                        duration: "Full Day",
                        bokunProductId: "1156321",
                        isBookableOnBokun: true,
                        slides: [
                            { image: "/images/1156321/efplia1.webp", title: "Morning at the Marina" },
                            { image: "/images/1156321/efplia2.webp", title: "Just the Two of You & the Sea" },
                            { image: "/images/1156321/efplia3.webp", title: "Setting the Table for a Perfect Day" },
                            { image: "/images/1156321/efplia4.webp", title: "Shimmering Ahead" },
                            { image: "/images/1156321/efplia5.webp", title: "Little Treats, Big Flavours" },
                            { image: "/images/1156321/efplia6.webp", title: "Sun Deck Bliss" },
                            { image: "/images/1156321/efplia7.webp", title: "Proud, Blue & Beautiful" }
                        ]
                    }
                ]
            },
            {
                id: "skala-cruises",
                title: "Cruises from Skala",
                subtitle: "Full-day sea adventures departing from Skala — Zakynthos, Ithaca & beyond",
                tours: [
                    {
                        tourTitle: "Fiscardo Cruise from Skala",
                        tourType: "CRUISE",
                        itinerary: "Skala • Sami • Fiscardo • Koutsoupia Beach",
                        operatingDays: "Every: Tuesday & Saturday",
                        from_price: 55.00,
                        badges: { isSpecialOffer: true },
                        card_subtitle: "Sail north from Skala past stunning coastlines to cosmopolitan Fiscardo",
                        short_description: "Sail north from Skala past stunning coastlines to cosmopolitan Fiscardo",
                        duration: "Full Day",
                        bokunProductId: "1164973",
                        isBookableOnBokun: true,
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
                        card_subtitle: "Navagio & Blue Caves — Zakynthos' icons in one epic day at sea",
                        short_description: "Navagio & Blue Caves — Zakynthos' icons in one epic day at sea",
                        duration: "Full Day",
                        bokunProductId: "1164937",
                        isBookableOnBokun: true,
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
                        card_subtitle: "Sail to mythical Ithaca — swim Gidaki, explore Vathy & Kioni",
                        short_description: "Sail to mythical Ithaca — swim Gidaki, explore Vathy & Kioni",
                        duration: "Full Day",
                        bokunProductId: "1165014",
                        isBookableOnBokun: true,
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
                        card_subtitle: "Sail to mythical Ithaca — 2 swim stops, explore Vathy",
                        short_description: "Sail to mythical Ithaca — 2 swim stops, explore Vathy",
                        duration: "Full Day",
                        bokunProductId: "1165024",
                        isBookableOnBokun: true,
                        slides: [
                            { image: "/images/1165024/ithacacruise1.webp", title: "Colourful, Charming & Completely Ithaca" },
                            { image: "/images/1165024/ithacacruise2.webp", title: "A Quiet Little Bay All to Ourselves" },
                            { image: "/images/1165024/ithacacruise3.webp", title: "The Hero Still Stands Watch" },
                            { image: "/images/1165024/ithacacruise4.webp", title: "The Perfect Swim Stop" },
                            { image: "/images/1165024/ithacacruise5.webp", title: "A Village That Welcomes You Gently" },
                            { image: "/images/1165024/ithacacruise6.webp", title: "Swimming in the Harbour's Heart" }
                        ]
                    }
                ]
            },
            {
                id: "sami-cruises",
                title: "Cruises from Sami",
                subtitle: "Your own private speedboat — explore Ithaca, Atokos & Kefalonia's coastline from Sami port",
                tours: [
                    {
                        tourTitle: "South Ithaca Private Cruise",
                        tourType: "PRIVATE CRUISE",
                        itinerary: "Sami • Pera Pigadi • Vathy • Gidaki",
                        operatingDays: "On Request",
                        from_price: 480.00,
                        badges: {},
                        card_subtitle: "3 Ithaca beaches & Vathy town — your private boat, your pace",
                        short_description: "4-hour private speedboat cruise to South Ithaca. Swim at Pera Pigadi & Gidaki, explore charming Vathy — entire boat for up to 9 guests.",
                        duration: "4 Hours",
                        bokunProductId: "1132501",
                        isBookableOnBokun: true,
                        slides: [
                            { image: "/images/1132501/luminita1.webp", title: "Your Private Gateway to Ithaca" },
                            { image: "/images/1132501/luminita2.webp", title: "Crystal Waters, No Crowds" },
                            { image: "/images/1132501/luminita3.webp", title: "Speed, Freedom & Open Sea" },
                            { image: "/images/1132501/luminita4.webp", title: "Where the Ionian Hides Its Secrets" },
                            { image: "/images/1132501/luminita5.webp", title: "A Bay Worth Finding" }
                        ]
                    },
                    {
                        tourTitle: "Full Round of Ithaca Cruise",
                        tourType: "PRIVATE CRUISE",
                        itinerary: "Sami • Agia Sofia • Fiscardo • Kioni • Vathy • Gidaki",
                        operatingDays: "On Request",
                        from_price: 720.00,
                        badges: { isBestSeller: true },
                        card_subtitle: "Complete Ithaca circumnavigation — 4 beaches, 3 villages, 8 hours",
                        short_description: "Full-day private speedboat circumnavigation of Ithaca. Swim at 4 beaches, visit Kioni, Vathy & Fiscardo — entire boat for up to 9 guests.",
                        duration: "8 Hours",
                        bokunProductId: "1132521",
                        isBookableOnBokun: true,
                        slides: [
                            { image: "/images/1132521/luminita1.webp", title: "A Full Day on the Ionian" },
                            { image: "/images/1132521/luminita2.webp", title: "Ithaca Reveals Herself Slowly" },
                            { image: "/images/1132521/luminita3.webp", title: "Into the Blue" },
                            { image: "/images/1132521/luminita4.webp", title: "Every Stop Better Than the Last" },
                            { image: "/images/1132521/luminita5.webp", title: "The Island, All the Way Round" }
                        ]
                    },
                    {
                        tourTitle: "Full Round of Kefalonia Cruise",
                        tourType: "PRIVATE CRUISE",
                        itinerary: "Sami • Fiscardo • Assos • Myrtos • Platia Ammos • Skala",
                        operatingDays: "On Request",
                        from_price: 1200.00,
                        badges: { isExclusive: true },
                        card_subtitle: "The ultimate day at sea — circumnavigate Kefalonia in 9 hours",
                        short_description: "9-hour private circumnavigation of Kefalonia. 4 swim stops, Fiscardo & Assos, Myrtos cliffs & beach lunch — entire boat for up to 9 guests.",
                        duration: "9 Hours",
                        bokunProductId: "1168716",
                        isBookableOnBokun: true,
                        slides: [
                            { image: "/images/1168716/luminita1.webp", title: "Kefalonia from the Sea" },
                            { image: "/images/1168716/luminita2.webp", title: "Myrtos — Only Reachable by Water" },
                            { image: "/images/1168716/luminita3.webp", title: "The Long Way Round" },
                            { image: "/images/1168716/luminita4.webp", title: "Every Cove a New Discovery" },
                            { image: "/images/1168716/luminita5.webp", title: "Nine Hours Well Spent" }
                        ]
                    },
                    {
                        tourTitle: "Atokos & South Ithaca Cruise",
                        tourType: "PRIVATE CRUISE",
                        itinerary: "Sami • Gidaki • Atokos Island • Vathy • Antisamos",
                        operatingDays: "On Request",
                        from_price: 900.00,
                        badges: { isSpecialOffer: true },
                        card_subtitle: "Uninhabited Atokos island & South Ithaca — off the beaten path",
                        short_description: "7-hour private cruise to wild Atokos island & South Ithaca. 3 swim stops, lunch in Vathy — entire boat for up to 9 guests.",
                        duration: "7 Hours",
                        bokunProductId: "1168745",
                        isBookableOnBokun: true,
                        slides: [
                            { image: "/images/1168745/luminita1.webp", title: "Bound for the Uninhabited" },
                            { image: "/images/1168745/luminita2.webp", title: "Atokos — Few Ever Come Here" },
                            { image: "/images/1168745/luminita3.webp", title: "Raw, Wild & Completely Yours" },
                            { image: "/images/1168745/luminita4.webp", title: "The Ionian at Its Most Untouched" },
                            { image: "/images/1168745/luminita5.webp", title: "A Day Beyond the Ordinary" }
                        ]
                    },
                    {
                        tourTitle: "Koutsoupia & Xilomata Cruise",
                        tourType: "PRIVATE CRUISE",
                        itinerary: "Sami • Koutsoupia • Poros • Xilomata",
                        operatingDays: "On Request",
                        from_price: 480.00,
                        badges: {},
                        card_subtitle: "East coast half-day — 2 secluded beaches & coffee in Poros",
                        short_description: "4-hour private speedboat cruise along Kefalonia's quiet east coast. 2 swim stops, coffee in Poros — entire boat for up to 9 guests.",
                        duration: "4 Hours",
                        bokunProductId: "1168781",
                        isBookableOnBokun: true,
                        slides: [
                            { image: "/images/1168781/luminita1.webp", title: "The Quiet Side of Kefalonia" },
                            { image: "/images/1168781/luminita2.webp", title: "Calm Waters & No Crowds" },
                            { image: "/images/1168781/luminita3.webp", title: "A Perfect Half-Day at Sea" },
                            { image: "/images/1168781/luminita4.webp", title: "Tucked Away on the East Coast" },
                            { image: "/images/1168781/luminita5.webp", title: "Worth Every Minute" }
                        ]
                    }
                ]
            },
            {
                id: "sailing-cruises",
                title: "Sailing Cruises",
                subtitle: "Authentic sailing on the Ionian — half-day, full-day & romantic sunset options",
                tours: [
                    {
                        tourTitle: "Full-Day Sailing Cruise",
                        tourType: "SAILING CRUISE",
                        itinerary: "Argostoli • South Kefalonia • Remote Beaches",
                        operatingDays: "On Request",
                        from_price: 140.00,
                        badges: {},
                        card_subtitle: "8 hours under sail — lunch on board & two swim stops",
                        short_description: "8-hour sailing adventure with onboard Kefalonian lunch & two swim stops",
                        duration: "8 Hours",
                        bokunProductId: "1132373",
                        isBookableOnBokun: true,
                        slides: [
                            { image: "/images/1132373/anemolia1.webp", title: "" }
                        ]
                    },
                    {
                        tourTitle: "Half-Day Sailing Cruise",
                        tourType: "SAILING CRUISE",
                        itinerary: "Argostoli • Argostoli Gulf • Hidden Coves",
                        operatingDays: "On Request",
                        from_price: 100.00,
                        badges: {},
                        card_subtitle: "Morning sail in Argostoli Gulf — two swim stops & refreshments",
                        short_description: "4-hour morning sail in Argostoli Gulf with two swim stops & refreshments",
                        duration: "4 Hours",
                        bokunProductId: "1132402",
                        isBookableOnBokun: true,
                        slides: [
                            { image: "/images/1132402/anemolia1.webp", title: "" }
                        ]
                    },
                    {
                        tourTitle: "Sunset Sailing Cruise",
                        tourType: "SAILING CRUISE",
                        itinerary: "Argostoli • Argostoli Gulf • Sunset Views",
                        operatingDays: "On Request",
                        from_price: 100.00,
                        badges: {},
                        card_subtitle: "Sparkling wine, cheese & the golden Ionian sunset — just for you",
                        short_description: "Romantic 3-hour evening sail with sparkling wine & cheese platter",
                        duration: "3 Hours",
                        bokunProductId: "1132441",
                        isBookableOnBokun: true,
                        slides: [
                            { image: "/images/1132441/anemolia1.webp", title: "" }
                        ]
                    }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────────
    //  SHOREX  (Shore Excursions)
    // ─────────────────────────────────────────────
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
                from_price: 250.00,
                badges: { isBestSeller: true },
                card_subtitle: "Two of Kefalonia's most beautiful villages in one scenic half-day",
                short_description: "A 5-hour scenic excursion exploring the picturesque northern villages of Assos and Fiscardo. Wander colorful Venetian alleys, witness the cosmopolitan waterfront, taste local cuisine, and pause for unforgettable photos above Myrtos beach.",
                duration: "5–6 Hours",
                bokunProductId: "1156326",
                isBookableOnBokun: false,
                isPrivateAvailable: true,
                private_description: "Experience Assos and Fiscardo exclusively with your own cruise group. With a private vehicle, you dictate the pace — spend more time photographing Myrtos or lingering over lunch in Fiscardo, with peace of mind knowing you'll return to your ship perfectly on time.",
                slides: [
                    { image: "/images/1156326/assos2.webp", title: "An Afternoon Worth Lingering For" },
                    { image: "/images/1156326/assos.webp", title: "Green Hills, Turquoise Bay" },
                    { image: "/images/1156326/fiscardo.webp", title: "Life at the Waterfront" },
                    { image: "/images/1156326/fiscardo2.webp", title: "Terracotta Rooftops & Sailboats" }
                ]
            },
            {
                tourTitle: "Kefalonia Mini Adventure",
                tourType: "SHORE EXCURSION",
                itinerary: "Robola Winery • Melissani Lake • Agia Efimia • Myrtos View",
                operatingDays: "On Request / Cruise Ship Days",
                from_price: 250.00,
                badges: {},
                card_subtitle: "Kefalonia's must-see wonders packed into one unforgettable half-day",
                short_description: "A tailored 4.5h experience featuring the majestic Melissani cave lake, Agia Efimia fishing village, and a local winery for tasting. Concludes with a must-do photo stop above the stunning Myrtos Beach. Includes private transfers directly from your cruise ship.",
                duration: "4.5–5 Hours",
                bokunProductId: "1156327",
                isBookableOnBokun: false,
                isPrivateAvailable: true,
                private_description: "Your fully private Kefalonia Mini Adventure includes exclusive pickup straight from the pier. You'll visit the Robola winery, sail inside Melissani Cave, and see Agia Efimia and Myrtos on a timeline built exclusively around your ship’s departure.",
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

    // ─────────────────────────────────────────────
    //  FISHING TOURS
    // ─────────────────────────────────────────────
    {
        id: "fishing-tours",
        title: "Fishing Tours",
        subtitle: "Live a real fisherman's day on the Ionian",
        tours: [
            {
                tourTitle: "Lobster Fishing Day Trip",
                tourType: "FISHING TOUR",
                itinerary: "Agia Pelagia • Net Hauling • Secluded Beach • Seafood Lunch",
                operatingDays: "Daily (Weather Permitting)",
                from_price: 110.00,
                badges: { isExclusive: true },
                isBookableOnBokun: true,
                card_subtitle: "Pull the nets & feast on lobster spaghetti fresh from the sea",
                short_description: "Pull the nets with Captain Michalis & feast on lobster spaghetti at sea",
                duration: "8 Hours",
                bokunProductId: "1167681",
                slides: [
                    { image: "/images/1167681/Lobster1.webp", title: "" },
                    { image: "/images/1167681/Lobster2.webp", title: "" },
                    { image: "/images/1167681/Lobster3.webp", title: "" },
                    { image: "/images/1167681/Lobster4.webp", title: "" },
                    { image: "/images/1167681/Lobster5.webp", title: "" },
                    { image: "/images/1167681/Lobster6.webp", title: "" },
                    { image: "/images/1167681/Lobster7.webp", title: "" },
                    { image: "/images/1167681/Lobster8.webp", title: "" },
                    { image: "/images/1167681/Lobster9.webp", title: "" },
                    { image: "/images/1167681/Lobster10.webp", title: "" }
                ]
            },
            {
                tourTitle: "Sunset Lobster Fishing Trip",
                tourType: "FISHING TOUR",
                itinerary: "Agia Pelagia • Net Hauling at Sunset • Secluded Beach • Seafood Dinner",
                operatingDays: "Daily (Weather Permitting)",
                from_price: 110.00,
                badges: { isExclusive: true },
                isBookableOnBokun: true,
                card_subtitle: "Golden hour, nets at sea & dinner under the Ionian stars",
                short_description: "Haul the nets at golden hour & dine on fresh seafood under the stars",
                duration: "6 Hours",
                bokunProductId: "1167717",
                slides: [
                    { image: "/images/1167717/Lobster1.webp", title: "" },
                    { image: "/images/1167717/Lobster2.webp", title: "" },
                    { image: "/images/1167717/Lobster3.webp", title: "" },
                    { image: "/images/1167717/Lobster4.webp", title: "" },
                    { image: "/images/1167717/Lobster5.webp", title: "" },
                    { image: "/images/1167717/Lobster6.webp", title: "" },
                    { image: "/images/1167717/Lobster7.webp", title: "" },
                    { image: "/images/1167717/Lobster8.webp", title: "" },
                    { image: "/images/1167717/Lobster9.webp", title: "" },
                    { image: "/images/1167717/Lobster10.webp", title: "" }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────────
    //  ACTIVITIES  (on-request, no Bokun page)
    // ─────────────────────────────────────────────
    {
        id: "activities",
        title: "Activities",
        subtitle: "Elevate your Kefalonia experience",
        tours: [
            {
                tourTitle: "Horse Riding",
                tourType: "HORSE RIDING",
                from_price: 35.00,
                badges: {},
                card_subtitle: "Explore Kefalonia on horseback — beach rides, coastal trails & hidden villages",
                short_description: "Saddle up and discover Kefalonia's most beautiful landscapes on horseback. Whether you're a first-timer or an experienced rider, our guided rides take you through stunning coastal scenery, ancient olive groves and hidden corners of the island you'd never find on foot. Suitable for all ages — 15% discount for children aged 7–15.",
                bokunProductId: "PLACEHOLDER_HR_1",
                isBookableOnBokun: false,
                isPrivateAvailable: true,
                private_description: "Looking for a private riding experience for your group, family or couple? We'll arrange an exclusive guided ride tailored to your group's ability and interests — beach, countryside or village trails. Get in touch and we'll put together the perfect outing for you.",
                slides: [
                    { image: "/images/horseriding/horseriding1.webp", title: "Hooves, Waves & Golden Light" }
                ]
            },
            {
                tourTitle: "Culinary Tasting Class",
                tourType: "ACTIVITY",
                from_price: 90.00,
                badges: { isExclusive: true },
                card_subtitle: "Cook, taste & celebrate Kefalonian cuisine",
                short_description: "An immersive hands-on cooking class at a local farm. Learn to prepare Kefalonian classics, taste estate olive oils and wines, and take home the recipes.",
                bokunProductId: "PLACEHOLDER_ACT_2",
                isBookableOnBokun: false,
                isPrivateAvailable: true,
                private_description: "Book a private culinary class just for your group at a local Kefalonian farm. Hands-on cooking, estate wine and olive oil tasting, traditional recipes to take home — a truly personal taste of the island, at your own pace and with your own people.",
                slides: [
                    { image: "/images/culinary/culinary1.webp", title: "Taste of Kefalonia" },
                    { image: "/images/culinary/culinary2.webp", title: "Food Artisans" }
                ]
            },
            {
                tourTitle: "Wine Tasting Experience",
                tourType: "ACTIVITY",
                from_price: 60.00,
                badges: { isSpecialOffer: true },
                card_subtitle: "Taste the soul of Kefalonia — award-winning Robola & Muscat wines",
                short_description: "A guided winery visit in the heart of Kefalonia. Discover the story behind the island's celebrated Robola wine, stroll the vineyards and enjoy a curated tasting of estate wines and local delicacies.",
                bokunProductId: "PLACEHOLDER_ACT_3",
                isBookableOnBokun: false,
                isPrivateAvailable: true,
                private_description: "Book a private winery experience just for your group — a guided tour of the vineyards, an introduction to Kefalonian winemaking and a generous tasting of Robola, Muscat and red estate wines, paired with local cheese and charcuterie. Relaxed, personal and utterly delicious.",
                slides: [
                    { image: "/images/winery/winery1.webp", title: "" },
                    { image: "/images/winery/winery2.webp", title: "" }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────────
    //  OPERA YACHT
    // ─────────────────────────────────────────────
    {
        id: "opera-yacht",
        title: "Opera Yacht",
        subtitle: "The ultimate luxury Ionian escape",
        tours: [
            {
                tourTitle: "M/Y Opera Private Charter",
                tourType: "LUXURY PRIVATE YACHT",
                from_price: 0, // Shows 'ON REQUEST'
                badges: { isExclusive: true },
                card_subtitle: "24m of Italian elegance — your private world on the water",
                short_description: "Experience the peak of luxury aboard the 80ft M/Y Opera. A masterpiece by Cantieri di Pisa, fully refitted in 2023, featuring 4 cabins for 8 guests and a professional crew of 4.",
                duration: "Full Day / Weekly",
                bokunProductId: "PLACEHOLDER_OPERA_1",
                isBookableOnBokun: false,
                isPrivateAvailable: true,
                private_description: "Step aboard the M/Y Opera for a journey of absolute luxury. Built by the prestigious Cantieri di Pisa and completely refitted in 2023, this 24-meter yacht combines classic beauty with modern sophistication. Based in Sami, she is ready to whisk you away to the hidden gems of the Ionian. With 4 cabins (Master, VIP, and 2 Double) and a crew of 4 dedicated professionals, your every wish is catered to. Fully equipped with a tender, jet ski, SUPs, wakeboard, and snorkeling gear, it's the perfect platform for unforgettable memories.",
                slides: [
                    { image: "/images/opera/opera1.webp", title: "M/Y Opera: Timeless Luxury at Sea" }
                ]
            }
        ]
    },

    // ─────────────────────────────────────────────
    //  PRIVATE TOURS  (anchor → TailoredExperiences)
    // ─────────────────────────────────────────────
    {
        id: "private-tours",
        title: "Private Tours",
        subtitle: "Tailor-made experiences just for you",
        tours: []
    }
];