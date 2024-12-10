import Link from 'next/link'
import React from 'react'
import { HeaderSvgSun } from './HeaderSvg'


const liNav = [{
    slug:"",
    text:"Ínicio"
},{
    slug:"projetos",
    text:"Projetos"
},{
    slug:"certificados",
    text:"Certificados"
},{
    slug:"contato",
    text:"Contato"
}]

function Header() {
  return (
    <header className='fixed top-5 left-0 right-0 z-10'>
        <nav >
            <ul className='flex justify-between  max-w-container mx-auto'>
                <li>
                    <HeaderSvgSun className='' />
                </li>

                <nav className='flex gap-5'>
                    {liNav.map((item,i)=>(
                        <li key={i}> <Link href={`/${item.slug}`}><h1 className='text-subtitle font-subtitle '>{item.text}</h1></Link></li>
                    ))}
                </nav>
            </ul>
        </nav>
      
    </header>
  )
}

export default Header
