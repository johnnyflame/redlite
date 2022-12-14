import * as React from 'react'
import { Nav, Navbar, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../components/logo.png"




import { SocialIcon } from 'react-social-icons';




const Layout = ({ pageTitle, children }) => {

  const header =
    <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark' className="justify-content-center">
      <Container>
        <Navbar.Brand href="/"> <img src={logo} width={300} alt="redlite_band_logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/#about'>About</Nav.Link>
            <Nav.Link href='/#music'>Music</Nav.Link>
            {/* <Nav.Link href='/#events'>Events</Nav.Link>
            <Nav.Link href='/#contact'>Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

        <div>
          <SocialIcon url="https://www.instagram.com/redliteband/?hl=en" bgColor='#FFFFFF' />
          <SocialIcon url="https://www.facebook.com/redliteband" bgColor='#FFFFFF' />
          <SocialIcon url="https://www.youtube.com/channel/UCbz_O3jnCLccERCM3BF5X0g" bgColor='#FFFFFF' />
          <SocialIcon url="https://open.spotify.com/artist/2jKjTM6wl6CiHrBakMReOX?si=Yb-_Nyb9Qsq4j2Ua4QCztA" bgColor='#FFFFFF' />
          <SocialIcon url="johnnyflamelee@gmail.com" bgColor='#FFFFFF' />
        </div>
      </Container>
    </Navbar >

  return (
    <div   >
      <title>{pageTitle}</title>
      {header}
      <main>
        {children}
      </main>
      {header}
    </div >
  )
}
export default Layout
