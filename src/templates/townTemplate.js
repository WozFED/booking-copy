import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import Hotels from "../components/Hotels"
import Options from "../components/Options"
import Img from "gatsby-image"
import produce from "immer"

const TownTemplate = ({ data }) => {
  console.log(data.allContentfulHotels)
  const hotel = data.allContentfulHotels.nodes
  const [isChecked, setIsChecked] = useState([false, false, false])
  const [arrFil, setArrFil] = useState([])
  const town = data.allContentfulHotels.nodes[0].town
  const inputFunction = (el, id) => {
    setIsChecked(isChecked =>
      produce(isChecked, isChecked => {
        isChecked[id] = !isChecked[id]
      })
    )
    if (isChecked[id] === false) {
      setArrFil([...arrFil, el])
    } else {
      let newArray = arrFil.filter(item => item !== el)
      setArrFil(newArray)
    }
  }

  return (
    <Layout>
      <div className="hotels">
        <Options inputFunction={inputFunction}
                  town = {town} />
        <Hotels hotel={hotel} arrFil={arrFil} isChecked={isChecked} />
      </div>
    </Layout>
  )
}

export default TownTemplate
export const query = graphql`
  query ($limit: Int!, $skip: Int!, $locale: String, $parentSlug: String) {
    allContentfulHotels(
      filter: { node_locale: { eq: $locale }, parentSlug: { eq: $parentSlug } }
      sort: { fields: contentful_id, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        name
        slug
        grade
        town
        description {
          description
        }
        background {
          fluid {
            src
          }
        }
      }
    }
  }
`
