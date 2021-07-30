import { graphql, Link } from 'gatsby'
import { nominalTypeHack } from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import '../styles/themes/default/theme.scss'



const IndexPage = ({data}) => {
  console.log(data)
  return(
    <Layout>
      <h1>Strona główna</h1>
      <Link to ='/page-2' style = {{textDecoration: 'none'}}>
        <div className = 'test'><p style = {{color: 'white'}}>Tutaj jest okienko od miasta</p></div>
      </Link>
      
      
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