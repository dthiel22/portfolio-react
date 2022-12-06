import React, {useState} from 'react'
import "./style.css"

export default function Contact() {
  const [emailError, setEmailError] = useState('')
  const [inputNameError, setInputNameError] = useState('')
  const [inputMessageError, setInputMessageError] = useState('')

  const validateEmail = (e) => {
    var email = e.target.value

    const validator = function (email) {
      var isEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      return isEmail.test(email);
    }

    if (validator(email)) {
      setEmailError('Valid email :)')
    } else {
      setEmailError('Please enter a valid email')
    }
  }

  const validateEmptyName = (e) => {
    var value = e.target.value

    if (value === ''){
      setInputNameError('this input is NOT valid')
    }else{
      setInputNameError('this input is valid')
    }
  }

  const validateEmptyMessage = (e) => {
    var value = e.target.value

    if (value === ''){
      setInputMessageError('this input is NOT valid')
    }else{
      setInputMessageError('this input is valid')
    }
  }
  
  return (
  <div className="Home // h-screen grid grid-cols-12 bg-color-primary">

  <div className="flex w-full justify-center col-span-2 md:col-span-1 bg-color-primary relative">
      <div className='grid grid-row-1 gap-4 p-6 h-fit'>
      <a id='github' href='https://github.com/dthiel22' target='_blank'></a>
      <a id='linkedin' href='#' target='_blank'></a>  
      </div>
    <line className='flex h-[78%] w-1 border-2 bg-black border-black absolute bottom-0'>
    </line>
  </div>

  <div className="h-fit p-6 gap-6 md:grid-cols-2 col-span-8 md:col-span-10"> 
        <div className="grid grid-cols-1 col-span-10 h-fit"> 
          <form className='grid grid-cols-1 gap-4 p-4 place-items-start'>
            <p>Name:</p>
            <div className='w-full'> 
              <input className='w-full lg:w-1/2 border-2' onBlur={(e) => validateEmptyName(e)}></input>
              <span style={{
                  fontWeight: 'bold',
                  color: 'red',
                }}>{inputNameError}</span>
            </div>
            <p>Email:</p>
            <div className='w-full'>
              <input type="text" id="userEmail" className='w-full lg:w-1/2 border-2' onBlur={(e) => validateEmail(e)}></input>
              <span style={{
                fontWeight: 'bold',
                color: 'red',
              }}>{emailError}</span>
            </div>
            <p>Message:</p>
            <div className='w-full'> 
              <input className='w-full lg:w-1/2 border-2' onBlur={(e) => validateEmptyMessage(e)}></input>
              <span style={{
                  fontWeight: 'bold',
                  color: 'red',
                }}>{inputMessageError}</span>
            </div>
            <button className='p-1 border border-black'>Submit</button>
          </form>
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

