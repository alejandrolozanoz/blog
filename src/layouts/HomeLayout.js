import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import useSiteMetadata from '../components/SiteMetadata'

import '../styles/app.scss'

export default function HomeLayout({ children }) {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />

      {children}
    </>
  )
}
