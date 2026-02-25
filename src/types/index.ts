export interface TourSlide {
    image: string;
    title: string;
    subtitle?: string;
}

export interface Tour {
    tourTitle: string;
    tourType: string;
    itinerary: string;
    operatingDays: string;
    duration: string;
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
    slides: TourSlide[];
}

export interface TourCategory {
    id: string;
    title: string;
    subtitle: string;
    tours: Tour[];
}

declare global {
    interface Window {
        BokunWidget?: {
            open: (id: string) => void;
        };
    }
}
