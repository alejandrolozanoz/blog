import React from 'react'
import { Link } from 'gatsby'
import SocialMedia from '../components/SocialMedia'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-info'>
        <div className='footer-brand'>
          <a className='footer-logo' href='/'>
            <img src='/img/vitau-logo-white.svg' alt='Vitau' />
          </a>

          <p className='footer-direction'>
            Av. de la Industria 300, Punto Central, CP 66279 San Pedro Garza
            García, N.L.
          </p>
        </div>

        <div className='footer-contact'>
          <SocialMedia isWhite />

          <span className='title--small'>Llámanos</span>

          <a
            className='footer-tel'
            href='https://wa.me/525550180585?text=Estoy%20interesado,%20me%20podrían%20dar%20más%20información'
          >
            (55) 5018 0585
          </a>
        </div>
      </div>

      <div className='footer-legals'>
        <p>© 2019 Vitau. Todos los derechos reservados.</p>

        <Link className='link' to='/terminos-condiciones'>
          Términos y condiciones
        </Link>
        <Link className='link' to='/aviso-privacidad'>
          Aviso de privacidad
        </Link>
      </div>
    </footer>
  )
}
