
import React from 'react'
import NavigationFooter from '../NavigationFooter'
import NavigationHeader from '../NavigationHeader'


const Header = () =>{
    return (
        <div className = "header">
            <div className = "header__navigation">
            <NavigationHeader />
            <NavigationFooter />
            </div>
        </div>

    )
}

export default Header