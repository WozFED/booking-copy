import { graphql } from "gatsby"
import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import "../styles/themes/default/theme.scss"
import SearchHotels from "../components/SearchHotels"
import Towns from "../components/Towns"
import CarouselPhoto from "../components/CarouselPhoto"
import InspirationPosts from "../components/InspirationPosts"

const IndexPage = ({ data }) => {
 

  return (
    <Layout>
      <div className="homepage">
        <SearchHotels />
        <CarouselPhoto array={data.categories.nodes} section={"category"} />
        <Towns
          towns={data.towns.nodes.filter(el => el.slug !== null)}
        />

        <CarouselPhoto
          array={data.towns.nodes.sort(() => 0.5 - Math.random())}
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
          fluid {
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
          fluid {
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
          fluid {
            src
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
