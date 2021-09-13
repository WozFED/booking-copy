import React, { useContext, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import { Icon } from "@iconify/react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

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
              key={index}
            >
              <Link to={el.path} style={{ textDecoration: "none", padding: '15px', paddingBottom: '10px' }}>
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
