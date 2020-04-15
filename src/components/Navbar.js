import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className='navbar is-transparent'
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='container'>
          <div className='navbar-brand'>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className='navbar-start has-text-centered'>
              <a className='navbar-item' href='https://vitau.mx/productos'>
                Tienda
              </a>
            </div>
            <div className='navbar-end has-text-centered'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://instagram.com/vitau.mx'
              >
                <FontAwesomeIcon icon={faInstagram} size='2x' />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://facebook.com/vitau.mx'
              >
                <FontAwesomeIcon icon={faFacebook} size='2x' />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://twitter.com/farmaciavitau'
              >
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://linkedin.com/company/vitaumx'
              >
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
