import { Certificados, Projetos } from "@/app/types/apiTypes"

export const getProjetos =  async () =>{
    try {
        const response = await fetch("http://localhost:3000/projetos")
        const data = await response.json()
        return data as Projetos[]
    }catch{
        return null
    }



}


export const getCertificados = async () => {
    try {
        const response = await fetch("http://localhost:3000/certificados")
        const data = await response.json() 
        return data as Certificados[]
    }catch{
        return null
    }
}