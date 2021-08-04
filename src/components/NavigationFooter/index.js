import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import {navigationFooter} from '../../navigation/navigation'

const NavigationFooter = () => {
  
  return (
    <div className="header__navigation-footer">
      <ul className="header__list">
        {navigationFooter.map((el, index) => {
          return (
          <li className = {window.location.pathname === el.path ? 'click' : null}
                key={index}>
            <Link to={el.path} style={{ textDecoration: "none" }}>
               
                
                <span>{el.image}</span>
                <p>{el.name}</p>
               </Link></li>
           
          )
        })}
      </ul>
    </div>
  )
}

export default NavigationFooter;