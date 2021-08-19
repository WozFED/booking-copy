import React, {useEffect, useState} from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Options from "../Options"
import Img from "gatsby-image"
import { FormattedMessage } from "gatsby-plugin-intl"

  const Hotels = ({town, arrFil, hotel, isChecked}) => {
  
  return (
    <div className="hotels__wrapper">
      <h2>{town}: znaleziono x obiektów</h2>
      <div className="selects">
        <div className="selects__element">
          <p>Wybrane przez nas</p>
        </div>
        <div className="selects__element">
          <p>Całe domy i apartamenty</p>
        </div>
        <div className="selects__element">
          <p>Gwiazdki (od największej do najmniejszej)</p>
        </div>
      </div>
      <div className="hotels__container">
        {hotel.filter(item => isChecked.some(item => item === true) ? arrFil.includes(item.grade): item)
        .map((hotel, index) => {
          return ( 
              <div className="hotels__window">
                <div className="window__image">
                  <Link to={hotel.slug}>
                  <div className="window__image-postcard">
                    
                    <Img
                      className="image-postcard"
                      fluid={hotel.background.fluid}
                    />
                  </div>
                  </Link>
                </div>
                <div className="window__description">
                  <div>
                    <Link to = {hotel.slug}><h2>{hotel.name}</h2></Link> <span>{hotel.grade}</span>
                  </div>
                  <div>
                    <Link to = {hotel.slug}><p>{town}</p></Link>
                  </div>

                  <p>{hotel.description.description}</p>
                </div>
                <div className = "window__show">
                  <p>Fantystyczny</p>
                  <button className = "button__price">Pokaż ceny</button>
                </div>
              </div>
            
          )
        })}
      </div>
    </div>
  )
}

export default Hotels
