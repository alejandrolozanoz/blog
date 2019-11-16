import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import MainHero from '../components/MainHero'
import PostFeed from '../components/PostFeed'

export default function index() {
  return (
    <HomeLayout>
      <MainHero />

      <PostFeed />
    </HomeLayout>
  )
}
