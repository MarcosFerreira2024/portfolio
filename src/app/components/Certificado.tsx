"use client"
import { useEffect, useState } from "react";
import { getCertificados } from "../utils/fetch";
import BotaoMaior from "./BotaoMaior";
import Loading from "./Loading";
import { Certificados } from "../types/apiTypes";

function Certificado() {
  const[data,setData] = useState<null|Certificados[]>(null)
    useEffect(()=>{
        if(localStorage.getItem("dataCertificados")){
            setData(JSON.parse(localStorage.getItem("dataCertificados") as string))
            return
        }
            async function fetchData(){
                const data = await getCertificados()
                if(data){
                    localStorage.setItem("dataCertificados",JSON.stringify(data))
                    setData(data)
                }
            }
            fetchData()
    },[])

  return (
    <section className="grid justify-center gap-5 md:gap-0 md:grid-cols-2 ">
      {data?data.map((certificado) => (
        <div className="mb-10" key={certificado.id}>
            <div className=" h-[100%]  flex flex-col justify-between ">
                <div>
                <BotaoMaior label={certificado.titulo} href={certificado.url} target="_blank" classes="justify-between max-w-[220px] text-subtitle  font-subtitle" alt="Ver Certificado" src="/Geral/Seta.svg" className="" />
                  <p className="text-sm max-w-[322px] font-title pt-2 " dangerouslySetInnerHTML={{ __html: certificado.descricao }} />
                </div>
                <div className=" h-[2px] max-w-[322px] mt-2 bg-subtitle"></div>
            </div>
        </div>
      )):<Loading/>}
    </section>
  );
}

export default Certificado;