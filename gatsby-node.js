const slash = require("slash")
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const townTemplate = path.resolve("./src/templates/townTemplate.js")
  const hotelTemplate = path.resolve("./src/templates/hotelTemplate.js")
  const articleTemplate = path.resolve("./src/templates/articleTemplate.js")


  const data = await graphql(`
   {
    allContentfulHotels {
      edges {
        node {
          parentSlug
          town
          slug
        }
      }
    }
  }
  `)

  const article = await graphql(`
   {
    allContentfulBlogPosts {
      edges {
        node {
          slug
        }
      }
    }
   }
  `)
  
  data.data.allContentfulHotels.edges.forEach(edge => {
    
      createPage({
        path: `/${edge.node.parentSlug}`,
        component: slash(townTemplate),
        context: {
          slug: edge.node.parentSlug,
          town: edge.node.town
        },
      })
    })
    data.data.allContentfulHotels.edges.forEach(edge => {
    
      createPage({
        path: `/${edge.node.parentSlug}/${edge.node.slug}`,
        component: slash(hotelTemplate),
        context: {
          slug: edge.node.slug,
          town: edge.node.town
        },
      })
    })
    article.data.allContentfulBlogPosts.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: slash(articleTemplate),
      context:{
        slug: edge.node.slug,
      }
    })
  })
  }