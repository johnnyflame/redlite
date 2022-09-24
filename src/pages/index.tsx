import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Spotify from 'react-spotify-embed'

const IndexPage = () => {

  const biteMyBullet = <Spotify link="https://open.spotify.com/track/4VmUco14SUtJjD62JAjKDn?si=2594ae74d75b4797" />



  return (
    <Layout pageTitle="Home">
      {/* <p>Energetic hard rock band from Stockholm, Sweden </p> */}
      <StaticImage
        alt="redlite band"
        src="../images/band.jpg"
      />

      <StaticImage
        alt="a crowd"
        src="../images/stage.jpeg"

      />
      {biteMyBullet}

      <iframe src="https://open.spotify.com/embed/artist/2jKjTM6wl6CiHrBakMReOX?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>


    </Layout>
  )
}

export default IndexPage