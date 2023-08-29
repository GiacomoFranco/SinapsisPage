export interface portafolioModel {
    title: string;
    featuredImg: string;
    slug: string;
    general: {
        screenshot: string;
        screenshotMobile: boolean;
        logo: string;
        experience: string;
        description: string;
        urlProject: string;
    },
    visualProject: {
        Resourcelaptop: Boolean;
        title: string;
        description: string;
    },
    visualMobile: {
        resourceMobile: boolean,
        title: string;
        description: string;
    }
}
