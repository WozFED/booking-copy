import { graphql, Link } from 'gatsby'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import '../styles/themes/default/theme.scss'
import SearchHotels from '../components/SearchHotels'




const IndexPage = ({data}) => {
  
  return(
    <Layout>
      <SearchHotels />
      
    </Layout>
  )
  
}
  

export default IndexPage

