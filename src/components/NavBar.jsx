import React from 'react'
import CartWidget from './CartWidget';
import '../stylesheets/NavBar.css';



const NavBar = () => {
  return (

    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
<img className='h-6' src={require('../img/guitar.png')} alt='guitarra'/>
      <span className="ml-3 text-xl">INSTRUMENTOS MUSICALES</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href='/'>Home</a>
      <a className="mr-5 hover:text-gray-900" href='/'>Guitarras</a>
      <a className="mr-5 hover:text-gray-900" href='/'>Bajos</a>
      <a className="mr-5 hover:text-gray-900" href='/'>Baterias</a>
      <a className="mr-5 hover:text-gray-900" href='/'>Accesorios</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><CartWidget/>
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default NavBar;