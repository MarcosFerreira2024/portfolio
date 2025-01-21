"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface iProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  classes?: string;
  src: string;
  alt: string;
  download?: string;
}



function BotaoMaior({
  label,
  href = "",
  download,
  classes,
  src,
  alt,

  
  ...props
}: iProps) {
  const styles = `${classes} sombraBotao hover:bg-slate-950  hover:text-slate-50 dark:hover:text-slate-950   dark:hover:bg-title text-subtitle font-subtitle border-title hover:border-title dark:border-title border-[2px] rounded-[7.5px] h-[39px]`;
  const [tooltip,setTooltip]= useState<boolean>(false)

  return (
    <Link
      download={download}
      {...props}
      data-tooltip={alt}
      href={href}
      aria-label={label}
      onMouseEnter={()=> setTooltip(true)}
      onMouseLeave={()=> setTooltip(false)}
      onClickCapture={()=> setTooltip(false)}
     
      className={`${styles} ${tooltip?"tooltip":""} group  transition-colors ease-linear duration-[300ms] items-center px-2 flex`}
      
    >
      <h1>{label}</h1>
      <Image
        className={`dark:group-hover:brightness-0 dark:brightness-100 brightness-0 group-hover:brightness-100  max-h-[18px] transition-colors ease-in duration-[150ms]`}
        src={src}
        alt={alt}
        width={18}
        height={18}
      />
    </Link>
  );
}

export default BotaoMaior;
