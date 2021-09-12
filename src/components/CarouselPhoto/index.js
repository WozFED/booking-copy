import React from 'react'
import Carousel from 'react-elastic-carousel'
import Img from 'gatsby-image'
import { FormattedMessage } from 'gatsby-plugin-intl'

const CarouselPhoto = ({array, section}) =>{
    return (
        <div className = "slider">
            {section === 'category' ?
            <h2><FormattedMessage id = "searchbycategory"/></h2>:
            <div>
            <h2><FormattedMessage id = "discoverPoland" /></h2>
            <p><FormattedMessage id = "popularplaces"/></p></div>}
        
      <Carousel itemsToShow = {5}>
        {
          array.map((element, index) => {
            return (
              <div className = "slider__wrapper" key = {index}>
              <div className = {`slider__photo-${section}`}><Img style = {{width: '100%', height: '100%'}} fluid = {element.photo.fluid} /></div>
              <p>{element.name}</p>
              <p>{element.amount}</p>
              </div>
            )
          })
        }

      </Carousel>
      </div>
    )
}

export default CarouselPhoto