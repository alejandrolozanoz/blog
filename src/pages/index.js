import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import BlogRoll from '../components/BlogRoll'

export default function index() {
  return (
    <HomeLayout>
      <main className="main">
        <h1 className="title">Tu salud es nuestra prioridad</h1>
        <h2>
          Salud, nutrición, hábitos, cuidado personal y más maneras de ser la
          mejor versión de nosotros mismos.
        </h2>
      </main>

      <section>
        <BlogRoll />
      </section>
    </HomeLayout>
  )
}
