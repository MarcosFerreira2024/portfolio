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
    <section className='flex flex-col gap-20 md:gap-0 '>
        {data?data.map((projeto,index)=>(
            <div key={projeto.id} className=' md:grid animaSection gap-5   flex flex-col  items-center md:items-start  md:grid-cols-2'>
                <div className='flex flex-col  max-w-[300px] '>
                    <div className='flex gap-2 pb-2'>
                        <BotaoMaior label={projeto.titulo} href={projeto.liveUrl} target="_blank" classes="justify-between transition-colors flex-1 md:flex-initial md:min-w-[240px] md:max-w-[240px] text-xl font-subtitle" alt="ver certificiado" src="/Geral/Seta.svg" className="" />
                        <BotaoMenor alt={projeto.titulo} href={projeto.githubUrl} target="_blank" src='/Main/github.svg'/>
                    </div>
                    <div className='md:min-h-[280px] md:max-h-[300px]'>
                        <h1 className='text-subtitle font-title pb-2'>{projeto.descricao}</h1>
                        <ul className='flex gap-2 items-center'>
                            {projeto.skillsPath.map((skill,i)=>(
                                <li  key={i}>
                                    <Image alt={projeto.skills[i]}  className='max-h-[18px] dark:hover:brightness-0 hover:brightness-75 duration-300 ease-in-out dark:hover:invert min-h-[18px]' src={skill} width={18} height={18} />
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                <div className='flex start'>
                    <div>
                    <Link href={projeto.liveUrl} target="_blank">  <Image quality={100} alt={projeto.titulo} className='border-title max-h-[209px] md:max-h-[245px]  hover:opacity-90 transition-colors duration-300 ease-in-out border-[2px] md:max-w-[100%] max-w-[300px] object-cover  rounded-[7.5px]' src={projeto.photoDark && resolvedTheme === 'dark'?projeto.photoDark:projeto.photo} width={1440}  height={1440} /></Link>
                    </div>

                </div>
            {data.length===index+1?<div className=' col-span-2 text-center'><h1>Mais Projetos No Futuro</h1></div>:null}
            </div>

        )):<Loading />}
        
      
    </section>
  )
}

export default Projeto
