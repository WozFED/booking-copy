import { graphql } from "gatsby"
import loadable from '@loadable/component'
import React, { useState, useEffect, lazy, Suspense } from "react"
import Layout from "../components/Layout"
import "../styles/themes/default/theme.scss"
import InspirationPosts from "../components/InspirationPosts"


const CarouselPhoto = lazy(()=> import('../components/CarouselPhoto'))
const SearchHotels = lazy(()=> import('../components/SearchHotels'))
const Towns = lazy(() => import('../components/Towns'))


const IndexPage = ({ data }) => {
  const towns = data.towns.nodes
  const [filteredTown, setFilteredTown] = useState(towns)


  const filterArrayFunction = (towns) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(towns.filter(el => el.slug !== null).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
      }, 50)
    })
  }

  useEffect(()=>{
    filterArrayFunction(towns).then(array => setFilteredTown(array))
  },[data])

  return (
    <Layout>
      <Suspense fallback = {<div>Loading...</div>}>
        
      <div className="homepage">
        
        <SearchHotels />
        <CarouselPhoto array={data.categories.nodes} section={"category"} />
        <Towns
          towns={filteredTown}
        />

        <CarouselPhoto
          array={data.towns.nodes.sort(() => 0.5 - Math.random())}
          section={"poland"}
        />
        <InspirationPosts posts={data.posts.nodes} />
      </div>
      </Suspense>
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
          fluid(maxWidth: 100) {
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
