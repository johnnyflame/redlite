import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
} from './layout.module.css'
import { SocialIcon } from 'react-social-icons';

import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {

  const header = <header >
    <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
      <div className="flex flex-shrink-0 text-white mr-6">
        <StaticImage
          alt="redlite band logo"
          src="../images/logo.png"
        />
      </div>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/">HOME</Link></li>
        <li className={navLinkItem}>
          <Link to="/about">BIO</Link></li>

        <li className={navLinkItem}>
          <Link to="/events">EVENTS</Link></li>

        <li className={navLinkItem}>
          <Link to="/contact">CONTACT</Link></li>

      </ul>
    </nav>
  </header>
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <div className="flex flex-col h-screen justify-between">

        {header}
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>

        <footer className="h-10">

          {/* https://jaketrent.github.io/react-social-icons/ */}
          <SocialIcon url="https://www.instagram.com/redliteband/?hl=en" />
          <SocialIcon url="https://www.facebook.com/redliteband" />
        </footer>
      </div>

      {/* <div className="flex flex-col h-screen justify-between">
        <header className="h-10 bg-red-500">Header</header>

        <footer className="h-10 bg-blue-500">Footer</footer>
      </div> */}

    </div>
  )
}
export default Layout 