const { node } = require("prop-types")
const slash = require("slash")
const path = require(`path`)

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  // You can access the variable "locale" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  })
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const townTemplate = path.resolve("./src/templates/townTemplate.js")
  const hotelTemplate = path.resolve("./src/templates/hotelTemplate.js")
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query MyQuery {
        allContentfulTowns {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulHotels {
          edges {
            node {
              slug
              parentSlug
              node_locale
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
   

      result.data.allContentfulTowns.edges.forEach(town =>{
        createPage({
          path: `/${town.node.slug}`,
          component: slash(townTemplate),
          context: {
            slug: town.node.slug
            
          }
        })
      })
      result.data.allContentfulHotels.edges.forEach(hotel =>{
        createPage({
          path: `${hotel.node.parentSlug}/${hotel.node.slug}`,
          component: slash(hotelTemplate),
          context: {
            slug: hotel.node.slug,
          }
        })
      })
  })
}


