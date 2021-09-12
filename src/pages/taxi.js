import React from "react"
import Layout from "../components/Layout"
import { FormattedMessage } from "gatsby-plugin-intl"
import {graphql} from 'gatsby'
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"


const Taxi = ({data}) => {
    console.log(data)


  return (
      <Layout blog = {true}>
        <FormattedMessage id = "build" />
      </Layout>
      
  )
}

export default Taxi;

export const query = graphql`

query MyQuery {
    allContentfulBlogPosts {
      nodes {
        name
        background {
          fluid {
            src
          }
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }`