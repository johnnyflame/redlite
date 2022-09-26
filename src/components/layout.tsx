import * as React from 'react'
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';


import { SocialIcon } from 'react-social-icons';

import { StaticImage } from 'gatsby-plugin-image'



const Layout = ({ pageTitle, children }) => {

  const header =
    <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>

      <Container>
        <div>
          <Navbar.Brand href="/"> <StaticImage
            alt="redlite band logo"
            src="../images/logo.png"
            width={300}
          /></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' />
        <Nav className="me-auto">
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/events'>events</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav>
      </Container>

      <div>
        <SocialIcon url="https://www.instagram.com/redliteband/?hl=en" bgColor='#FFFFFF' />
        <SocialIcon url="https://www.facebook.com/redliteband" bgColor='#FFFFFF' />
        <SocialIcon url="https://www.youtube.com/channel/UCbz_O3jnCLccERCM3BF5X0g" bgColor='#FFFFFF' />
        <SocialIcon url="https://open.spotify.com/artist/2jKjTM6wl6CiHrBakMReOX?si=Yb-_Nyb9Qsq4j2Ua4QCztA" bgColor='#FFFFFF' />
      </div>
    </Navbar>

  return (
    <div >
      {/* <title>{pageTitle}</title> */}

      {header}
      <main>
        {/* <h1 >{pageTitle}</h1> */}
        {children}
      </main>

      <footer className="h-10">

        {/* https://jaketrent.github.io/react-social-icons/ */}

      </footer>
      {/* </div> */}

      {/* <div className="flex flex-col h-screen justify-between">
        <header className="h-10 bg-red-500">Header</header>

        <footer className="h-10 bg-blue-500">Footer</footer>
      </div> */}

    </div>
  )
}
export default Layout 