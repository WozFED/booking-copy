import { navigate } from "gatsby-plugin-intl"
import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
const ChartElement = styled.div`
  width: ${props => props.level + "%"};
  background-color: #003580;
  height: 100%;
`

const Opinions = ({ slug, locale, categories, showOpinion }) => {
  

  return (
    <div className="opinions">
      <h2>Opinie gości</h2>
      

      <div className="opinions__grade" onClick={() => showOpinion()}>
        <div className="rating-opinions">
          <div>9.5</div>
        </div>
        <p>Znakomity</p>
        <div className="number">
          <div className="point"></div>
          <p>Liczba opinii</p>
        </div>

        <span>Przeczytaj wszystkie opinie</span>
      </div>
      <div className="charts">
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
      <div className = "opinions__comments">
          <h4>Zobacz co najbardziej podobało się gościom:</h4>
          <div className = "">

          </div>
      </div>
    </div>
  )
}

export default Opinions
