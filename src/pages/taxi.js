import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { graphql, Link, StaticQuery, navigate } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import Carousel from 'react-elastic-carousel'


const Taxi = () => {
    


  return (
      <Layout>
         <div>
           <Carousel>
             <p>1</p>
             <p>1</p>
             <p>1</p>
             <p>1</p>
             <p>1</p>
             <p>1</p>
             <p>1</p>
             <p>1</p>
           </Carousel>
      </div> 
      </Layout>
      
  )
}

export default Taxi;
