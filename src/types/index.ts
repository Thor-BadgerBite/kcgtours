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
        [key: string]: boolean | undefined;
    };
    bokunProductId: string;
    baseViews?: number;
    short_description?: string;
    /** true = has a live Bokun booking page; false = on-request only, show "Make a Request" */
    isBookableOnBokun: boolean;
    slides: TourSlide[];
}

export interface TourSubCategory {
    id: string;
    title: string;
    tours: Tour[];
}

export interface TourCategory {
    id: string;
    title: string;
    subtitle: string;
    /** If present, render subcategories instead of a flat tour list */
    subCategories?: TourSubCategory[];
    tours?: Tour[];
}

declare global {
    interface Window {
        BokunWidget?: {
            open: (id: string) => void;
        };
    }
}
