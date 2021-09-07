import { FormattedMessage } from "gatsby-plugin-intl"
import React, { useEffect, useState, useContext } from "react"
import DatePicker from "react-date-picker"
import { createGlobalStyle } from "styled-components"
import { Icon } from "@iconify/react"
import { Link } from "gatsby"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/context"

const Options = props => {
  const objectState = useContext(GlobalStateContext)
  const inputFunction = useContext(GlobalDispatchContext)
  Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
  }
  let howManyPeople = Array.from(Array(20).keys())
  const [dateIn, setDateIn] = useState(new Date())
  const [dateOff, setDateOff] = useState(dateIn.addDays(1))

  useEffect(() => {
    setDateOff(dateIn.addDays(1))
  }, [dateIn])

  console.log(Array.from(Array(20).keys()))

  return (
    <div className="hotels__options">
      <div className="options">
        <div className="options__date">
          <div className="date">
            <h2>Szukaj</h2>
            <p>Cel podróży</p>
            <input
              style={{ paddingLeft: "30px" }}
              className="hotels__date-picker"
              type="text"
            />
            <Icon
              icon="ant-design:search-outlined"
              style={{
                position: "absolute",
                top: "17%",
                left: "1%",
                fontSize: "25px",
              }}
            />
            <p>Od</p>
            <DatePicker
              value={dateIn}
              onChange={setDateIn}
              format="y/MMM/d"
              className="hotels__date-picker"
              minDate={new Date()}
              placeholder="Data zameldowania"
              wrapperClassName="test"
            ></DatePicker>
            <p>Do</p>
            <DatePicker
              value={dateOff}
              onChange={setDateOff}
              minDate={dateOff}
              format={"y/MMM/d"}
              className="hotels__date-picker"
              style={{ border: "none" }}
            />
            <p className="nights">
              Pobyt na {Math.ceil((dateOff - dateIn) / 1000 / 60 / 60 / 24)} noc
            </p>
            <div className="date__selects">
              <select className="hotels__date-picker first">
                {howManyPeople.map(el => {
                  return (
                    <option>
                      {el + 1} {el < 1 ? "dorosły" : "dorosłych"}
                    </option>
                  )
                })}
              </select>
              <select className="hotels__date-picker">
                {howManyPeople.map(el => {
                  return (
                    <option>
                      {" "}
                      {el === 0 ? "Bez dzieci" : el}{" "}
                      {el < 2 && el > 0
                        ? "dziecko"
                        : el >= 2
                        ? "dzieci"
                        : el === 0
                        ? null
                        : null}
                    </option>
                  )
                })}
              </select>
              <select className="hotels__date-picker">
                {howManyPeople.map(el => {
                  return (
                    <option>
                      {el + 1} {el < 1 ? "pokój" : "pokoi"}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="input-check">
              <input type="checkbox" /> <p>Podróżuję służbowo</p>
            </div>
            <div className="button-check">
              <button className="button-search">Szukaj</button>
            </div>
          </div>
        </div>

        {props.section ? (
          <div>
            <div className="options__header">
              <h3>Filtruj według nasępujących kryteriów</h3>
            </div>
            <div className="options__box">
              <h4>Zdrowie i bezpieczeństwo</h4>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>
                  Obiekty z dodatkowymi środkami bezpieczeństwa i ochrony
                  zdrowia
                </p>
              </label>
            </div>
            <div className="options__box">
              <h4>Liczba gwiazdek</h4>

              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={() => props.inputFunction(5, 0)}
                ></input>

                <p>5 gwiazdkowy</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={() => props.inputFunction(4, 1)}
                ></input>
                <p>4 gwiazdkowy</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={() => props.inputFunction(3, 2)}
                ></input>
                <p>3 gwiazdkowy</p>
              </label>
            </div>
            <div className="options__box">
              <h4>Popularne filtry</h4>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>kryty basen</p>
              </label>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>wanna z hydromasażem</p>
              </label>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>sauna</p>
              </label>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>plaża</p>
              </label>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>spa i centrum odnowy biologicznej</p>
              </label>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>Znakomity: ponad 9</p>
              </label>
            </div>
            <div className="options__box">
              <h4>Rozrywki</h4>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>piesze wycieczki</p>
              </label>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>plac zabaw dla dzieci</p>
              </label>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>puby</p>
              </label>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>wycieczka lub spacer po miejscowych zabytkach</p>
              </label>
              <label>
                <input type="checkbox" className="checkbox"></input>
                <p>jazda na rowerze</p>
              </label>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Options
