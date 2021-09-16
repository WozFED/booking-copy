import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import SEO from "../SEO"

const Layout = ({ children, blog }) => {
  return (
   
    <>
      <SEO />
      <Header blog={blog} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
