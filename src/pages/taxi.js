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
         <div style = {{width: '100%', height: '300px'}}>
           <BackgroundImage style = {{width: '100%', height: '100%', backgroundSize: 'cover'}} fluid = {data.allContentfulBlogPosts.nodes[0].background.fluid} />
         </div>
         
         <div className = "article">
           <div className = "article__wrapper">
             <div dangerouslySetInnerHTML={{__html: data.allContentfulBlogPosts.nodes[0].description.childMarkdownRemark.html}} />
            </div>
          
          </div>
         
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