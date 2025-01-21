import React from 'react'
import Image from 'next/image'
import BotaoMaior from './BotaoMaior'
import BotaoContato from './BotaoContato'

function Contato() {
    const zap = 'https://wa.me/5521982752636'
    const github = 'https://www.github.com/MarcosFerreira2024'
    const email = 'mailto:marcosfp2021@hotmail.com?subject=Ola%20Marcos,%20Gostaria%20de%20entrar%20em%20contato%20para%20oferecer%20uma%20oportunidade%20de%20emprego&body='
    const linkedin = 'https://www.linkedin.com/in/marcos-vinicius-ferreira/'
    const local = "https://www.google.com/maps/place/Rio+de+Janeiro,+State+of+Rio+de+Janeiro/@-22.9127698,-44.1054343,9z/data=!3m1!4b1!4m6!3m5!1s0x9bde559108a05b:0x50dc426c672fd24e!8m2!3d-22.9068467!4d-43.1728965!16zL20vMDZnbXI?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
    const curriculo = '/Main/Curriculo-Marcos-Vinicius-Ferreira.pdf'

  return (
    <div className='m-5 md:m-0 border-2 border-title rounded-[7.5px]'>
        <div className='grid justify-center md:grid-cols-2'>
            <div className='p-10 flex flex-col gap-5'>
                <h1 className='text-subtitle group  font-title'>
                    Minhas informações ↓
                </h1>
                    <BotaoContato src='/Main/telefone.svg' alt='Meu zap' href={zap} info='(21)98275-2636'  />
                    <BotaoContato src='/Main/github.svg' alt='Meu github' href={github} info='Marcos Ferreira 2024'  />
                    <BotaoContato src='/Main/email.svg' alt='Meu email' href={email} info='marcosfp2021@hotmail.com'  />
                    <BotaoContato src='/Main/linkedin.svg' alt='Meu linkedin' href={linkedin} info='Marcos-Vinicius-Ferreira'  />
                    <BotaoContato src='/Main/local.svg' alt='Local Desejado' href={local} info='Rio de Janeiro - Brasil'  />
            </div>
            <div className='md:flex hidden flex-col  items-center justify-between gap-5 p-10'>
                <div className='flex flex-col gap-2 items-center '>
                    <p className='text-subtitle font-title dark:hover:text-white hover:text-slate-600 transition-colors duration-150 ease-in-out'>#Open to Work</p>
                    <Image src={`/Main/profile.png`} quality={100}priority alt="profile picture" height={200} width={200} className="w-[150px] h-[150px] transition-none hover:opacity-95 hover:rotate-1 transition-all ease-linear duration-300 rounded-full mx-auto md:mx-0   "/>

                </div>
                <BotaoMaior  href={curriculo} target="_blank" classes="w-[206px]  justify-between" label="Baixar Currículo" src={`/Main/download.svg`} alt="download"/>
            </div>

        </div>
    </div>
  )
}

export default Contato
