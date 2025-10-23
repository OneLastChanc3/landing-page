import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between'> 
      <a href='/'>
        <img className='w-20' src="public/images/logo.svg" alt="logo"></img>
      </a>
      <nav>
        <ul className='flex gap-6'>
          <li>
            <a className='hover:font-bold'  href="#">
              Features
            </a>
          </li>
          <li>
            <a className='hover:font-bold' href="#">
              Team
            </a>
          </li>
          <li>
            <a className='hover:font-bold' href="#">
              Sing in
            </a>
          </li>
        </ul> 
      </nav>
    </header>
  )
}

export default Header
