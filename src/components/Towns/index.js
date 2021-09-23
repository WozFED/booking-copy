import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { StaticImage } from "gatsby-plugin-image"

const Towns = ({ towns }) => {
  return (
    <div className="towns">
      <div className="towns__wrapper">
        {towns.map((el, index) => {
          return (
            <Link 
              key = {index}
              to={`${el.slug}`}
              style={{
                width: "100px",
                height: "270px",
                marginTop: "20px",
                marginRight: "20px",
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
