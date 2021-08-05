import { FormattedMessage } from "gatsby-plugin-intl"
import React from 'react'
const SearchHotels = () =>{
    return (
        <div className = "inputs">
            <div className = "inputs__wrapper">
            <p><FormattedMessage id = "find" /></p> 
           <p><FormattedMessage id = "find_down" /></p> 
           <input type = 'text' placeholder = {<FormattedMessage id = "where"/>}></input>
           <div>Skąd? - Dokąd?</div>
            </div>
           
           
        </div>
    )
}

export default SearchHotels;