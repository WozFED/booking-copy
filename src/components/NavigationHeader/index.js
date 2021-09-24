import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FormattedMessage } from "gatsby-plugin-intl"
import Language from "../Language"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Icon } from "@iconify/react"
import { format } from "prettier"

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
          text
          icon
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
    if (window.location.pathname.includes("/pl/")) {
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
        <p>Halo?</p>
        {language ? <Language languageF={setValuePage} /> : null}
      </div>
    </div>
  )
}

export default NavigationHeader
