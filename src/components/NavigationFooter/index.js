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
          id
        }
      }
    }
  `)
  const { nodes } = data.allNavigationJson
    console.log(window.location.pathname)
  return (
    <div className="header__navigation-footer">
      <ul className="header__list">
        {nodes.map((el, index) => {
          return (
            
            <li
            className={window.location.pathname.includes(el.path) ? 'click':null}
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
