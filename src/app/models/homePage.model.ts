export interface HomePage {
    homeBanner: {
        titulo: String;
        descriptionText: String;
        nombre_boton_principal: String;
        nombre_boton_secundario: String;
    },
    aboutUs: {
        title: String;
        description: String;
        UrlMainBtn: String;
        UrlSecondBtn: String;
        gallery:[]
    },
    section: {
        title: String;
        description: String;
        extraText: String;
        imagen: string;
    },
    ourServices: {
        titulo_seccion: String;
        imagen: String;
    }
}