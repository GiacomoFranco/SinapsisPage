export interface PortafolioDetail {
    title: string;
    slug: string;
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
        resourceMobile: string;
        title: string;
        description: string;
    }
}