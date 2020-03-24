import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import MainHero from '../components/MainHero'
import PostFeed from '../components/PostFeed'
import Helmet from 'react-helmet'

export default function index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Vitau</title>
        <link rel="canonical" href="https://blog.vitau.mx" />
      </Helmet>
      
      <HomeLayout>
        <MainHero />
        <PostFeed />
      </HomeLayout>
    </>
  )
}
