import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Options from "../Options"
import Img from "gatsby-image"
import { FormattedMessage } from "gatsby-plugin-intl"
import StarRatings from 'react-star-ratings';

const Hotels = ({ town, arrFil, hotel, isChecked }) => {

  const whatGrade = (stars) => {
      return stars > 4 ? "Fantastyczny" : stars === 4 ? "Znakomity" : stars < 4 ? "Dobry" : null
    }
  const whatNumberGrade = (stars) =>{
    if(stars > 4) {
      return (Math.random() * (9.9 - 9) + 9).toFixed(1);
    }
    else if(stars === 4) {
     return (Math.random() * (8.9 - 8) + 8).toFixed(1)
  }
    else {
    return (Math.random() * (7.9 - 5) + 5).toFixed(1)
  }
}
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
        {hotel
          .filter(item =>
            isChecked.some(item => item === true)
              ? arrFil.includes(item.grade)
              : item
          )
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
                    <Link to={hotel.slug}>
                      <h2>{hotel.name}</h2>
                    </Link>{" "}
                    <span><StarRatings 
                    numberOfStars ={hotel.grade}
                    starDimension = {15}
                    starSpacing = {0}
                    starEmptyColor = '#febb02'
                    />
                    
                    </span>
                  </div>
                  <div>
                    <Link to={hotel.slug}>
                      <p>{town}</p>
                    </Link>
                  </div>

                  <p>{hotel.description.description}</p>
                </div>
                <div className="window__show">
                  <div className = "show__grade">
                  <div className = "show__grade-text">
                  <p className = "show__grade-main">{whatGrade(hotel.grade)}</p>
                  <p className = "show__grade-opinion">{Math.floor(Math.random()* (2600 - 250) + 500)} opinii</p>
                  </div>
                  <div className = "show__grade-number">
                    <div><p>{whatNumberGrade(hotel.grade)}</p></div>
                
                  </div>
                  </div>
                  <button className="button-price">Pokaż ceny</button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Hotels
