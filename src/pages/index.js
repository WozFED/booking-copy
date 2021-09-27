import { graphql } from "gatsby"
import loadable, { loadableReady } from '@loadable/component'
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
  const [filteredTown, setFilteredTown] = useState(towns)
  const [carouselTowns, setCarouselTown] = useState(towns)

  const filterArrayFunction = (towns) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(towns.filter(el => el.slug !== null).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
      }, 200)
    })
  }

  const filterCarouselPhoto = (towns) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(towns.sort(() => 0.5 - Math.random()))
      }, 500);
    })
  }

  useEffect(()=>{
    filterArrayFunction(towns).then(array => setFilteredTown(array))
    filterCarouselPhoto(towns).then(array => setCarouselTown(array))
  },[data])
  

  return (
    <Layout>
        
      <div className="homepage">
        
        <SearchHotels />
        <CarouselPhoto array={categories} section={"category"} />
        <Towns
          towns={filteredTown}
        />

        <CarouselPhoto
          array={carouselTowns}
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
