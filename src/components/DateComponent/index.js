import React from "react"
import { Icon } from "@iconify/react"

const DateComponent = () => {
  let today = new Date()
  let tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)

  return (
    <div className="date">
      <div className="date__wrapper">
        <p>Od</p>
        <div className="date__input">
          <Icon icon="bx:bx-calendar" />
          <span>{today.toLocaleString()}</span>
        </div>
      </div>
      <div className="date__wrapper">
        <p>Do</p>

        <div className="date__input">
          <Icon icon="bx:bx-calendar" />
          <span>{tomorrow.toLocaleString()}</span>
        </div>
      </div>
      <div className="date__wrapper">
        <button className="button-avaiable">Sprawdź dostępność</button>
      </div>
      <div className="date__label">
        <label>
          <p>Pokoje</p>
          <select>
            <option>0</option>
          </select>
        </label>
      </div>
      <div className="date__label">
        <label>
          <p>Dorośli</p>
          <select>
            <option>2</option>
          </select>
        </label>
      </div>
      <div className="date__label">
        <label>
          <p>Dzieci</p>
          <select>
            <option>0</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default DateComponent
