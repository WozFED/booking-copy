import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import Hotels from "../components/Hotels"
import Options from "../components/Options"
import Img from "gatsby-image"

const TownTemplate = ({ data }) => {
  console.log(data.allContentfulHotels)
  const hotel = data.allContentfulHotels.nodes

  return (
    <Layout>
      <div className = "hotels">
      <Options />
      <Hotels hotels={hotel} />
    </div>
    </Layout>
    
  )
}
export default TownTemplate
export const query = graphql`
  query ($limit: Int!, $skip: Int!, $locale: String, $parentSlug: String) {
    allContentfulHotels(
      filter: { node_locale: { eq: $locale }, parentSlug: { eq: $parentSlug } }
      sort: { fields: contentful_id, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        name
        slug
        description {
          description
        }
        background {
          fluid {
            src
          }
        }
      }
    }
  }
`
