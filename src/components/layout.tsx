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
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <div >
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
              <Link to="/music">EVENTS</Link></li>

            <li className={navLinkItem}>
              <Link to="/music">CONTACT</Link></li>

          </ul>
        </nav>
      </div>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <SocialIcon url="https://www.instagram.com/redliteband/?hl=en" />
      <SocialIcon url="https://www.facebook.com/redliteband" />

    </div>
  )
}
export default Layout 