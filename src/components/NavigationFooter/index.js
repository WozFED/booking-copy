import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
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
      <li>Pobyty</li>
      <li>Pobyty</li>
      <li>Pobyty</li>
      <li>Pobyty</li>
      <li>Pobyty</li>
      <li>Pobyty</li>
      </ul>
    </div>
  )
}

export default NavigationFooter
