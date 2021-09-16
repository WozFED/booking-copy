import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"

const Links = ({ hotel, town }) => {
  return (
    <div className="links">
      <div className="links__wrapper">
        <Link to="/" className="nostyle">
          <p>
            <FormattedMessage id="mainsite" />
          </p>
        </Link>
        &#62;
        <Link to="/" className="nostyle">
          <p>
            <FormattedMessage id="country" />
          </p>
        </Link>
        &#62;
        <Link to={`/${hotel.parentSlug}`} className="nostyle">
          <p>{town ? town : hotel.town}</p>
        </Link>
        &#62;
        {town ? null : (
          <Link to={`/${hotel.parentSlug}/${hotel.slug}`}>
            <p>{hotel.name}</p>&#62;
          </Link>
        )}
        <p>
          <FormattedMessage id="resultsearch" />
        </p>
      </div>
    </div>
  )
}

export default Links
