"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface Ibotao extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  classes?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
function BotaoMenor({
  href,
  width = 18,
  height = 18,
  classes,
  src,
  alt,
  ...props
}: Ibotao) {
    const [tooltip,setTooltip]= useState<boolean>(false)
  return (
    <>
      <Link
        href={href}
        target="_blank"
        className={`${classes?classes:''}  ${tooltip?"tooltip":""} sombraBotao  dark:hover:bg-slate-50 min-w-[39px] min-h-[39px] hover:bg-title transition-all w-[39px] h-[39px] group border-title dark:border-title border-[2px]   rounded-[7.5px] flex items-center justify-center   dark:bg-transparent    ease-linear duration-300`}
        {...props}
        data-tooltip={alt}
        onMouseEnter={()=> setTooltip(true)}
        onMouseLeave={()=> setTooltip(false)}
        onClickCapture={()=> setTooltip(false)}
      >
        <Image
          className="dark:group-hover:brightness-0 dark:brightness-100 brightness-0 group-hover:brightness-100 transition-colors ease-linear duration-300"
          src={src}
          width={width}
          height={height}
          alt={alt}
        />
      </Link>
    </>
  );
}

export default BotaoMenor;
