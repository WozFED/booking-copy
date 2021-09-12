
import React from 'react'
import NavigationFooter from '../NavigationFooter'
import NavigationHeader from '../NavigationHeader'


const Header = ({blog}) =>{
    return (
        <div className = "header">
            <div className = "header__navigation">
            <NavigationHeader />
            {!blog ? <NavigationFooter />: null}
            
            </div>
        </div>

    )
}

export default Header