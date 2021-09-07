import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import React, { useState, useEffect, useCallback } from "react"
import Layout from "../components/Layout"
import "../styles/themes/default/theme.scss"
import SearchHotels from "../components/SearchHotels"
import Towns from "../components/Towns"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import produce from "immer"

const IndexPage = ({ data }) => {
  console.log(data)
  const [test, setTest] = useState([])
  const arraySlugs = data.allContentfulTowns.nodes
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
    <Layout>
      <SearchHotels />
      <Towns
        towns={data.allContentfulTowns.nodes}
        test={test}
        pushTherray={pushTherray}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($locale: String) {
    allContentfulTowns(filter: { node_locale: { eq: $locale } }) {
      nodes {
        name
        numberOfObject
        slug
        background {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
