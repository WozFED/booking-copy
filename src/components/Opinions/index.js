import { navigate } from "gatsby-plugin-intl"
import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import Carousel from 'react-elastic-carousel'
import { AnchorLink } from "gatsby-plugin-anchor-links"
const ChartElement = styled.div`
  width: ${props => props.level + "%"};
  background-color: #003580;
  height: 100%;
`
const Item = styled.div`
background-color: red;
width: 30px;
`


const Opinions = ({categories, setOpenOpinions}) => {
 
  return (
    <div className="opinions">
      <h2>Opinie gości</h2>
<AnchorLink to = "#opinions" >
      <div className="opinions__grade" onClick={() => setOpenOpinions(true)}>
     
        <div className="rating-opinions">
          <div>9.5</div>
        </div>
        <p>Znakomity</p>
        <div className="number">
          <div className="point"></div>
          <p>Liczba opinii</p>
        </div>

        <span>Przeczytaj wszystkie opinie</span>
      </div> </AnchorLink>
      <div className="opinions__charts">
        <h4>Kategorie:</h4>
        <div>
          <ul className="list">
            {categories.map((category, index) => {
              return (
                <li key={index + category.grade}>
                  <p>{category.name}</p>
                  <p>{category.grade}</p>
                  <div className="list-element">
                    <ChartElement level={category.grade * 10} />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="opinions__comments">
        <h4>Zobacz co najbardziej podobało się gościom:</h4>
        <Carousel
        itemsToShow = {3}>
            <div className = "comments">
              <div className = "comments__wrapper">
                <p>Fotka</p>
                <h2>Marcin Test</h2>
                <p>narodowosc</p>
                <div className = "comments__description"><p>Opis</p></div>
              </div>
            </div>
            <div className = "comments">
              <div className = "comments__wrapper">
                <p>Fotka</p>
                <h2>Marcin Test</h2>
                <p>narodowosc</p>
                <div className = "comments__description"><p>Opis</p></div>
              </div>
            </div>
            <div className = "comments">
              <div className = "comments__wrapper">
                <p>Fotka</p>
                <h2>Marcin Test</h2>
                <p>narodowosc</p>
                <div className = "comments__description"><p>Opis</p></div>
              </div>
            </div>
            <div className = "comments">
              <div className = "comments__wrapper">
                <p>Fotka</p>
                <h2>Marcin Test</h2>
                <p>narodowosc</p>
                <div className = "comments__description"><p>Opis</p></div>
              </div>
            </div>
            <div className = "comments">
              <div className = "comments__wrapper">
                <p>Fotka</p>
                <h2>Marcin Test</h2>
                <p>narodowosc</p>
                <div className = "comments__description"><p>Opis</p></div>
              </div>
            </div>
            <div className = "comments">
              <div className = "comments__wrapper">
                <p>Fotka</p>
                <h2>Marcin Test</h2>
                <p>narodowosc</p>
                <div className = "comments__description"><p>Opis</p></div>
              </div>
            </div>
            <div className = "comments">
              <div className = "comments__wrapper">
                <p>Fotka</p>
                <h2>Marcin Test</h2>
                <p>narodowosc</p>
                <div className = "comments__description"><p>Opis</p></div>
              </div>
            </div>
            <div className = "comments">
              <div className = "comments__wrapper">
                <p>Fotka</p>
                <h2>Marcin Test</h2>
                <p>narodowosc</p>
                <div className = "comments__description"><p>Opis</p></div>
              </div>
            </div>
            

           </Carousel>
      </div>
    </div>
  )
}

export default Opinions
