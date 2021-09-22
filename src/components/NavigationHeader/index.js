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
        {nodes.map(el => {
          return (
            <div className={`${el.block}`} key={el.id}>
              <button
                className={`${el.buttonClass}`}
                onClick={() => setValuePage(el.id)}
              >
               {el.text ? <p>{el.text}</p> : 
               el.icon ? <span style = {{color: "white", fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center",
               margin: 0}}>
                 
                <Icon icon = {el.icon} /></span> :
               el.image ? <img src = {image}></img> :
               el.formatID ? <p><FormattedMessage id = {`${el.formatID}`}/></p>
              : null}
                 
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
