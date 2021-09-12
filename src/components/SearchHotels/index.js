import { FormattedMessage } from "gatsby-plugin-intl"
import React from "react"
import { Icon } from "@iconify/react"
const SearchHotels = () => {
  return (
    <div className="inputs">
      <div className="inputs__wrapper">
        <h2>
          <FormattedMessage id="find" />
        </h2>
        <p>
          <FormattedMessage id="find_down" />
        </p>

        <div className="inputs__inputs">
          <div className="inputs__element test3">
            <Icon icon="fluent:bed-24-filled" style={{ marginRight: "5px" }} />
            <input type="text" placeholder="Dokąd się wybierasz?"></input>
          </div>
          <div className="inputs__element test2">
            <Icon icon="bi:calendar-week-fill" style={{ marginRight: "5px" }} />
            <input
              disabled={true}
              placeholder="Zameldowanie - Wymeldowanie"
            ></input>
          </div>
          <div className="inputs__element test2">
            <Icon
              icon="mdi:human-greeting-variant"
              style={{ marginRight: "5px" }}
            />
            <input
              disabled={true}
              type="text"
              placeholder="2 dorosłych &#8226; 0 dzieci &#8226; 1 pokój"
            ></input>
          </div>
          <div className="inputs__element test">
            <div className="inputs__button">
              <p>Szukaj</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchHotels
