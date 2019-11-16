import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons'

export default function SocialMedia(props) {
  const { isWhite } = props

  let styles = classNames('socialMedia', {
    'socialMedia--isWhite': isWhite === true,
  })

  return (
    <div className={styles}>
      <a
        className='socialMedia-icon'
        target='_blank'
        rel='noopener noreferrer'
        href='https://instagram.com/vitaumedical'
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        className='socialMedia-icon'
        target='_blank'
        rel='noopener noreferrer'
        href='https://facebook.com/vitaumedical'
      >
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
    </div>
  )
}
