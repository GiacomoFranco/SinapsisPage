export interface portafolioModel {
    id: string;
    title: string;
    featuredImg: string;
    slug: string;
    general: {
        screenshot: string;
        screenshotMobile: string;
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
