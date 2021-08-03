import { graphql, Link } from 'gatsby'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import '../styles/themes/default/theme.scss'



const IndexPage = ({data}) => {
  return(
    <Layout>
      <h1>Strona główna</h1>
      <div className = 'test'>KRAKÓW</div>
      <div className = 'test'>Ustka</div>
      <div className = 'test'>Warszawa</div>
      <div className = 'test'>Toruń</div>
    </Layout>
  )
  
}
  

export default IndexPage

export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      author
      title
    }
  }
}
`