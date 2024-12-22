import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  const styles = `${classes} hover:bg-purple-600 hover:text-white dark:hover:bg-title text-subtitle font-subtitle border-title hover:border-purple-700 dark:border-title border-[2px] rounded-[7.5px] h-[39px]`;

  return (
    <Link
      download={download}
      {...props}
      href={href}
      className={`${styles} group transition-all ease-linear duration-[300ms] items-center px-2 flex`}
    >
      <h1>{label}</h1>
      <Image
        className="group-hover:invert group-hover:brightness-0 transition-all ease-in duration-[150ms]"
        src={src}
        alt={alt}
        width={18}
        height={18}
      />
    </Link>
  );
}

export default BotaoMaior;
