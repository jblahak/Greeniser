import React from 'react'

const Header = () => {
  return(
    <>
      <header>
        <div>
          <ul className="container">
            <li className="supportgreeniser">support@greeniser.fr</li>
            <li>+33 1 65 77 00 98</li>
          </ul>
        </div>
        <nav className="container">
          <a href="/" className="">
            <h1>Greenizer</h1>
          </a>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/">Ma consommation</a>
            </li>
            <li>
              <a href="/">Qui sommes-nous</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;