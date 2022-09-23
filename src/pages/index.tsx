import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Energetic hard rock band from Stockholm, Sweden </p>
      <StaticImage
        alt="redlite band"
        src="../images/band.jpg"
      />

      <StaticImage
        alt="crowd"
        src="../images/crowd.jpeg"
      />
    </Layout>
  )
}

export default IndexPage