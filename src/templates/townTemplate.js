import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Hotels from "../components/Hotels"
import Options from "../components/Options"
import produce from "immer"
import { Icon } from "@iconify/react"
import Links from "../components/Links"

const TownTemplate = ({ data, pageContext }) => {
  const [loading, setLoading] = useState(false)
  console.log(pageContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)
  const hotel = data.allContentfulHotels.nodes
  

  const [isChecked, setIsChecked] = useState([false, false, false])
  const [arrFil, setArrFil] = useState([])
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

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const hotelsFilter = hotel
    .filter(item =>
      isChecked.some(item => item === true) ? arrFil.includes(item.grade) : item
    )
    .sort((a, b) => b.grade - a.grade)
  const currentHotels = hotelsFilter.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => {
    setLoading(true)
    setTimeout(() => {
      setCurrentPage(pageNumber)
      window.scrollTo(0, 0)
      setLoading(false)
    }, 700)
  }

  return (
    <Layout>
      <div className="hotels">
        <Links hotel = {hotel}
                town = {pageContext.town}/>
        <Options
          inputFunction={inputFunction}
          town={pageContext.town}
          section={true}
        />

        <Hotels
          hotelLength = {hotel.length}
          hotel={currentHotels}
          arrFil={arrFil}
          isChecked={isChecked}
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={hotelsFilter.length}
          paginate={paginate}
          town={pageContext.town}
          loading={loading}
        />
      </div>
    </Layout>
  )
}

export default TownTemplate
export const query = graphql`
  query ($slug: String, $locale: String) {
    allContentfulHotels(
      filter: { node_locale: { eq: $locale }, parentSlug: { eq: $slug } }
    ) {
      nodes {
        name
        slug
        grade
        town
        ratings 
        opinions
        parentSlug
        node_locale
        shortdescription {
          shortdescription
        }
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
