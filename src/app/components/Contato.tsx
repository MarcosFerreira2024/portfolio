import React from 'react'
import BotaoMenor from './BotaoMenor'
import Link from 'next/link'
import Image from 'next/image'
import BotaoMaior from './BotaoMaior'

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
                <div className='flex items-center gap-2'>
                    <BotaoMenor alt='meu telefone' href={zap} target='_blank' width={18} height={18} src='/Main/telefone.svg'/>
                    <Link href={zap} target='_blank' className='text-subtitle font-title dark:hover:text-purple-500 hover:text-purple-800 transition-colors duration-150 ease-in-out'>(21) 98275-2636</Link>
                </div>

                <div className='flex items-center gap-2'>
                    <BotaoMenor alt='meu github' href='https://www.github.com/MarcosFerreira2024' target='_blank' width={18} height={18} src='/Main/github.svg'/>
                    <Link href={github} target='_blank' className='text-subtitle font-title dark:hover:text-purple-500 hover:text-purple-800 transition-colors duration-150 ease-in-out'>MarcosFerreira2024</Link>
                </div>

                <div className='flex items-center gap-2'>
                    <BotaoMenor alt='meu email' href='mailto:marcosfp2021@hotmail.com?subject=Ola%20Marcos,%20Gostaria%20de%20entrar%20em%20contato%20para%20oferecer%20uma%20oportunidade%20de%20emprego&body=' target='_blank' width={18} height={18} src='/Main/email.svg'/>
                    <Link href={email} target='_blank' className='text-subtitle font-title dark:hover:text-purple-500 hover:text-purple-800 transition-colors duration-150 ease-in-out'>marcosfp2021@hotmail.com</Link>
                </div>

                <div className='flex items-center gap-2'>
                    <BotaoMenor alt='meu linkedin' href='https://www.linkedin.com/in/marcos-vinicius-ferreira/' target='_blank' width={18} height={18} src='/Main/linkedin.svg'/>
                    <Link href={linkedin} target='_blank' className='text-subtitle font-title dark:hover:text-purple-500 hover:text-purple-800 transition-colors duration-150 ease-in-out'>Marcos-Vinicius-Ferreira</Link>
                </div>

                <div className='flex items-center gap-2'>
                    <BotaoMenor alt='Rio De Janeiro' href={local}   width={18} height={18} src='/Main/local.svg'/>
                    <Link href={local} target='_blank'  className='text-subtitle font-title dark:hover:text-purple-500 hover:text-purple-800 transition-colors duration-150 ease-in-out'>Rio de Janeiro - Brasil</Link>
                </div>
                <div className='md:hidden flex'>
                    <BotaoMaior href={curriculo} target="_blank" classes="w-[206px] justify-between" label="Baixar Currículo" src={`/Main/download.svg`} alt="download"/>
                </div>

            </div>
            <div className='md:flex hidden flex-col items-center justify-between gap-5 p-10'>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-subtitle font-title dark:hover:text-purple-500 hover:text-purple-800 transition-colors duration-150 ease-in-out'>#Open to Work</p>
                    <Image src={`/Main/profile.png`} quality={100}priority alt="profile picture" height={200} width={200} className="w-[150px] h-[150px] transition-none hover:opacity-95 hover:rotate-1 transition-all ease-linear duration-300 rounded-full mx-auto md:mx-0   "/>

                </div>
                <BotaoMaior href={curriculo} target="_blank" classes="w-[206px] justify-between" label="Baixar Currículo" src={`/Main/download.svg`} alt="download"/>
            </div>

        </div>
    </div>
  )
}

export default Contato
