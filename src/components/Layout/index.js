import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import SEO from "../SEO"

const Layout = ({ children, blog }) => {
  return (
   
    <div>
      <SEO />
      <Header blog = {blog}/>
      {children}
      <Footer />
     
    </div>
  )
}

export default Layout
