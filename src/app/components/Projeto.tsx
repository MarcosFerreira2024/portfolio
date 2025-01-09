"use client"

import React, { useEffect, useState } from 'react'
import { getProjetos } from '../utils/fetch';
import BotaoMaior from './BotaoMaior';
import BotaoMenor from './BotaoMenor';
import Image from 'next/image';
import Link from 'next/link';
import { Projetos } from '../types/apiTypes';
import { useTheme } from 'next-themes';
import Loading from './Loading';

function Projeto() {
    const [data,setData] = useState<Projetos[]|null>(null)
    const { resolvedTheme } = useTheme()
    useEffect(()=>{
        if(localStorage.getItem("dataProjetos")){
            setData(JSON.parse(localStorage.getItem("dataProjetos") as string))
            localStorage.removeItem("dataProjetos")
            return
        }
            async function fetchData(){
                const data = await getProjetos()
                if(data){
                    localStorage.setItem("dataProjetos",JSON.stringify(data))
                    setData(data)
                }
            }
            fetchData()
    },[])
  return (
    <section className='flex flex-col gap-10 md:gap-20 '>
        {data?data.map((projeto,index)=>(
            <div key={projeto.id} className=' md:grid animaSection gap-10 md:gap-0   flex flex-col  items-center md:items-start  md:grid-cols-2'>
                <div className='flex justify-between flex-col  md:min-h-[245px]  md:max-h-[245px]  max-w-[307px]  '>
                    <div className='flex flex-col gap-2 mb-2 pr-5 '>
                        <div className='flex gap-2'>
                            <BotaoMaior label={projeto.titulo} href={projeto.liveUrl} target="_blank" classes="justify-between transition-colors flex-1 md:flex-initial md:min-w-[240px] md:max-w-[240px] text-subtitle  font-subtitle" alt="Ver Projeto" src="/Geral/Seta.svg" className="" />
                            <BotaoMenor alt={"Projeto no GitHub"} href={projeto.githubUrl} target="_blank" src='/Main/github.svg'/>
                        </div>

                        <h1 className=' text-sm font-subtitle pb-2 max-w-[360px] break-words hyphens-auto'>{projeto.descricao}</h1>
                    </div>
                    <div>
                        <ul className='flex gap-2 items-center'>
                            {projeto.skillsPath.map((skill,i)=>(
                                <li  key={i} data-tooltip={projeto.skills[i]} className='tooltip'>
                                    <Image alt={projeto.skills[i]}  className='max-h-[18px]    dark:hover:brightness-0 hover:brightness-75 duration-300 ease-in-out dark:hover:invert min-h-[18px]' src={skill} width={18} height={18} />
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                <div className='flex start'>
                    <div>
                    <Link href={projeto.liveUrl} target="_blank">  <Image quality={100} alt={projeto.titulo} className='border-title max-h-[209px] max-w-[308px] md:max-h-[245px]  hover:opacity-90 transition-colors duration-300 ease-in-out border-[2px] md:max-w-[100%]  object-cover  rounded-[7.5px]' src={projeto.photoDark && resolvedTheme === 'dark'?projeto.photoDark:projeto.photo} width={1440}  height={1440} /></Link>
                    </div>

                </div>
            {data.length===index+1?<div className=' col-span-2 mt-10 text-center'><h1>Mais Projetos No Futuro</h1></div>:null}
            </div>

        )):<Loading />}
        
      
    </section>
  )
}

export default Projeto
