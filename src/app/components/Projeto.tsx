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
        async function fetchData(){
            const data = await getProjetos()
            setData(data)
        }
        fetchData()
        
        
    },[])
  return (
    <section className='flex flex-col gap-10'>
        {data?data.map((projeto)=>(
            <div key={projeto.id} className='md:grid gap-5 md:gap-0 flex flex-col  items-center md:items-start  md:grid-cols-2'>
                <div className='flex flex-col max-w-[300px] '>
                    <div className='flex gap-2 pb-2'>
                        <BotaoMaior label={projeto.titulo} href={projeto.liveUrl} target="_blank" classes="justify-between transition-colors flex-1 md:flex-initial md:min-w-[240px] md:max-w-[240px] text-lg font-title" alt="ver certificiado" src="/Geral/Seta.svg" className="" />
                        <BotaoMenor alt={projeto.titulo} href={projeto.githubUrl} target="_blank" src='/Main/github.svg'/>
                    </div>
                    <div className='md:min-h-[300px] md:max-h-[300px]'>
                        <h1 className='text-sm pb-2'>{projeto.descricao}</h1>
                        <ul className='flex gap-2 items-center'>
                            {projeto.skillsPath.map((skill,i)=>(
                                <li  key={i}>
                                    <Image alt={projeto.skills[i]}  src={skill} width={20} height={20} />
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                <div className='flex start'>
                    <div>
                    <Link href={projeto.liveUrl} target="_blank">  <Image quality={100} alt={projeto.titulo} className='border-title hover:opacity-85 transition-all duration-300 ease-in-out border-[2px] md:max-w-[100%] max-w-[300px] object-cover  rounded-[7.5px]' src={projeto.photoDark && resolvedTheme === 'dark'?projeto.photoDark:projeto.photo} width={1440}  height={1440} /></Link>
                    </div>

                </div>

            </div>
        )):<Loading />}
      
    </section>
  )
}

export default Projeto
