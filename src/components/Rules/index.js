import React from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"

const HourLine = styled.div`
width: 300px;
background-color: gray;
border-radius: 5px;
height: 15px;
display: flex;
position: relative;
`
const TimeLine = styled.div`
width: ${props => props.width + '%'};
left: ${props => props.left + '%'};
height: 100%;
background-color: green;
position: absolute;
`

const Bubble = styled.div`
    position: relative;
    left: ${props => props.left + '%'};
    top: 28px;
    width: 60px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: 0px;
    background: #FFFFFF;
    border-radius: 2px;
    border: 1px solid #c2c2c2;

:after {
content: '';
position: absolute;
border-style: solid;
border-width: 0 8px 6px;
border-color: #FFFFFF transparent;
display: block;
width: 0;
z-index: 1;
margin-left: -8px;
top: -6px;
left: 50%;
}

:before {
content: '';
position: absolute;
border-style: solid;
border-width: 0 8px 6px;
border-color: #7E7F7F transparent;
display: block;
width: 0;
z-index: 0;
margin-left: -8px;
top: -7px;
left: 50%;}
`

const Rules = ({ hotel }) => {
    
    const arrayRules = ["Zameldowanie", "Wymeldowanie", "Odwołanie rezerwacji/przedpłata", 
    "Zakwaterowanie dzieci", "Ograniczenia wiekowe", "Zawierzęta", "Karty akceptowane w tym hotelu"]
  return (
    <div className="rules">
      <div className="rules__header">
        <h3>Zasady pobytu</h3>
        <button className="button-avaiable">Zobacz dostępność </button>
        <p>
          Obiekt {hotel.name} przyjmuje życzenia specjalne – możesz je dodać w
          kolejnym kroku rezerwacji!
        </p>
      </div>
      <div className="rules__section">
        <div className="check">
          <div className="check__title">
            <div className = "check__icon"><Icon icon="bx:bxs-calendar-check" /></div><p>Zameldowanie</p>
          </div>
          <div className="check__chart">
          
            <HourLine ><div className = "checkinout" style = {{left: 57.5 + '%'}}>15:00</div>
                <TimeLine width = {100 - 62.5} left = {61.5}/> 
                <Bubble left = {70}>15:00</Bubble>
            </HourLine>
           
          </div>
          <p className = "check__info">
            Przy zameldowaniu wymagane jest okazanie ważnego dowodu tożsamości
            ze zdjęciem oraz karty kredytowej
          </p>
        </div>
        <div className="check">
          <div className="check__title">
            <div className = "check__icon"><Icon icon="bx:bxs-calendar-exclamation" /></div><p>Wymeldowanie</p>
          </div>
          <div className="check__chart">
          
          <HourLine >
              <div className = "checkinout" style = {{left: 45 + '%'}}>12:00</div>
              <TimeLine  width = {100 - 50} left = {1}/>
              <Bubble left = {15}>12:00</Bubble>
            </HourLine>
          
         
          </div>
        </div>
        <div className="check">
          <div className="check__title">
              <div className = "check__icon"><Icon icon="akar-icons:info-fill" /></div>
              <p>Odwołanie rezerwacji/ przedpłata</p></div>
        </div>
        <div className="check">
        <div className = "check__title"><p>Zakwaterowanie dzieci</p></div></div>
        <div className="check"><div className = "check__title"><p>Ograniczenia wiekowe</p></div></div>
        <div className="check"><div className = "check__title"><p>Zwierzęta</p></div></div>
        <div className="check"><div className = "check__title"><p>Karty akceptowane w tym hotelu</p></div></div>
      </div>
    </div>
  )
}

export default Rules
