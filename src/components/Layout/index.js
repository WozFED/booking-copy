import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import SEO from "../SEO"

const Layout = ({ children }) => {
  return (
   
    <div>
      <SEO />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
