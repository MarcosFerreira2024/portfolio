"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export interface Contato {
    src:string,
    href:string,
    alt:string,
    info:string,
}

function BotaoContato({src,href,alt,info}:Contato) {
    const [tooltip,setTooltip]= useState<boolean>(false)

  return (
    <Link onMouseEnter={()=> setTooltip(true)} onMouseLeave={()=> setTooltip(false)} onClickCapture={()=> setTooltip(false)} href={href} data-tooltip={alt} target="_blank" className={` ${tooltip?"tooltip":""} flex items-center group gap-2 self-start pr-5 animaContato `}>
        <div className='flex items-center gap-2 '>
            <div className={` sombraBotao  group-hover:dark:bg-purple-700 min-w-[39px] min-h-[39px] group-hover:bg-title transition-colors w-[39px] h-[39px] group border-purple-700 dark:border-title border-[2px]   rounded-[7.5px] flex items-center justify-center   dark:bg-transparent    ease-linear duration-300`}>
                <Image
                className="group-hover:invert  dark:invert-0 dark:brightness-100 group-hover:brightness-0 transition-colors ease-linear duration-300"
                src={src}
                width={18}
                height={18}
                alt={alt}
                />
            </div>
            <p className='group-hover:dark:text-white hover:text-purple-700  cursor-pointer transition-colors duration-300 ease-in-out'>{info}</p>
        </div>
    </Link>
  )
}

export default BotaoContato
