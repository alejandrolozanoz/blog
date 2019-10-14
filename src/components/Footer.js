import React from 'react'
import { Link } from 'gatsby'
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import logoFooter from '../img/footer-logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="footerMid">
          <div className="container">
            <div className="columns">
              <div className="column is-3"  >
                <Link to="/">
                  <Image
                    className="vitau-logo"
                    alt="vitau-logo"
                    width="140"
                    height="50"
                    src={logoFooter}
                    fluid
                  />
                </Link>

                <p className="footerElement">
                  Somos una farmacia inteligente que te envia tus medicamentos mensualmente. Además te
                  podemos ayudar con el reembolso del seguro. Subscríbete y no vuelvas a perder el
                  tiempo en la farmacia o realizando trámites.
                </p>
              </div>
              <div className="column is-3">
                <h5>¿Quién eres?</h5>
                <ul className="faList">
                  <li>
                    <a href="/">Paciente</a>
                  </li>
                  <li>
                    <a href="/">Agente de Seguros</a>
                  </li>
                  <li>
                    <a href="/">Empresa</a>
                  </li>
                  <li>
                    <a href="/">Aseguradora</a>
                  </li>
                  <li>
                    <a href="/">Doctor</a>
                  </li>
                </ul>
              </div>
              <div className="column is-3">
                <h5>Compañia</h5>
                <ul className="faList">
                  <li>
                    <a href="/">Términos y Condiciones</a>
                  </li>
                  <li>
                    <a href="/">Aviso de Privacidad</a>
                  </li>
                  <li>
                    <a href="/">Otras Medicinas</a>
                  </li>
                  <li>
                    <a href="/">Reclutamiento</a>
                  </li>
                  <li>
                    <a href="/">Contacto</a>
                  </li>
                </ul>
              </div>
              <div className="column is-3">
                <h5>Contacto</h5>

                <ul className="faList">
                  <li className="faListItem">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <a
                      href="https://wa.me/525550180585?text=Estoy%20interesado,%20me%20podrían%20dar%20más%20información?"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ‭ &nbsp;(55) 5018 0585‬
                    </a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <a href="tel:018001200399"> &nbsp;01 (800) 1200 399</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:hola@vitau.mx"> &nbsp;hola@vitau.mx</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHome} />
                    <a
                      href="https://www.google.com/maps/place/WeWork/@25.6701363,-100.3815761,17z/data=!3m1!4b1!4m5!3m4!1s0x8662bd433c7eeded:0xf886fc48ba2e5ab5!8m2!3d25.6701363!4d-100.3793874"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="span">
                        Blvd. Antonio L. Rodríguez 1888 Piso 5 Oficina 107
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="container">
            <div className="columns">
              <div className="column is-6 footerDiv derechosReservados">
                © 2019 Vitau. Todos los derechos reservados.
              </div>
              <div className="column is-6 footerDiv socialIcons">
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/vitaumedical">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/vitaumedical">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/vitaumedical">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/company/vitaumedical">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
