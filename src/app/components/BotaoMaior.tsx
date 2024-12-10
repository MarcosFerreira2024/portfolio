"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface iProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    label?:string,
    classes?:string,
    src:string,
    alt:string,
   
}
function BotaoMaior({label, classes, src, alt, ...props}:iProps) {
  return (
    <>
        <button className='justify-between dark:hover:bg-purple-700 order-1 sm:-order-none dark:hover:text-white group transition-colors ease-linear duration-500 min-w-full order-0 sm:min-w-[12.8125rem] items-center h-[39px] px-2 flex  text-subtitle font-subtitle border-title border-[0.0938rem] rounded-[0.4688rem]  '><h1>{label}</h1> <Image className='group-hover:dark:invert group-hover:dark:brightness-0 transition-colors ease-linear duration-500' src={src} alt={alt} width={18} height={18} /></button>
    </>
  )
}

export default BotaoMaior
