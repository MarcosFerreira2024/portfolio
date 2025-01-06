import { Certificados, Projetos } from "@/app/types/apiTypes"

const host = "https://back-end-portfolio-marcosferreira2024s-projects.vercel.app/api"
export const getProjetos = async () => {
    try {
        const response = await fetch(`${host}/projetos`)
        const data = await response.json()
        return data as Projetos[]
    } catch {
        return null
    }



}


export const getCertificados = async () => {
    try {
        const response = await fetch(`${host}/certificados`)
        const data = await response.json()
        return data as Certificados[]
    } catch {
        return null
    }
}