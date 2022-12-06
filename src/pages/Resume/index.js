import React from 'react'
import resume from './resume.pdf'
import "./style.css"

export default function Resume() {
  return (
  <div className="Resume // h-screen grid grid-cols-12 bg-color-primary">

<div className="flex w-full justify-center col-span-2 md:col-span-1 bg-color-primary relative">
      <div className='grid grid-row-1 gap-4 p-6 h-fit'>
      <a id='github' href='https://github.com/dthiel22' target='_blank'></a>
      <a id='linkedin' href='#' target='_blank'></a>  
      </div>
    <line className='flex h-[78%] w-1 border-2 bg-black border-black absolute bottom-0'>
    </line>
  </div>

    <div className='col-span-8 md:col-span-10 place-items-center'>

      <p className='text-center'>I am proficient in:</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit p-6 gap-6 place-items-center"> 
        <div className='flex flex-col col-start-1 col-end-2'>
          <p className='text-center'>Javascript</p>
          <img id='js' className='place-self-center'></img>
        </div>
        <div className='flex flex-col'>
          <p className='text-center'>HTML</p>
          <img id='html' className='place-self-center'></img>
        </div>
        <div className='flex flex-col'>
          <p className='text-center'>CSS</p>
          <img id='css' className='place-self-center'></img>
        </div>
        <div className='flex flex-col'>
          <p className='text-center'>React</p>
          <img id='react' className='place-self-center'></img>
        </div>

    </div>

      <div className='flex justify-center p-6'>
        <a href={resume} download='Resume.pdf' id='resume' className='w-fit p-2 h-fit border bg-color-quatinary '>Download Resume</a>
      </div>

  </div>

  <div className="flex w-full justify-center col-span-2 md:col-span-1 bg-color-primary relative">
        <p className='text-lg p-6 rotate-90 absolute top-20'>dthiel22@gmail.com</p>
        <line className='flex h-[70%] lg:h-[70%] w-1 border-2 bg-black border-black absolute bottom-0'>
        </line>
      </div>
  </div>
  )
}
