import BackgroundImage from 'gatsby-background-image'
import { FormattedMessage } from 'gatsby-plugin-intl'
import React, {useState} from 'react'
import {Link} from 'gatsby'

const InspirationPosts = ({posts}) =>{
 
    return (
        <div className = "inspirations">
            <div className = "inspirations__wrapper">
                <h2><FormattedMessage id ="inspiration" /></h2>
                <div className = "inspirations__container">

                {
                    posts.map((post, index) =>{
                        return (
                            <Link
                                to={`${post.slug}`}
                                style={{
                                width: index <= 2 ? "calc(33.333% - 15px)": "calc(50% - 15px)" ,
                                height: "320px",
                                marginTop: "15px",
                                marginRight: '15px',
                                boxSizing: "border-box",
                                padding: "0",
                            }}
              >
                            <div key = {index} className = "inspirations__element">
                                <BackgroundImage
                                style = {{width: '100%', height: '100%'}}
                                     fluid = {post.background.fluid}>
                                    <div className = "inspiration__element-text"> <h3>{post.name}</h3>
                                    <p>{post.paragraph}</p></div>
                                    
                                </BackgroundImage>
                            </div></Link>
                        )
                    })
                }</div>
            </div>

        </div>
    )
}

export default InspirationPosts

