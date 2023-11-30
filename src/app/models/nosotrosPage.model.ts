export interface nosotrosPage {
    gallery: string[];
    ourHistory: {
        imagen: string;
        title: string;
        description: string;
    },
    misionVision: MisionVision[];
    sectionDesign: {
        imagen: string;
        title: string;
        descripcion: string;
        UrlBtn: string;
        name_button: string;
    },
    timeLine: {
        description: string;
        data: Timeline[]
    },
    team: {
        title: string;
        subtitle: string;
        workWithUs: string;
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