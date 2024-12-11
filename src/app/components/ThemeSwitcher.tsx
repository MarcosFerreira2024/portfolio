"use client"

import { useTheme } from 'next-themes'
import { HeaderSvgMoon, HeaderSvgSun } from './HeaderSvg'
import { useEffect, useState } from 'react'
function ThemeSwitcher() {
  const { setTheme ,theme, resolvedTheme } = useTheme()
  const [mounted,setMounted] = useState(false)

  useEffect(()=>{
    if (theme){
      setTheme(theme)
    }
    setMounted(true)
  },[theme, setTheme,])

  if (!mounted) {
    return null;
  }

  return resolvedTheme === 'dark' ? (
    <HeaderSvgSun classes="" onClick={() => setTheme('light')} />
  ) : (
    <HeaderSvgMoon classes="" onClick={() => setTheme('dark')} />
  );
}

export default ThemeSwitcher;
