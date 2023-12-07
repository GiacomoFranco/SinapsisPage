export interface WorkWithUsPage {
    title: string;
    mainBanner: {
        BackgroundImg: string;
        titleSection: string;
        descriptionText: string;
    },
    descriptionSection: {
        title: string;
        descriptionField: string;
    },
    advantagesWorkingWithUs: {
        imagen: string;
        title: string;
        description: string;
        addOptions: featuresWork[]
    },
    otherAdvantages: {
        titulo: string;
        otherAdvantages: Advantages[];
        buttonTitle: string;
    }
}

export interface featuresWork {
    icon: string;
    title: string;
    description: string;
}

export interface Advantages {
    icon: string;
    titulo: string;
    description: string;
}