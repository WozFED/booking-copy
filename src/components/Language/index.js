import React, {useContext} from "react"
import { IntlContextConsumer, changeLocale, FormattedMessage } from "gatsby-plugin-intl"

const languageName = {
  english: "english",
  polish: "polski",
  russia: "русский",
  french: "français",
}


  

const Language = props => {

const setTheLanguage = (language) =>{
    changeLocale(language)
  }
  return (
    <div className="choose">
        <div className = "choose__header">
        <h2><FormattedMessage id= "slanguage" /></h2>
        <h3><FormattedMessage id= "suggested" /></h3>
        <button onClick = {() => props.languageF(false)}>X</button></div>
        
        <div className="choose__wrapper">
      <IntlContextConsumer>
        {({ languages }) =>
          languages.map(language => (
            <div
              className="languages"
              key={language}
              onClick={() => setTheLanguage(language)}
            >
              <img src = {`/${languageName[language]}.png`}></img>
              <p> {languageName[language]}</p>
            </div>
          ))
        }
      </IntlContextConsumer></div>
    </div>
  )
}

export default Language
