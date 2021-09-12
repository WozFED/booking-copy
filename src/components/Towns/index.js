import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { StaticImage } from "gatsby-plugin-image"

const Towns = ({towns, test, pushTherray}) => {
    const today = new Date()
  return (
    <div className="towns">
      <Link to = "https://www.booking.com/hotel/pl/filmartorun.pl.html?aid=356980;label=gog235jc-1DCAMotgFCBXRvcnVuSB5YA2i2AYgBAZgBHrgBF8gBDNgBA-gBAfgBAogCAagCA7gCturEiAbAAgHSAiQxYWVhMWNhYi1jMzE4LTRkNzktYjk0Yi01NmM5MzY3ODE2NzHYAgTgAgE;sid=879e601b1e34649f0c4da7d1c1bb65eb#map_opened-hotel_header" />
      <div className="towns__wrapper">
        {towns
          .map((el, index) => {
            return (
              <Link
                to={`${el.slug}`}
                onClick = {()=> pushTherray(el.slug)}
                style={{
                  width:
                    index <= 1 ? "calc(50% - 20px)" : "calc(33.333% - 20px)",
                  height: "270px",
                  marginTop: "20px",
                  marginRight: '20px',
                  boxSizing: "border-box",
                  padding: "0",
                }}
              >
                <BackgroundImage
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  fluid={el.photo.fluid}
                >
                  <div className="towns__photo">
                    <div className="towns__photo-text">
                      <h2>{el.name}</h2>
                      <h3>{`${el.amount}`}</h3>
                    </div>
                    <StaticImage
                      width={25}
                      src="C:\Kurs Front-End\gatsby-new-project\static\polski.png"
                    />
                  </div>
                  </BackgroundImage>
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default Towns
