import React from 'react'
import { Link } from 'gatsby'
import SocialMedia from '../components/SocialMedia'

export default function Header() {
  return (
    <header className='header'>
      <a className='header-logo' href='/'>
        <img src='/img/vitau-logo.svg' alt='Vitau' />
      </a>

      <nav className='mainNav'>
        <Link to='/' className='mainNav-link' activeClassName='isActive'>
          Inicio
        </Link>
        <Link
          to='/categorias'
          className='mainNav-link'
          activeClassName='isActive'
        >
          Categorías
        </Link>

        <SocialMedia />
      </nav>
    </header>
  )
}
