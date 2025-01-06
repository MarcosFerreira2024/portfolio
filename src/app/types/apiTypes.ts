export type Certificados = {
    id: string,
    titulo: string,
    descricao: string,
    horas: string,
    slug: string,
    url: string,
    createdAt: string,
    updatedAt: string,
}


export type Projetos = {
    id: string;
    titulo: string;
    descricao: string;
    skills: string[];
    skillsPath: string[]
    slug: string;
    liveUrl: string;
    githubUrl: string;
    photo: string;
    photoDark : string,
    createdAt: string;
    updatedAt: string;
};