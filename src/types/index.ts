export interface TourSlide {
    image: string;
    title: string;
    subtitle?: string;
}

export interface Tour {
    tourTitle: string;
    duration: string;
    bokunProductId: string;
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
