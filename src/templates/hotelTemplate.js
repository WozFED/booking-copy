import React, { useContext, useEffect, useState } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { navigate } from "gatsby-plugin-intl"
import Img from "gatsby-image"
import Options from "../components/Options"
import { Icon } from "@iconify/react"
import DateComponent from "../components/DateComponent"
import Opinions from "../components/Opinions"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import OpinionsReview from "../components/OpinionsReview"
import Slider from "react-slick"
import styled from "styled-components"
import Information from "../components/Information"
import Facilities from '../components/Facilities'
import Rules from '../components/Rules'

const Test = styled.div`
  height: ${props => props.height + "px"};
  width: 33%;
  margin: 20px 0;
`

const HotelsTemplate = ({ data }) => {
  const hotel = data.contentfulHotels
  const slug = `/${hotel.parentSlug}/${hotel.slug}`
  const locale = hotel.node_locale
  const photos = data.contentfulHotels.photos
  const morePhotos = photos.concat(photos).concat(photos).concat(photos)
  const headerPhotos = morePhotos.slice(0, 3)
  const footerPhotos = morePhotos.slice(3, 8)
  const [openOpinions, setOpenOpinions] = useState(false)

  const { windowLoc, setWindowLoc } = useContext(GlobalStateContext)
  const showOpinion = () => {
    if (window.location.pathname === `/${locale}${slug}`) {
      setWindowLoc(window.pageYOffset)
      navigate(`${slug}=review`)
    } else {
      setWindowLoc(window.pageYOffset)
      setOpenOpinions(false)
      setTimeout(() => {
        navigate(slug)
      }, 600)
    }
  }

  useEffect(() => {
    if (window.location.pathname === "/pl/torun/copernicustorunhotel") {
      window.scrollTo(0, windowLoc)
    } else {
      window.scrollTo(0, windowLoc)
      setOpenOpinions(true)
    }
  }, [])

  const whatNumberGrade = stars => {
    if (stars > 4) {
      return (Math.random() * (9.9 - 9) + 9).toFixed(1)
    } else if (stars === 4) {
      return (Math.random() * (8.9 - 8) + 8).toFixed(1)
    } else {
      return (Math.random() * (7.9 - 5) + 5).toFixed(1)
    }
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <Layout>
      <div className="hotels">
        <Options section={false} />
        <div className="hotels__wrapper">
          <div className="hotels__containter">
            <div className="hotel">
              <div className="hotel__header">
                <h1>{hotel.name}</h1>
                <p>Serduszko</p>
                <p>Udostępnij dalej</p>
                <button>Zarezerwuj treraz</button>
              </div>
              <div className="photos">
                <div className="photos__big">
                  {headerPhotos.map((photo, index) => {
                    return (
                      <Img
                        className={
                          index !== 2 ? "gallery-small" : "gallery-big"
                        }
                        fluid={photo.fluid}
                      />
                    )
                  })}
                </div>
                <div className="photos__small">
                  {footerPhotos.map((photo, index) => {
                    return (
                      <Img
                        className={`gallery-others ${
                          index == 2 ? "middleimg" : "notmiddle"
                        }`}
                        fluid={photo.fluid}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="icons">
                <div className="icons__element">
                  <Icon icon="cil:animal" />
                  <p>zwierzęta domowe są akceptowane</p>
                </div>
                <div className="icons__element">
                  <Icon icon="clarity:wifi-solid" />
                  <p>bezpłatne wifi</p>
                </div>
                <div className="icons__element">
                  <Icon icon="bi:snow" />
                  <p>klimatyzacja</p>
                </div>
                <div className="icons__element">
                  <Icon icon="fa-solid:shower" />
                  <p>prywatna łazienka</p>
                </div>
                <div className="icons__element">
                  <Icon icon="fluent:access-time-24-regular" />
                  <p>całodobowa recepcja</p>
                </div>
              </div>
              <div className="description">
                <div className="description__column">
                  <div
                    className="description__section"
                    dangerouslySetInnerHTML={{
                      __html: hotel.description.childrenMarkdownRemark[0].html,
                    }}
                  />
                  <p>
                    Z autentycznych opinii naszych Gości wynika, że to ich
                    ulubiona część miasta Gdańsk.
                  </p>

                  <p>
                    Parom bardzo się podoba ta lokalizacja – za pobyt dla 2 osób
                    oceniają ją na {whatNumberGrade(hotel.grade)}
                  </p>
                  {hotel.node_locale ? <p>Mówimy w twoim języku!</p> : null}
                  <p>
                    <strong>
                      Obiekt {hotel.name} obsługuje Gości Booking.com od
                      hotel.date
                    </strong>
                  </p>
                  <div className="facility-popular">
                    <h4>Najpopularniejsze udogodnienia</h4>

                    <ul>
                      {hotel.popularFacilities.map((el, index) => {
                        return (
                          <li key={el + index}>
                            <Icon icon={el.icon} />
                            <p>{el.name}</p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className="description__info">dsdasdasdasdas</div>
              </div>

              <Information hotel={hotel} />
              <Opinions
                categories={hotel.categories}
                showOpinion={showOpinion}
                openOpinions={openOpinions}
              />
              <OpinionsReview
                categories={hotel.categories}
                showOpinion={showOpinion}
                openOpinions={openOpinions}
              />
              <Facilities hotel = {hotel}/>
              <Rules hotel = {hotel}/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default HotelsTemplate

export const query = graphql`
  query ($slug: String, $locale: String) {
    contentfulHotels(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      name
      slug
      grade
      town
      parentSlug
      node_locale
      categories {
        name
        grade
      }
      popularFacilities {
        name
        icon
      }
      facilities {
        facilities
        icon
        name
      }
      description {
        childrenMarkdownRemark {
          html
          htmlAst
        }
      }

      photos {
        fluid {
          src
        }
      }
    }
  }
`
