import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { graphql, Link, StaticQuery, navigate } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import Hotels from "../components/Hotels"
import Options from "../components/Options"
import Img from "gatsby-image"
import produce from "immer"
import {Icon} from "@iconify/react"
import Test from '../components/Test/test'

const Categorized = ({ data, pageContext }) => {
    
const test = data.allContentfulHotels.nodes
console.log(test)
console.log(pageContext.limit)
  return (
      <Layout>
         <div>
            {test.map(el =>{
                return (
                    <li>{el.name}, {el.grade}</li>
                )
            })}
        </div> 
      </Layout>
      
  )
}

export default Categorized
export const query = graphql`
query ( $skip: Int!, $parentSlug: String){
    allContentfulHotels (
        filter: {parentSlug: {eq: $parentSlug}}
        sort: {fields: contentful_id, order: DESC}
        limit: 5,
        skip: $skip
        ) {
        nodes {
            name
            grade
            node_locale
            town
        }
        
    }
}
    
  
`
