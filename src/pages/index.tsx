import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Spotify from 'react-spotify-embed'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';



// function BandImageCarousel() {
//   return (<Carousel fade  >
//     <Carousel.Item>
//       <StaticImage
//         alt="redlite band"
//         src="../images/playing_1.jpg"
//         width={1300}
//         height={900}
//       />
//       <Carousel.Caption>
//         <h3>First slide label</h3>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <StaticImage
//         alt="redlite band"
//         src="../images/redlite_03.jpeg"
//         width={1300}
//       // height={900}
//       />
//       <Carousel.Caption>
//         <h3>Second slide label</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <StaticImage
//         alt="redlite band"
//         src="../images/band.jpg"
//         width={1300}
//         height={900}
//       />
//       <Carousel.Caption>
//         <h3>Third slide label</h3>
//         <p>
//           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//         </p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
//   );
// }




const IndexPage = () => {




  return (
    <Layout pageTitle="RËDLITE OFFICIAL">

      {/* <p>Energetic hard rock band from Stockholm, Sweden </p> */}
      <Container fluid className='gx-0'>
        <Stack gap={3}>
          <StaticImage
            alt="redlite band"
            src="../images/band.jpg"
          />

          <Container>
            <Row>
              <h1 className='font-mono text-center'>About</h1>
            </Row>
            <Row>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo facere id perspiciatis sequi ipsa nisi ex sapiente minus, a laudantium dicta porro quo magnam sunt pariatur. Quidem nostrum exercitationem repellendus dolorem aliquid non autem assumenda nesciunt consequatur inventore? Consectetur aliquam dolorum at dicta ad, ipsum vitae soluta quidem expedita, quas magnam neque laudantium ab nesciunt. Recusandae quo rem dolorum veniam ullam tenetur in sed delectus consequatur, provident enim repudiandae neque expedita inventore maxime maiores eveniet corrupti eum? Voluptatum neque, repellendus quis voluptas deleniti temporibus natus laborum perferendis vero consectetur impedit! Suscipit harum inventore necessitatibus porro accusantium? Consequatur esse laborum cum?
            </Row>

          </Container>


          <Container>
            <Row>
              <h1 className='font-mono text-center'>Our Music</h1>
            </Row>
            <Row>
              <Spotify link="https://open.spotify.com/track/4VmUco14SUtJjD62JAjKDn?si=2594ae74d75b4797" />

            </Row>

            <iframe src="https://open.spotify.com/embed/artist/2jKjTM6wl6CiHrBakMReOX?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          </Container>



        </Stack>
      </Container>
    </Layout >
  )
}

export default IndexPage