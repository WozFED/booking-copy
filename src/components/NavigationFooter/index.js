import React from "react"
import { Link } from "gatsby"

const NavigationFooter = () => {
  const navigationObject = [
    {
      name: "Pobyty",
      path: "/",
      image: null,
    },
    {
      name: "Loty",
      path: "/flights",
      image: null,
    },
    {
      name: "Wynajem samochodów",
      path: "/cars",
      image: null,
    },
    {
      name: "Atrakcje",
      path: "/atractive",
      image: null,
    },
    {
      name: "Taksówki lotniskowe",
      path: "/taxi",
      image: null,
    },
  ]

  

  return (
    <div className="header__navigation-footer">
      <ul className="header__list">
        {navigationObject.map((el, index) => {
          return (
            <Link to={el.path} style={{ textDecoration: "none" }}>
              <li 
                className = {window.location.pathname === el.path ? 'click' : null}
                key={index}>
                <span>obrazek</span>
                <p>{el.name}</p>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default NavigationFooter
