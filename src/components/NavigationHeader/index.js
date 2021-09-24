import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FormattedMessage } from "gatsby-plugin-intl";
import Language from "../Language";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Icon } from "@iconify/react";
import { format } from "prettier";

const NavigationHeader = () => {
  
  const [language, setLanguage] = useState(false);

  const setValuePage = (id) => {
    id === "2" ? setLanguage(true) : setLanguage(false);
  };

  return (
    <div className="header__navigation-header">
      <div className="header__title">
        <Link to="/">
          <StaticImage
            src="https://logo-logos.com/wp-content/uploads/2016/10/Booking_logo_blue.png"
            alt="booking.com"
            width={180}
          />
        </Link>
      </div>
      <div className="header__options">
        <p>Halo?</p>
        {language ? <Language languageF={setValuePage} /> : null}
      </div>
    </div>
  );
};

export default NavigationHeader;
