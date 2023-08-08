export interface nosotrosPage {
    gallery: string[];
    ourHistory: {
        imagen: string;
        title: string;
        description: string;
    };
    timeLine: {
        description: string;
        data: Timeline[]
    };
    misionVision: MisionVision[];
    sectionDesign: {
        imagen: string;
        title: string;
        descripcion: string;
        UrlBtn: string;
    }
}

export interface Timeline {
    title: string;
    icon: string;
    descripcion: string;
    year: string;
}

export interface MisionVision {
    title: string;
    description: string;
}