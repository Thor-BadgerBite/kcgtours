export interface TourSlide {
    image: string;
    title: string;
    subtitle?: string;
}

export interface Tour {
    tourTitle: string;
    tourType: string;
    itinerary?: string;
    operatingDays?: string;
    duration?: string;
    from_price: number | string;
    badges?: {
        isExclusive?: boolean;
        isBestSeller?: boolean;
        isSpecialOffer?: boolean;
        isDiscount?: boolean;
        discountLabel?: string;
        [key: string]: boolean | string | undefined;
    };
    bokunProductId: string;
    baseViews?: number;
    /** Short catchy headline shown at the TOP of the card (1-2 lines max) */
    card_subtitle?: string;
    /** For non-Bokun tours: a fuller description shown in the card footer instead of itinerary details */
    short_description?: string;
    /** true  → has a live Bokun booking page → show "View More & Book"
     *  false → on-request only              → show "Make a Request"   */
    isBookableOnBokun: boolean;
    /** When set, the primary CTA becomes "Book Now" opening this URL in a new tab */
    externalBookingUrl?: string;
    /** true  → offers a private, on-request option for this tour */
    isPrivateAvailable?: boolean;
    /** Short description shown inside the private request form */
    private_description?: string;
    /** Path to a flag SVG/image shown bottom-left on the card image (e.g. for language-specific tours) */
    languageFlag?: string;
    /** Per-tour UI label overrides — use for non-English tours */
    labels?: {
        from?: string;          // default "FROM:"
        onRequest?: string;     // default "ON REQUEST"
        operating?: string;     // default "Operating:"
        duration?: string;      // default "Duration:"
        bookNow?: string;       // default "Book Now"
        privateOption?: string; // default "Private Option"
        privateMobile?: string; // default "Private"
        makeRequest?: string;   // default "Make a Request"
    };
    slides: TourSlide[];
}

export interface TourSubCategory {
    id: string;
    title: string;
    /** Short descriptive line shown below the sub-category heading */
    subtitle?: string;
    tours: Tour[];
}

export interface TourCategory {
    id: string;
    title: string;
    subtitle: string;
    /** If present, render as sub-category sections instead of a flat grid */
    subCategories?: TourSubCategory[];
    tours?: Tour[];
}

declare global {
    interface Window {
        BokunWidget?: {
            open: (id: string) => void;
        };
        dataLayer?: Record<string, unknown>[];
    }
}
