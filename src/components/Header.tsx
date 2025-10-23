import React from 'react'
import Navbar from './Navbar'
const Header = () => {
  return (
    <header className='flex justify-between'> 
      <a href='/'>
        <img className='w-20' src="public/images/logo.svg" alt="logo"></img>
      </a>
      <Navbar/>
    </header>
  )
}

export default Header
