import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  topbar,
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <div >
        <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">

            <StaticImage
              alt="redlite band logo"
              src="../images/logo.png"
            />
          </div>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/">Home</Link></li>
            <li className={navLinkItem}>
              <Link to="/about">About</Link></li>
            <li className={navLinkItem}>
              <Link to="/music">Music</Link></li>
          </ul>
        </nav>
      </div>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>


    </div>
  )
}
export default Layout 