import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
          <p>Ass kicking rock band from Stockholm, Sweden </p>
          <StaticImage
        alt="redlite band logo"
        src="../images/redlite02_neon.png"
          />
          <StaticImage
        alt="crowd"
        src="../images/crowd.jpeg"
      />
    </Layout>
  )
}
 
export default IndexPage