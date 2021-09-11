import React from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import { StaticImage } from "gatsby-plugin-image"

const HourLine = styled.div`
  width: 300px;
  background-color: #ededed;
  border: 1px solid #c2c2c2;
  height: 18px;
  border-radius: 5px;
  display: flex;
  position: relative;
`
const TimeLine = styled.div`
  width: ${props => props.width + "%"};
  left: ${props => props.left + "%"};
  height: 100%;
  background-color: green;
  position: absolute;
`

const Bubble = styled.div`
  position: relative;
  left: ${props => props.left + "%"};
  top: 28px;
  width: 60px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 0px;
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid #c2c2c2;
  margin-left: 24px;

  :after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 8px 6px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    margin-left: -8px;
    top: -6px;
    left: 50%;
  }

  :before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 8px 6px;
    border-color: #7e7f7f transparent;
    display: block;
    width: 0;
    z-index: 0;
    margin-left: -8px;
    top: -7px;
    left: 50%;
  }
`

const Rules = ({ hotel }) => {
    console.log(hotel.rules)

  const leftFunction = (hourStart, hourEnd) =>{
      if(hourEnd === 24) {
          return (100/24) * hourStart
      }
      else 
      return (100/24 * hourStart) + 100 - 100/24 * hourEnd
  }
  return (
    <div id = "rules" className="rules">
      <div className="rules__header">
        <h2>Zasady pobytu</h2>
        <button className="button-avaiable">Zobacz dostępność </button>
        <p>
          Obiekt {hotel.name} przyjmuje życzenia specjalne – możesz je dodać w
          kolejnym kroku rezerwacji!
        </p>
      </div>
      <div className ="rules__section">
          <div className = "rules__wrapper">
              {
                  hotel.rules.map((rule, index) =>{
                      return (
                          rule.hoour ?
                        <div className="check">
                        <div className="check__title">
                          <div className="check__icon">
                            <Icon icon={`${rule.icon}`} />
                          </div>
                          <p>{rule.name}</p>
                        </div>
                        <div className="check__chart">
                          <HourLine>
                            <div className="checkinout" style={{ left: leftFunction(rule.hoour, 24) - 5 + "%" }}>
                              {rule.hoour + ':00'}
                            </div>
                            <TimeLine width={100 - leftFunction(rule.hoour, 24)} left={index === 0 ? leftFunction(rule.hoour, 24) -0.5 : 0.5} />
                            <Bubble left={index === 0 ? leftFunction(rule.hoour, 24) : 0.5}>{rule.hoour + ':00'}</Bubble>
                          </HourLine>
                        </div>
                        {index === 0 ?<p className="check__info">
                          Przy zameldowaniu wymagane jest okazanie ważnego dowodu tożsamości
                          ze zdjęciem oraz karty kredytowej
                        </p>: null}
                        
                      </div> : rule.text ?

                      <div className="check">
                      <div className="check__title">
                        <div className="check__icon">
                          <Icon icon={`${rule.icon}`} />
                        </div>
                        <p>
                          {rule.name}
                        </p>
                      </div>
                      <div className="check__text">
                        <p>
                          {rule.text}
                        </p>
                      </div>
                    </div> : rule.textrules ?
                    <div className="check">
                    <div className="check__title">
                      <div className="check__icon">
                        <Icon icon={`${rule.icon}`} />
                      </div>
                      <p>
                        {rule.name}
                      </p>
                    </div>
                    <div className="check__text">
                        {rule.textrules.map((text, index) =>{
                            return (
                                <div  key = {index}>
                                <p className = "check__text-title">{text.title}</p>
                                <div className = "check__text-text" dangerouslySetInnerHTML={{ __html: text.rules}} />
                                </div>
                            )
                            
                        })}
                   </div>
                  </div> : 
                  rule.image ? 
                   <div className="check">
                   <div className="check__title">
                     <div className="check__icon">
                       <Icon icon={`${rule.icon}`} />
                     </div>
                     <p>
                       {rule.name}
                     </p>
                   </div>
                   <div className="check__text">
                       {
                           rule.image.map((image, index) => {
                               return (
                                   <img
                                   key = {index}
                       src = {image}
                       alt = "Karta"
                       width={50}
                       imgStyle={{ borderRadius: "3px" }}
                     />
                     
                     
                               )
                            
                           })
                       }
                     
                   </div>
                 </div>
               : 
               null
                         
                        
                      )
                  })
              }
          </div>
      </div>
    </div>
  )
}

export default Rules
