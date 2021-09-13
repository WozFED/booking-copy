import React, { useEffect, useState } from "react"
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
    const [active, setActive] = useState({
      id: 0,
      bool: false
    })


  const changeClassFunction = (index) =>{ 
    const path = window.location.pathname
    if(path === '/pl/' || path === '/en/'){
      setActive({id: index, bool: true})
    }
    else console.log('nie mamy, ale mamy to')
    
  }

  return (
    <div className="header__navigation-footer">
      <ul className="header__list">
        {nodes.map((el, index) => {
          return (
            
            <li
              className = 'click1'
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
