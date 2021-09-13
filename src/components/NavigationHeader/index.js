import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FormattedMessage } from "gatsby-plugin-intl"
import Language from "../Language"
import { useStaticQuery, graphql, Link } from "gatsby"

const NavigationHeader = () => {
  const data = useStaticQuery(graphql`
    query NavHeader {
      allHeaderJson {
        nodes {
          block
          buttonClass
          formatID
          id
          image
          sLeft
          text
          textHover
        }
      }
    }
  `)
  const { nodes } = data.allHeaderJson
  const [language, setLanguage] = useState(false)

  const [image, setImage] = useState("/polski.png")

  const setValuePage = id => {
    id === "2" ? setLanguage(true) : setLanguage(false)
  }


  useEffect(() => {
    if (window.location.pathname.includes("/en/")) {
      setImage("/english.png")
    }
    if (window.location.pathname.includes("/polish/")) {
      setImage("/polski.png")
    }
  }, [])

  return (
    <div className="header__navigation-header">
      <div className="header__title">
        <Link to="/">
          <StaticImage
            src="https://logo-logos.com/wp-content/uploads/2016/10/Booking_logo_blue.png"
            alt="booking.com"
            width={180}
          />
        </Link>
      </div>
      <div className="header__options">
        {nodes.map(el => {
          return (
            <div className={`${el.block}`} key={el.id}>
              <button
                className={`${el.buttonClass}`}
                onClick={() => setValuePage(el.id)}
              >
                <p>
                  {el.text ? (
                    el.text
                  ) : el.formatID ? (
                    <FormattedMessage id={`${el.formatID}`} />
                  ) : null}
                </p>
                {el.image !== null ? <img alt = "obrazek" src={image}></img> : null}
              </button>
              
            </div>
          )
        })}
        {language ? <Language languageF={setValuePage} /> : null}
      </div>
    </div>
  )
}

export default NavigationHeader
