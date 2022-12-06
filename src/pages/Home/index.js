import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export default function Home() {
  return (
<div className="Home // h-fit md:h-screen grid grid-cols-12 bg-color-primary">

<div className="flex w-full justify-center col-span-2 md:col-span-1 bg-color-primary relative">
        <div className='grid grid-row-1 gap-4 p-6 h-fit bg-color-primary'>
          <a id='github' href='https://github.com/dthiel22' target='_blank'></a>
          <a id='linkedin' href='#' target='_blank'></a>  
        </div>
        <line className='flex h-[80%] md:h-[80%] lg:h-[80%] w-1 border-2 bg-black border-black absolute bottom-0'>
        </line>
</div>

  <div className="col-span-10 md:flex md:grid-cols-6 h-fit p-6 gap-6"> 
    <div className='flex flex-col font-mono col-span-3 w-full lg:w-[70%]'>
      <p className='text-xl text-color-secondary lg:text-2xl'>Hi, my name is</p>
      <p className='text-7xl text-color-quatinary lg:text-9xl'>Alex Thiel.</p>
      <p className='text-3xl text-color-secondary border-b-2 bm-2 lg:text-4xl'>I build websites and databases for clients.</p>
      <p className='text-2xl text-color-secondary lg:text-3xl'>My number one goal is to create digital spaces that are both functional and represetative of your vision. Browse around my portfolio to see my previous works. I look forward to working together soon.</p>
      <Link to="/portfolio" className="m-4 place-self-center w-fit p-2 border-2 border-color-quatinary bg-color-project">Check Out My Portfolio</Link>
    </div>
      <img id='profile' className='place-content-center m-2 col-span-2 col-start-5 w-80 h-80'></img>
  </div>

  <div className="hidden md:inline-flex flex w-full justify-center col-span-2 md:col-span-1 bg-color-primary relative">
        <p className='text-lg p-6 rotate-90 absolute top-20'>dthiel22@gmail.com</p>
        <line className='flex h-[70%] lg:h-[70%] w-1 border-2 bg-black border-black absolute bottom-0'>
        </line>
  </div>
</div>
  )
}
