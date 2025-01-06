import React from 'react'

function Loading() {
  return (
    <div className=''>
      <div className="flex gap-2 items-center">
        <h1>carregando</h1>
        <div className='w-5 h-5 border-2 border-t-title border-b-title border-r-title rounded-full animate-spin bg-transparent '></div>
        
      </div>
    </div>
  )
}

export default Loading