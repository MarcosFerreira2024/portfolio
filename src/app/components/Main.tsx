"use client"
import Image from 'next/image'
import React from 'react'
import BotaoMaior from './BotaoMaior'
import BotaoMenor from './BotaoMenor'

function Main() {
  return (
    <main className='max-w-container mx-auto sm:pt-[160px] text-subtitle pt-[120px] ' >
        <section className='grid sm:grid-cols-2 justify-center sm:gap-0 gap-5  mx-auto' >
            <div>
                <Image src={`/Main/profile.png`} quality={100} priority alt='profile picture' height={300} width={300} className='w-[200px] rounded-full mx-auto   sm:w-[inherit] sm:h-[inherit]' />
            </div>
            <div>
                <div className='flex-1 flex   justify-center flex-col'>
                    <p>Desenvolvedor Full-Stack</p>
                    <h1 className='sm:text-title font-title text-5xl '>Marcos Vinicius <br /> Ferreira Pinto</h1>
                </div>
                <nav className='flex flex-col gap-3   pt-3 '> 
                    <div className='flex   flex-wrap gap-[15px] '>
                        <BotaoMaior label='Baixar Currículo' src={`/Main/download.svg`} alt='download' />
                        <div className='flex gap-3'>
                            <BotaoMenor href='https://github.com/MarcosFerreira2024' src='/Main/github.svg' alt='github'/>
                            <BotaoMenor href="https://www.linkedin.com/in/marcos-vinicius-ferreira/" src='/Main/linkedin.svg' alt='linkedin'/>
                            <BotaoMenor href='mailto:marcosfp2021@hotmail.com?subject=Ola%20Marcos,%20Gostaria%20de%20entrar%20em%20contato%20para%20oferecer%20uma%20oportunidade%20de%20emprego&body=' src='/Main/email.svg' alt='email'/>
                        </div>
                    
                    </div>
                    <div className='flex '>
                        <BotaoMaior label='Sobre mim' src={`/Main/sobre.svg`} alt='perfil' />
                    </div>
                </nav>
            </div>
           
        </section>
    </main>
  )
}

export default Main
