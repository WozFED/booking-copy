import { FormattedMessage } from "gatsby-plugin-intl"
import React from "react"
import { Icon } from "@iconify/react"
import { useIntl, Link, intl} from "gatsby-plugin-intl"

const SearchHotels = () => {
  const intl = useIntl()

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
            <input type="text" placeholder= {intl.formatMessage({id: 'whereyougo'})}></input>
          </div>
          <div className="inputs__element test2">
            <Icon icon="bi:calendar-week-fill" style={{ marginRight: "5px" }} />
            <input
              disabled={true}
              placeholder={intl.formatMessage({id: 'checkinout'})}
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
              placeholder="&#8212; &#8226; &#8212; &#8226; &#8212;"
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
