"use client"
import Image from 'next/image'
import React from 'react'
interface iProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    label?:string,
    classes?:string,
    src:string,
    alt:string,
   
}
function BotaoMaior({label, classes, src, alt, ...props}:iProps) {
  const styles =`${classes}  dark:hover:bg-purple-700 dark:hover:text-white text-subtitle font-subtitle border-title border-[0.0938rem] rounded-[0.4688rem] h-[39px] ` 
  return (
    <>
        <button {...props} className={` ${styles} group transition-colors ease-linear duration-500  items-center  px-2 flex `}><h1>{label}</h1> <Image className='group-hover:dark:invert group-hover:dark:brightness-0 transition-colors ease-linear duration-500' src={src} alt={alt} width={18} height={18} /></button>
    </>
  )
}

export default BotaoMaior
