import React from 'react'

const Header = () => {
  return (
    <header>
      <a href='/'>
        <img src="public/images/logo.svg" alt="logo"></img>
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">
              Features
            </a>
          </li>
          <li>
            <a href="#">
              Team
            </a>
          </li>
          <li>
            <a href="#">
              Sing in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
