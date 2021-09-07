import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import Hotels from "../components/Hotels"
import Options from "../components/Options"
import Img from "gatsby-image"
import produce from "immer"
import { Icon } from "@iconify/react"
import { navigate } from "gatsby"
import Pager from "../components/Pager"
import Loader from "react-loader-spinner"
import Loading from "../components/Loader"

const TownTemplate = ({ data, pageContext }) => {
  const [loading, setLoading] = useState(false)
  console.log(pageContext)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6)
  const [hotel, setHotel] = useState(data.polish.nodes)
  useEffect(()=>{
    const fetchPosts = () =>{
      if(window.location.pathname.includes('pl')){
      setHotel(data.polish.nodes)
    }
    else {
      setHotel(data.english.nodes)
    }
    }
    fetchPosts()
  },[]);


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

  const hotelsFilter = hotel.filter(item =>
    isChecked.some(item => item === true)
      ? arrFil.includes(item.grade)
      : item
  ).sort((a, b) => b.grade - a.grade)
  const currentHotels = hotelsFilter.slice(indexOfFirstPost, indexOfLastPost)


  const paginate = (pageNumber) => {
    setLoading(true)
    setTimeout(() => {
      setCurrentPage(pageNumber) 
      window.scrollTo(0, 0)
      setLoading(false)
    }, 700);
 
  }

  return (
    <Layout>
      <div className="hotels">
        <div className="links">
          <div className="links__wrapper">
            <Link to="/" className="nostyle">
              <p>Stronga główna </p>
            </Link>
            <Icon
              icon="ic:baseline-greater-than"
              style={{ fontSize: "12px" }}
            />
            <Link to="/" className="nostyle">
              <p>Polska </p>
            </Link>
            <Icon
              icon="ic:baseline-greater-than"
              style={{ fontSize: "12px" }}
            />
            <Link to="/" className="nostyle">
              <p>{pageContext.town}</p>
            </Link>
            <Icon
              icon="ic:baseline-greater-than"
              style={{ fontSize: "12px" }}
            />
            <p style={{ color: "#0071c2" }}>wyniki wyszukiwania</p>
          </div>
        </div>
        <Options inputFunction={inputFunction} section = {true} />
        
        <Hotels hotel={currentHotels} arrFil={arrFil} isChecked={isChecked} currentPage = {currentPage}
        postsPerPage = {postsPerPage} totalPosts = {hotelsFilter.length} paginate = {paginate}
        town = {pageContext.town} loading = {loading}/> 
        
       
      </div>
      <div className = "footer">
        <div className = "footer__contact">
          <h2>Oszczędzaj czas i pieniądze!</h2>
          <p>Zaprenumeruj nasz biuletyn, a będziemy przesyłać Ci najlepsze oferty</p>
          <div className = "footer__text">
            <input type = 'text' className ="input-text" placeholder = 'Adres mailowy'></input>
            <button className = 'button-footer'>Zaprenumeruj</button><label>
             
          <input type ='checkbox' className = 'input-checkbox'></input>
             Wyślij mi link do pobrania BEZPŁATNEJ aplikacji Booking.com!
          </label>
          
          </div>
         
        </div>
      </div>
    </Layout>
  )
}

export default TownTemplate
export const query = graphql`
query HotelList($slug: String) {
  polish: allContentfulHotels(filter: {node_locale: {eq: "pl"}, parentSlug: {eq: $slug}}){
     nodes {
      name
      slug
      grade
      town
      parentSlug
      node_locale
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
  english: allContentfulHotels(filter: {node_locale: {eq: "en"}, parentSlug: {eq: $slug}}){
    nodes {
     name
     slug
     grade
     town
     parentSlug
     node_locale
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
