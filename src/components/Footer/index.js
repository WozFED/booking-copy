import { FormattedMessage } from "gatsby-plugin-intl"
import React from "react"

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__contact">
          <h2><FormattedMessage id = "savemoney" /></h2>
          <p>
            <FormattedMessage id = "exchangeinfo"/>
          </p>
          <div className="footer__text">
            <input
              type="text"
              className="input-text"
              placeholder="Adres mailowy"
            ></input>
            <button className="button-footer"><FormattedMessage id = "subscribe" /></button>
            <label>
              <input type="checkbox" className="input-checkbox"></input>
              <FormattedMessage id = "linkforapp" />
            </label>
          </div>
        </div>
      </div>
      <div className="sharing">
        <div className="sharing__share">
          <button className="button-header another share">
            <p><FormattedMessage id = "share" /></p>
          </button>
        </div>
        <div className="sharing__options">
          <div className="sharing__links">
            <p><FormattedMessage id = "mobileversion"/></p>
            <p><FormattedMessage id = "youraccount"/></p>
            <p><FormattedMessage id = "changeres"/></p>
            <p><FormattedMessage id = "contact"/></p>
            <p><FormattedMessage id = "beourpartner"/></p>
            <p><FormattedMessage id = "forbiznes"/></p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
