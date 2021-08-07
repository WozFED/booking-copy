import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled, { keyframes } from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import Language from "../Language"
import { useStaticQuery, graphql } from "gatsby"

const downup = keyframes`
    from {top: 66px;}
    to {top: 56px;}
`
const MovingOnHover = styled.div`
  top: 66px;
  height: 30px;
  background: black;
  position: absolute;
  display: flex;
  align-items: center;
  animation: ${downup} 0.1s linear;
  animation-fill-mode: forwards;
  p {
    color: white;
    padding: 8px;
    padding-bottom: 8px;
  }
  ::before {
    transition: all 2s;
    content: "";
    position: absolute;
    top: -5px;
    left: ${props => props.sLeft + "px"};
    width: 0;
    border-bottom: 5px solid black;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
`

const NavigationHeader = () => {
  const data = useStaticQuery(graphql`
    query NavHeader {
      allHeaderJson {
        nodes {
          formatID
          buttonClass
          id
          image
          sLeft
          text
          textHover
          block
        }
      }
    }
  `)
  const { nodes } = data.allHeaderJson

  const [show, setShow] = useState({
    is: false,
    id: 0,
  })
  const [language, setLanguage] = useState(false)

  const [image, setImage] = useState("/polski.png")

  const setValuePage = id => {
    id === "2" ? setLanguage(true) : setLanguage(false)
  }

  const showMeValue = (id, textHover) => {
    show.is === false && textHover
      ? setShow({ is: true, id: id })
      : setShow({ is: false, id: 0 })
  }
  useEffect(() => {
    if (window.location.pathname.includes("/english/")) {
      setImage("/english.png")
    }
    if (window.location.pathname.includes("/russia/")) {
      setImage("/русский.png")
    }
    if (window.location.pathname.includes("/polish/")) {
      setImage("/polski.png")
    }
    if (window.location.pathname.includes("/french")) {
      setImage("/français.png")
    }
  }, [])

  return (
    <div className="header__navigation-header">
      <div className="header__title">
        <StaticImage
          src="https://logo-logos.com/wp-content/uploads/2016/10/Booking_logo_blue.png"
          alt="booking.com"
          width={180}
        />
      </div>
      <div className="header__options">
        {nodes.map(el => {
          return (
            <div className={`${el.block}`} key={el.id}>
              <button
                className={`${el.buttonClass}`}
                onMouseOver={() => showMeValue(el.id, el.textHover)}
                onMouseOut={() => showMeValue(0)}
                onClick={() => setValuePage(el.id)}
              >
                <p>
                  {el.text ? (
                    el.text
                  ) : el.formatID ? (
                    <FormattedMessage id={`${el.formatID}`} />
                  ) : null}
                </p>
                {el.image !== null ? <img src={image}></img> : null}
              </button>
              {show.is && show.id === el.id ? (
                <MovingOnHover sLeft={el.sLeft}>
                  <p>{el.textHover}</p>
                </MovingOnHover>
              ) : null}
            </div>
          )
        })}
        {language ? <Language languageF={setValuePage} /> : null}
      </div>
    </div>
  )
}

export default NavigationHeader
