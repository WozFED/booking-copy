import { graphql, Link } from "gatsby"
import React, { useState, useEffect} from "react"
import Layout from "../components/Layout"
import "../styles/themes/default/theme.scss"
import SearchHotels from "../components/SearchHotels"
import Towns from "../components/Towns"
import CarouselPhoto from "../components/CarouselPhoto"
import InspirationPosts from "../components/InspirationPosts"

const IndexPage = ({ data }) => {
  console.log(data)
  const [test, setTest] = useState([])
  const arraySlugs = data.towns.nodes
  const slugArray = arraySlugs.map(el => el.slug)
  let newArray = []
  const pushTherray = el => {
    
    if (localStorage.getItem(el) === el) {
      return
    }
    localStorage.setItem(el, el)
    setTest([...test, localStorage.getItem(el)])
  }

  const deleteItem = el => {
    localStorage.removeItem(el)
    let filteredArr = test.filter(el => el === localStorage.getItem(el))
    setTest(filteredArr)
  }

  useEffect(() => {
    let timer1 = setTimeout(
      () =>
        setTest(
          [
            ...test,
            slugArray.filter(el => el === localStorage.getItem(el)),
          ].flat()
        ),
      200
    )
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <Layout >
      <div className = "homepage">
      <SearchHotels />
      <CarouselPhoto 
      array = {data.categories.nodes}
      section = {'category'}/>
      <Towns
        towns={data.towns.nodes.filter(el => el.slug !== null)}
        test={test}
        pushTherray={pushTherray}
      />
      
      <CarouselPhoto 
      array = {data.towns.nodes.sort( () => .5 - Math.random() )}
      section = {'poland'}/>
      <InspirationPosts posts = {data.posts.nodes}/></div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    towns: allContentfulTowns(filter: { node_locale: { eq: "pl" } }) {
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
    
    categories: allContentfulCateogories(filter: { node_locale: { eq: "pl"} }) {
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
    posts: allContentfulBlogPosts(filter: { node_locale: { eq: "pl"} }) {
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
