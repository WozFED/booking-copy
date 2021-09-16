import React from "react"
import {
  IntlContextConsumer,
  changeLocale,
  FormattedMessage,
} from "gatsby-plugin-intl"
import { Icon } from "@iconify/react"

const languageName = {
  en: "english",
  pl: "polski",
}
const Language = props => {
  const setTheLanguage = language => {
    changeLocale(language)
  }
  return (
    <div className="choose">
      <div className="choose__header">
        <div>
          <h2>
            <FormattedMessage id="slanguage" />
          </h2>
          <h3>
            <FormattedMessage id="suggested" />
          </h3>
        </div>

        <button
          className="button-choose"
          onClick={() => props.languageF(false)}
        >
          <Icon icon="eva:close-fill" />
          {null}
        </button>
      </div>
      <div className="choose__wrapper">
        <IntlContextConsumer>
          {({ languages }) =>
            languages.map(language => (
              <div
                className="languages"
                key={language}
                onClick={() => setTheLanguage(language)}
              >
                <img alt="flaga" src={`/${languageName[language]}.png`}></img>
                <p> {languageName[language]}</p>
              </div>
            ))
          }
        </IntlContextConsumer>
      </div>{" "}
      <FormattedMessage id="languagebuild" />
    </div>
  )
}

export default Language
