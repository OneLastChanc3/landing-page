import React from 'react'

const Navbar = () => {
  return (
           <nav>
        <ul className='flex gap-6'>
          <li>
            <a className='hover:text-teal-200'  href="#">
              Features
            </a>
          </li>
          <li>
            <a className='hover:text-teal-200' href="#">
              Team
            </a>
          </li>
          <li>
            <a className='hover:text-teal-200' href="#">
              Sing in
            </a>
          </li>
        </ul> 
      </nav>
  )
}

export default Navbar
