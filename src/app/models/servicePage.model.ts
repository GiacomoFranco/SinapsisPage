export interface servicePageData {
    developSoftware: {
        title: string,
        description: string,
        secondDescription: string,
        video?: string
    },
    phoneSection: Sections,
    laptopSection: Sections,
    sectionStadistics: Stadistics[],
    SectionWorkWithUs: {
        Title: string,
        urlBoton: string
    },
}

export interface Stadistics {
    icon: string;
    numbers: string,
    title: string,
    description: string
}

export interface Sections {
    video: string,
    title: string,
    description: string,
    urlBoton: string
}