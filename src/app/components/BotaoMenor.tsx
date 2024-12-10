import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface Ibotao extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    href:string,
    classes?:string,
    src:string,
    alt:string
    width?:number,
    height?:number
}
function BotaoMenor({href,width=18,height=18,classes,src,alt,...props}:Ibotao) {
  return (
    <>
      <Link href={href} target='_blank' className= {`${classes} w-[39px] h-[39px] group border-title border-[1.5px] rounded-[7.5px] flex items-center justify-center hover:bg-purple-700 hover:text-white transition-colors ease-linear duration-500`} {...props} ><Image className='group-hover:dark:invert group-hover:dark:brightness-0 transition-colors ease-linear duration-300' src={src} width={width} height={height} alt={alt} /></Link>
    </>
  )
}

export default BotaoMenor
