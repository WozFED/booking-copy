import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'

const HotelsTemplate = ({data}) =>{
    return (
        <Layout>
          {data.contentfulHotels.name}
        </Layout>
    )
}
export default HotelsTemplate

export const query = graphql`
query($slug: String, $locale: String) {
  contentfulHotels(slug: { eq: $slug }, node_locale: { eq: $locale }) {
    name
    slug
    node_locale
  }
}

  
`