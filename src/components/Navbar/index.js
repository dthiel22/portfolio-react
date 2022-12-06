import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='Navbar // h-20 flex items-center justify-between bg-color-tertiary'>
      <div className='flex justify-start'>
        <h1 className="mx-4">Alex Thiel</h1>
      </div>
      <div className='flex justify-end'>
        <Link to="/" className="mx-4">About Me</Link>
        <Link to="/portfolio" className="mx-4">Portfolio</Link>
        <Link to="/contact" className="mx-4">Contact</Link>
        <Link to='/resume'className="mx-4">Resume</Link>
      </div>
    </div>
  )
}
