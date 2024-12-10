"use client"
import Image from 'next/image'
import React from 'react'
import BotaoMaior from './BotaoMaior'
import BotaoMenor from './BotaoMenor'

function Main() {
  return (
    <main className='max-w-container font-subtitle text-subtitle pt-[120px] sm:pt-[160px] items-center justify-center gap-5 sm:gap-0 sm:justify-normal relative   flex flex-col sm:grid sm:grid-cols-2 mx-auto'>
        <div>
            <Image src={`/Main/profile.png`} alt='profile picture' height={300} width={300} className='w-[150px]    sm:w-[inherit] sm:h-[inherit]' />
        </div>
        <section className='flex flex-col  mx-auto' >
            <div className='flex-1 flex   justify-center flex-col'>
                <p>Desenvolvedor Full-Stack</p>
                <h1 className='sm:text-title font-title text-5xl '>Marcos Vinicius <br /> Ferreira Pinto</h1>
            </div>
            <nav className='flex flex-col gap-3   pt-3 '> 
                <div className='flex   flex-wrap sm:flex-nowrap gap-[14px] '>
                    <BotaoMaior label='Baixar Currículo' src={`/Main/download.svg`} alt='download' />
                    <BotaoMenor href='https://github.com/MarcosFerreira2024' src='/Main/github.svg' alt='github'/>
                    <BotaoMenor href="https://www.linkedin.com/in/marcos-vinicius-ferreira/" src='/Main/linkedin.svg' alt='linkedin'/>
                    <BotaoMenor href='mailto:marcosfp2021@hotmail.com?subject=Ola%20Marcos,%20Gostaria%20de%20entrar%20em%20contato%20para%20oferecer%20uma%20oportunidade%20de%20emprego&body=' src='/Main/email.svg' alt='email'/>
                </div>
                <div className='flex '>
                    <BotaoMaior label='Sobre mim' src={`/Main/sobre.svg`} alt='perfil' />
                </div>
                

                
            </nav>
        </section>
    </main>
  )
}

export default Main
