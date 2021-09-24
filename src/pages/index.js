import { graphql } from "gatsby"
import loadable from '@loadable/component'
import React, { useState, useEffect} from "react"
import Layout from "../components/Layout"
import "../styles/themes/default/theme.scss"
import CarouselPhoto from '../components/CarouselPhoto'
import SearchHotels from "../components/SearchHotels"
import Towns from "../components/Towns"
import InspirationPosts from "../components/InspirationPosts"

const IndexPage = ({ data }) => {
  const towns = data.towns.nodes
  const categories = data.categories.nodes
  

  return (
    <Layout>
        
      <div className="homepage">
        
        <SearchHotels />
        <CarouselPhoto array={categories} section={"category"} />
        <Towns
          towns={towns}
        />

        <CarouselPhoto
          array={towns}
          section={"poland"}
        />
        <InspirationPosts posts={data.posts.nodes} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($locale: String) {
    towns: allContentfulTowns(filter: { node_locale: { eq: $locale } }) {
      nodes {
        name
        amount
        slug
        photo {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    
    categories: allContentfulCateogories(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        node_locale
        photo {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid
          }
        }
        name
        amount
      }
    }
    posts: allContentfulBlogPosts(filter: { node_locale: { eq: $locale } }) {
      nodes {
        background {
          fluid(maxWidth: 300) {
            ...GatsbyContentfulFluid
          }
        }
        name
        node_locale
        paragraph
        slug
      }
    }
  }
`
