import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import Hotels from "../components/Hotels"
import Options from "../components/Options"
import Img from "gatsby-image"

const TownTemplate = ({ pageContext, data }) => {
  const hotel = data.contentfulTowns.hotels1
  console.log(data.contentfulTowns.hotels1[0].description)
  return (
    <Layout>
      <div className="hotels">
        <Options />
        <Hotels hotels = {hotel}
                town = {data.contentfulTowns.name}/>
        </div>
    </Layout>
  )
}
export default TownTemplate

export const query = graphql`
  query ContentFulPost($slug: String, $locale: String) {
    contentfulTowns(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      slug
      node_locale
      name
      hotels1 {
        slug
        town
        name
        node_locale
        description {
          description
        }
        photos {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        background {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
