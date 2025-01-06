import Image from "next/image";
import Link from "next/link";
import React from "react";
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
  return (
    <>
      <Link
        href={href}
        target="_blank"
        className={`${classes}    transition-all w-[39px] h-[39px] group border-purple-700 dark:border-title border-[2px]   rounded-[7.5px] flex items-center justify-center   dark:bg-transparent hover:bg-purple-600   ease-linear duration-300`}
        {...props}
      >
        <Image
          className="group-hover:invert  dark:invert-0 dark:brightness-100 group-hover:brightness-0 transition-colors ease-linear duration-300"
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
