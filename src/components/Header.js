import React from 'react'
import {Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <header className='header'>
      <a className='header-logo' href="/">
        <img src="/img/vitau-logo.svg" alt="Vitau"/>
      </a>

      <nav className='mainNav'>
        <Link to="/" className="mainNav-link" activeClassName='isActive'>Inicio</Link>
        <Link to="/categorias" className="mainNav-link" activeClassName='isActive'>Categorías</Link>

        <a className='mainNav-socialIcon' target="_blank" rel="noopener noreferrer" href="https://instagram.com/vitaumedical">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className='mainNav-socialIcon' target="_blank" rel="noopener noreferrer" href="https://facebook.com/vitaumedical">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </nav>
    </header>
  )
}
