"use client";
import Link from "next/link";
import React, { useRef } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
export const liNav = [
  {
    slug: "",
    text: "Ínicio",
  },
  {
    slug: "projetos",
    text: "Projetos",
  },
  {
    slug: "certificados",
    text: "Certificados",
  },
  {
    slug: "contato",
    text: "Contato",
  },
];
function Header() {
  const menu = useRef<HTMLDivElement>(null);
  function handleMenu() {
    menu.current?.classList.toggle("translate-x-[100vw]");
    menu.current?.classList.toggle("md:hidden");
  }

  return (
    <header className="fixed bg-background z-50 top-0 left-0 right-0">
      <nav className="flex   max-w-container justify-between font-subtitle  text-subtitle mx-auto ">
        <div className="md:flex-1 py-5 px-5 md:px-0 z-20  items-center md:flex ">
          <ThemeSwitcher />
        </div>
        {/*menu mobile */}
        <div
          ref={menu}
          className="min-w-[100vw] md:hidden transition-all ease-in-out duration-500 translate-x-[100vw] max-w-container flex absolute top-0 left-0 right-0    mx-auto  h-[100vh] "
        >
          <div className="flex-1  " onClick={handleMenu}></div>
          {/*itens Navbar do menu mobile */}
          <div className="w-[60%] max-w-[400px]  text-subtitle py-5 sombraMenu bg-background">
            <ul className="flex flex-col gap-5  text-center">
              <div className="flex justify-center " onClick={handleMenu}>
                <Image
                  src={`/Header/close.svg`}
                  width={18}
                  height={18}
                  className="hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
                  alt="close"
                />
              </div>
              {liNav.map((data, id) => (
                <li key={id}>
                  <Link href={`/${data.slug}`}>
                    <h1 className="hover:text-purple-700 text-xl dark:hover:text-white transition-colors ease-in-out duration-300 ">
                      {data.text}
                    </h1>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*Abrir Menu */}
        <div
          onClick={handleMenu}
          className="flex cursor-pointer group  px-5 md:hidden py-5 flex-col gap-1.5"
        >
          <div className="w-6 self-end group-hover:dark:bg-white group-hover:bg-purple-800  transition-all ease-in-out duration-300  h-[2px] bg-title rounded-[2px]"></div>
          <div className="w-5 h-[2px] group-hover:dark:bg-white  group-hover:bg-purple-800 transition-all ease-in-out duration-300 self-end bg-title rounded-[2px]"></div>
          <div className="w-4 self-end group-hover:dark:bg-white group-hover:bg-purple-800 transition-all ease-in-out duration-300 h-[2px] bg-title rounded-[2px]"></div>
        </div>
        {/*Itens NavBar */}
        <ul className="md:flex hidden flex-1 items-center  justify-between  ">
          {liNav.map((data, id) => (
            <li key={id}>
              <Link href={`/${data.slug}`}>
                <h1 className="hover:text-purple-700 transition-colors ease-in-out duration-300 dark:hover:text-purple-500">
                  {data.text}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
