import { graphql, Link } from 'gatsby'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import '../styles/themes/default/theme.scss'
import SearchHotels from '../components/SearchHotels'
import Towns from '../components/Towns'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"




const IndexPage = ({data}) => {
  return(
    <Layout>
      <SearchHotels />
      <Towns towns = {data.allContentfulTowns.nodes} />
    </Layout>
  )
  
}
  

export default IndexPage


export const query = graphql`
  query MyQuery($locale: String) {
    allContentfulTowns(filter: { node_locale: { eq: $locale } }) {
    nodes {
      name
      numberOfObject
      slug
      background {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}
`