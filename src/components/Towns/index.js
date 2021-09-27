import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Towns = ({ towns }) => {

  const [test, setTest] = useState(null)

  const filterArrayFunction = (towns) => {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(towns.filter(el => el.slug !== null).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
      }, 200)
    })
  }

  useEffect(()=>{
    filterArrayFunction(towns).then(array => setTest(array))
  }, [])

  return (
    <div className="towns">
      <div className="towns__wrapper">
        {test.map((el, index) => {
          return (
            <Link
              to={`${el.slug}`}
              style={{
                width: index <= 1 ? "calc(50% - 20px)" : "calc(33.333% - 20px)",
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
