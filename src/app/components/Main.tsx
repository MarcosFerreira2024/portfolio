"use client";
import Image from "next/image";
import React from "react";
import BotaoMaior from "./BotaoMaior";
import BotaoMenor from "./BotaoMenor";
import { skills } from "../data/skills";

function Main() {
  const [anima, setAnima] = React.useState(true);
  const [sobre, setSobre] = React.useState(false);
  return (
    <main className="max-w-container mx-auto md:pt-[180px] text-subtitle pt-[120px]  ">
      <section className="grid md:grid-cols-2 justify-center gap-5 md:gap-0   mx-auto my-auto h-[400px]   md:h-[460px]">
        <div>
          <Image
            src={`/Main/profile.png`}
            quality={100}
            priority
            alt="profile picture"
            height={300}
            width={300}
            className="w-[200px] md:w-[300px] md:h-[300px] transition-none hover:opacity-95 hover:rotate-1 transition-all ease-linear duration-300 rounded-full mx-auto md:mx-0   "
          />
        </div>
        <div>
          <div>
            <p>Desenvolvedor Full-Stack</p>
            <h1 className="md:text-title font-title text-5xl ">
              Marcos Vinicius <br /> Ferreira Pinto
            </h1>
          </div>
          <nav className="flex flex-col gap-3   pt-3 ">
            <div className="flex   flex-wrap gap-[15px] ">
              <BotaoMaior
                href="/Main/Curriculo-Marcos-Vinicius-Ferreira.pdf"
                target="_blank"
                classes="w-[206px] justify-between"
                label="Baixar Currículo"
                src={`/Main/download.svg`}
                alt="download"
              />
              <div className="flex gap-3">
                <BotaoMenor
                  href="https://github.com/MarcosFerreira2024"
                  src="/Main/github.svg"
                  alt="github"
                />
                <BotaoMenor
                  href="https://www.linkedin.com/in/marcos-vinicius-ferreira/"
                  src="/Main/linkedin.svg"
                  alt="linkedin"
                />
                <BotaoMenor
                  href="mailto:marcosfp2021@hotmail.com?subject=Ola%20Marcos,%20Gostaria%20de%20entrar%20em%20contato%20para%20oferecer%20uma%20oportunidade%20de%20emprego&body="
                  src="/Main/email.svg"
                  alt="email"
                />
              </div>
            </div>
            <div className="flex ">
              <BotaoMaior
                onClick={() => setSobre(!sobre)}
                classes={`w-[206px] justify-between`}
                label={sobre ? "Fechar" : "Sobre Mim"}
                src={`/Main/sobre.svg`}
                alt="perfil"
              />
            </div>
            {sobre && (
              <p className="text-left font-title text-md animaTexto max-w-[370px] md:max-w-full   ">
                Busco uma oportunidade de{" "}
                <strong className="font-semibold">Estágio</strong>. Possuo
                conhecimento em{" "}
                <strong className="font-semibold">Desenvolvimento Web</strong>,
                além de experiência prática em criar sites responsivos focados
                na experiência dos usuários. Atualmente estou estudando{" "}
                <strong className="font-semibold">Next.js </strong>e{" "}
                <strong className="font-semibold">Node</strong>. Sou uma pessoa
                comunicativa, gosto de trabalhar em equipe e priorizo a
                qualidade e rapidez no desenvolvimento de softwares.
              </p>
            )}
          </nav>
        </div>
      </section>
      <section className={`mt-60 md:mt-5   pb-5 `}>
        <div className="max-w-container gap-3 flex overflow-hidden ">
          <ul
            className={`flex gap-3    ${
              anima ? "animationSkills" : "animationSkillsPaused"
            }`}
          >
            {skills.map((item, id) => (
              <li
                onMouseEnter={() => setAnima(false)}
                onMouseLeave={() => setAnima(true)}
                key={id}
              >
                {" "}
                <BotaoMaior
                  classes="justify-between w-[150px] "
                  label={item.nome}
                  src={item.iconPath}
                  alt={item.alt}
                />
              </li>
            ))}
          </ul>
          <ul
            className={`flex gap-3    ${
              anima ? "animationSkills" : "animationSkillsPaused"
            }`}
          >
            {skills.map((item, id) => (
              <li
                onMouseEnter={() => setAnima(false)}
                onMouseLeave={() => setAnima(true)}
                key={id}
              >
                {" "}
                <BotaoMaior
                  classes="justify-between w-[150px] "
                  label={item.nome}
                  src={item.iconPath}
                  alt={item.alt}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
