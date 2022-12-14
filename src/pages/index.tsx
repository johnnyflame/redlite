import * as React from 'react'
import Layout from '../components/layout'
import Spotify from 'react-spotify-embed'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Stack from 'react-bootstrap/Stack';





const IndexPage = () => {




  return (
    <Layout pageTitle="RËDLITE OFFICIAL">
      <Container fluid className='gx-0' id='/'>
        <Stack gap={3}>
          <img
            alt="redlite_band"
            src="/images/band.jpg"
          />

          <Container>
            <Row>
              <h1 className='font-mono text-center' id="about">About</h1>
            </Row>
            <Row className="font-mono">
              Next in the long line of talents pouring out of Sweden, RËDLITE is here to kick a dormant sleaze society back into gear! Stemming inspirations from the 80s Rock N' Roll era where it was all about hairspray, dirty riffs and good times, the band is the genre through and through. With catchy riffs and an energetic live performance, Redlite comes crashing in to get the party rolling!
            </Row>

          </Container>
          <Container>
            <Row>
              <h1 className='font-mono text-center' id="music">Music</h1>
            </Row>
            <Row>
              <Spotify link="https://open.spotify.com/track/4VmUco14SUtJjD62JAjKDn?si=2594ae74d75b4797" />
              <iframe src="https://open.spotify.com/embed/artist/2jKjTM6wl6CiHrBakMReOX?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </Row>
          </Container>

        </Stack>
      </Container>
    </Layout >
  )
}

export default IndexPage