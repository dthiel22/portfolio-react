import React from 'react'
import "./style.css"

export default function Portfolio() {
  return (
    <div className="Portfolio // h-fit md:h-screen grid grid-cols-12 bg-color-primary">

      <div className="flex w-full justify-center col-span-2 md:col-span-1 bg-color-primary relative">
        <div className='grid grid-row-1 gap-4 p-6 h-fit bg-color-primary'>
          <a id='github' href='https://github.com/dthiel22' target='_blank'></a>
          <a id='linkedin' href='#' target='_blank'></a>  
        </div>
        <line className='flex h-[80%] md:h-[80%] lg:h-[80%] w-1 border-2 bg-black border-black absolute bottom-0'>
        </line>
      </div>

      <div className="grid grid-cols-1 h-fit p-6 gap-6 md:grid-cols-2 lg:grid-cols-3 col-span-10"> 

        <a href='https://gloomhaven-helper-deluxe.herokuapp.com/' target="_blank" id="project1" className='project border-4 border-color-project'>
          <div className='project-name // top-[60%] md:top-[65%] bg-color-project'>
            <div className='flex flex-row items-center'>
              <p className='text-xl font-semibold pr-2'>Gloomhaven Helper</p>
              <a href='https://github.com/Mattdack/gloomhaven-helper' target="_blank" className='project-git'></a>
            </div>
            <p className='text-sm'>HTML, JavaScript, SQL</p>
          </div>
        </a>

        <a href='https://tkmarsten.github.io/lyricalletho/' target="_blank" id="project2" className='project border-4 border-color-project'>
          <div className='project-name // top-[60%] md:top-[65%] bg-color-project'>
            <div className='flex flex-row items-center'>
              <p className='text-xl font-semibold pr-2'>Lyrical Letho</p>
              <a href='https://github.com/tkmarsten/lyricalletho' target="_blank" className='project-git'></a>
            </div>
            <p className='text-sm'>HTML and Javascript</p>
          </div>
        </a>

        <a href='https://dthiel22.github.io/weather-app/?#' target="_blank" id="project3" className='project border-4 border-color-project'>
          <div className='project-name // top-[60%] md:top-[65%] bg-color-project'>
            <div className='flex flex-row items-center'>
              <p className='text-xl font-semibold pr-2'>Weather app</p>
              <a href='https://github.com/dthiel22/weather-app' target="_blank" className='project-git'></a>
            </div>
            <p className='text-sm'>HTML and Javascript</p>
          </div>
        </a>

      </div>
      

      <div className="hidden md:inline-flex flex w-full justify-center col-span-2 md:col-span-1 bg-color-primary relative">
        <p className='text-lg p-6 rotate-90 absolute top-20'>dthiel22@gmail.com</p>
        <line className='flex h-[70%] lg:h-[70%] w-1 border-2 bg-black border-black absolute bottom-0'>
        </line>
      </div>
    </div>
  )
}
