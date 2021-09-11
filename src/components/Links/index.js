import React from 'react'
import {Link} from 'gatsby'
import { Icon } from '@iconify/react'

const Links = ({hotel}) =>{
    return (
        <div className="links">
          <div className="links__wrapper">
            <Link to="/" className="nostyle">
              <p>Stronga główna </p>
            </Link>
            <Icon
              icon="ic:baseline-greater-than"
              style={{ fontSize: "12px" }}
            />
            <Link to="/" className="nostyle">
              <p>Polska </p>
            </Link>
            <Icon
              icon="ic:baseline-greater-than"
              style={{ fontSize: "12px" }}
            />
            <Link to={`/${hotel.parentSlug}`} className="nostyle">
              <p>{hotel.town}</p>
            </Link>
            <Icon
              icon="ic:baseline-greater-than"
              style={{ fontSize: "12px" }}
            />
            <Link to = {`/${hotel.parentSlug}/${hotel.slug}`}>
            <p style={{ color: "#0071c2" }}>{hotel.name}</p>
            </Link>
          </div>
        </div>
    )
}

export default Links