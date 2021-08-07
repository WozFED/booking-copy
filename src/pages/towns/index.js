import React from 'react'
import Layout from '../../components/Layout';
import {graphql} from 'gatsby'

const Towns = ({data}) => {
    const hotels = data.allMarkdownRemark.nodes
    console.log(hotels[0])
    return (
        <Layout>
            <h2>Znaleziono tyle obiektów</h2>
            
        </Layout>
        
    )
}

export default Towns;

export const query = graphql`
query Hotels {
    allMarkdownRemark(filter: {}) {
      nodes {
        frontmatter {
          name
          price
          slug
          title
        }
      }
    }
  }
`