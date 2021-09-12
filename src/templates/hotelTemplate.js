import React, { useState } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Options from "../components/Options"
import { Icon } from "@iconify/react"
import Opinions from "../components/Opinions"
import OpinionsReview from "../components/OpinionsReview"
import styled from "styled-components"
import Information from "../components/Information"
import Facilities from "../components/Facilities"
import Rules from "../components/Rules"
import StarRatings from "react-star-ratings"
import Links from "../components/Links"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Important from "../components/Important"

const HotelsTemplate = ({ data }) => {
  const hotel = data.contentfulHotels
  console.log(hotel)
  const photos = data.contentfulHotels.photos
  const morePhotos = photos.concat(photos).concat(photos).concat(photos)
  const headerPhotos = morePhotos.slice(0, 3)
  const footerPhotos = morePhotos.slice(3, 8)
  const [openOpinions, setOpenOpinions] = useState(false)

  const whatNumberGrade = stars => {
    if (stars > 4) {
      return (Math.random() * (9.9 - 9) + 9).toFixed(1)
    } else if (stars === 4) {
      return (Math.random() * (8.9 - 8) + 8).toFixed(1)
    } else {
      return (Math.random() * (7.9 - 5) + 5).toFixed(1)
    }
  }
  return (
    <Layout>
      <div className="hotels">
        <Links hotel={hotel} />

        <Options section={false} hotel={hotel} />
        <div className="hotels__wrapper">
          {/* <button style = {{position: 'fixed'}} onClick = {() => console.log(window.pageYOffset)}>Pokaż kordy</button> */}
          <div className="hotels__general">
            <ul>
              <li className="hotels__table">
                <p>Informacje i ceny</p>
              </li>
              <li className="hotels__table">
                <AnchorLink to="#facility">
                  <p>Udogodnienia</p>
                </AnchorLink>
              </li>
              <li className="hotels__table">
                <AnchorLink to="#rules">
                  <p>Zasady pobytu</p>
                </AnchorLink>
              </li>
              <li className="hotels__table">
                <AnchorLink to="#important">
                  <p>Ważne informacje</p>
                </AnchorLink>
              </li>
              <li
                className="hotels__table"
                onClick={() => setOpenOpinions(true)}
              >
                <AnchorLink to="#opinions">
                  <p>Opinie gości ({hotel.opinions})</p>
                </AnchorLink>
              </li>
            </ul>
          </div>
          <div className="hotels__containter">
            <div className="hotel">
              <div className="hotel__header">
                <div className="hotel__info">
                  <h2>{hotel.name}</h2>
                  <StarRatings
                    numberOfStars={hotel.grade}
                    starDimension={15}
                    starSpacing={0}
                    starEmptyColor="#febb02"
                  />{" "}
                  <span style={{ marginLeft: "3px" }}>
                    <Icon
                      icon="ant-design:like-filled"
                      style={{ color: "orange", fontSize: "20px" }}
                    />
                  </span>
                </div>
                <div className="hotel__social">
                  <span>
                    <Icon
                      icon="akar-icons:heart"
                      style={{ color: "#0071c2", fontSize: "20px" }}
                    />
                  </span>
                  <span>
                    <Icon
                      icon="bi:share"
                      style={{ color: "#0071c2", fontSize: "20px" }}
                    />
                  </span>
                  <button className="button-avaiable">Zarezerwuj treraz</button>
                </div>
                <div className="hotel__adress">
                  <Icon icon="eva:pin-outline" />
                  <p>adres</p>
                </div>
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
              </div>

              <Information hotel={hotel} />
              <Opinions
                categories={hotel.categories}
                setOpenOpinions={setOpenOpinions}
                openOpinions={openOpinions}
              />
              <OpinionsReview
                setOpenOpinions={setOpenOpinions}
                categories={hotel.categories}
                openOpinions={openOpinions}
              />
              <Facilities hotel={hotel} />
              <Rules hotel={hotel} />
              <Important />
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
      ratings
      opinions
      shortdescription {
        shortdescription
      }
      rules {
        name
        icon
        hoour
        text
        textrules {
          title
          rules
        }
        image
      }
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
