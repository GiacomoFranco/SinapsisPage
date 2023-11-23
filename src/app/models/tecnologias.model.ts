export interface Tecnologias {
    titulo: string;
    descripcion: string;
    tecnologias: Tecnologia[]
}

export interface Tecnologia {
    nombre: string;
    id: number;
    parent_id: number;
    imagen: string;
}