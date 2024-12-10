import Image from 'next/image'
import React from 'react'

function Main() {
  return (
    <main className='max-w-container grid grid-cols-2 mx-auto'>
        <div>
            <Image src={`/Main/profile.png`} alt='profile picture' height={300} width={300} />
        </div>
        <div>

        </div>
    </main>
  )
}

export default Main
