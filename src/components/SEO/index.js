import React from "react"
import { Helmet } from "react-helmet"
import {StaticQuery, graphql} from "gatsby"

const SEO = () => {


  return ( 
      <StaticQuery 
      query = {deailsQuery} 
      render = {data =>{
          const metaDescription = data.site.siteMetadata.description
          const metaTitle = data.site.siteMetadata.title
          const metaAuthor = data.site.siteMetadata.author
          return (
              <Helmet title = {metaTitle}
              meta = {[
                  {
                   name: `description`,
                   content: metaDescription   
                  },
                  {
                    property: `og:author`,
                    content: metaAuthor   
                   },
                   {
                    property: `og:title`,
                    content: metaTitle   
                   },
                   {
                    property: `og:description`,
                    content: metaDescription   
                   }]
                   
              }
          />   
          )
      }}
       />
  )
}

export default SEO;

const deailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                author
                description
            }
        }
    }
`