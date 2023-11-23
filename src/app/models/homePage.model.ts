export interface HomePage {
    homeBanner: {
        titulo: string;
        descriptionText: string;
        nombre_boton_principal: string;
        nombre_boton_secundario: string;
    },
    aboutUs: {
        title: string;
        description: string;
        UrlMainBtn: string;
        UrlSecondBtn: string;
        gallery:[]
    },
    section: {
        title: string;
        description: string;
        extraText: string;
        imagen: string;
    },
    ourServices: {
        titulo_seccion: string;
        imagen: string;
        titulo_boton: string;
    },
    testimonios: {
        titulo_testimonios: string;
        descripcion_testimonio: string;
    },
    proyectos_destacados: {
        titulo_proyectos_destacados: string;
    },
    preguntas_frecuentes: {
        titulo_preguntas_frecuentes: string;
    }
}