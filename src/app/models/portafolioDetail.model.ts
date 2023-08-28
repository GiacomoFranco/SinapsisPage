export interface PortafolioDetail {
    title: string;
    slug: string;
    category: category[],
    general: {
        screenshot: string;
        logo: string;
        experience: string;
        description: string;
        urlProject: string;
    };
    visualProject: {
        Resourselaptop: string;
        title: string;
        description: string;
    }
    visualMobile: {
        resourseMobile: string;
        title: string;
        description: string;
    }
}

export interface category {
    name: string;
    imagen: string
}