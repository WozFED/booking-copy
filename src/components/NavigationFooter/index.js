import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { navigationFooter } from "../../navigation/navigation"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { Icon } from "@iconify/react"

const NavigationFooter = () => {
  const data = useStaticQuery(graphql`
    query NavFoot {
      allNavigationJson {
        nodes {
          name
          image
          path
          test
        }
      }
    }
  `)
  const { nodes } = data.allNavigationJson
  return (
    <div className="header__navigation-footer">
      <ul className="header__list">
        {nodes.map((el, index) => {
          return (
            
            <li
            onClick = {()=> localStorage.setItem('classClick', el.name)}
            className = {localStorage.getItem('classClick') === el.name ? 'click' : ''}
              key={index}
            >
              <Link to={el.path} style={{ textDecoration: "none" }}>
                <span>
                  <Icon
                    icon={`${el.image}`}
                    style={{ fontSize: "25px", color: "white" }}
                  />
                </span>
                <p>
                  <FormattedMessage id={el.name} />
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavigationFooter
