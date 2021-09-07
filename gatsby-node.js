const { paginate } = require("gatsby-awesome-pagination")
const { node } = require("prop-types")
const slash = require("slash")
const path = require(`path`)
const { EDEADLK } = require("constants")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const townTemplate = path.resolve("./src/templates/townTemplate.js")
  const hotelTemplate = path.resolve("./src/templates/hotelTemplate.js")
  const testTown = path.resolve("./src/templates/testTemplate.js")
  const categorized = path.resolve("./src/templates/categorized.js")


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
   
  }