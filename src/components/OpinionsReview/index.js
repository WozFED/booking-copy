import React from "react"
import styled from "styled-components"

const ButtonClose = styled.div`
  position: fixed;
  top: 80px;
  left: ${props => props.left + "px"};
  opacity: ${props => props.opacity};
  transition: left 0.5s ease 1s,
    ${props =>
      props.opacity === 0
        ? null
        : props.opacity === 1
        ? "opacity 1s ease 0.75s"
        : null};
`
const ChartElement = styled.div`
  width: ${props => props.level + "%"};
  background-color: #003580;
  height: 100%;
`
const OpinionsReview = ({ openOpinions, categories, setOpenOpinions }) => {
  return (
    <div>
      <div id="opinions" className={openOpinions ? "opinions__show" : null}>
        <ButtonClose
          left={openOpinions ? 568 : 650}
          opacity={openOpinions ? 1 : 0}
        >
          <button
            className="button-close"
            onClick={() => setOpenOpinions(false)}
          >
            <p>X</p>
          </button>
        </ButtonClose>
      </div>

      <div className={openOpinions ? "opinions__all" : "opinions__test"}>
        <div className="all">
          <div className="all__header">
            <div className="rating-opinions">
              <div>9.5</div>
            </div>
            <h2>Znakomity</h2>
            <p>
              <i>Rzetelne opinie prawdziwych gości</i>
            </p>
            <button>Napisz opinię</button>
          </div>
          <div className="charts ">
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
          <div className="all__posts">
            <h4>Opinie gości</h4>
            <div className="posts">
              <div className="posts__data">Aleksandra Szewczun</div>
              <div className="posts__post">No tak, fajny hotel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpinionsReview
