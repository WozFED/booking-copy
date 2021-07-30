import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"


const H1 = styled.h1 `
color: ${({color}) => color};
font-size: 24px;
`


const NavigationHeader = () =>{
    return (
        <div className ='header__navigation-header'>
            <div className = 'header__title'>
               <StaticImage src = "https://logo-logos.com/wp-content/uploads/2016/10/Booking_logo_blue.png" alt = "booking.com"
               width = {180}
                />
            </div>
            <div className = 'header__options'>
                <div><p>PLN</p></div>
                <div><button>POL</button></div>
                <div><button>??</button></div>
                <div><button className = 'button-header another'><p><strong>Udostępnij obiekt</strong></p></button></div>
                <div><button className = 'button-header'><p><strong>Zarejestruj się</strong></p></button></div>
                <div><button className = 'button-header'><p><strong>Zaloguj się</strong></p></button></div>
            </div>
                
        </div>
    )
}

export default NavigationHeader;