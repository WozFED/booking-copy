const { paginate } = require("gatsby-awesome-pagination")
const { node } = require("prop-types")
const slash = require("slash")
const path = require(`path`)

exports.onCreatePage = async ({ page, actions }) => {
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
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const townTemplate = path.resolve("./src/templates/townTemplate.js")
  const hotelTemplate = path.resolve("./src/templates/hotelTemplate.js")

  // Create blog post pages.
  const data = await graphql(`
     {
      allContentfulTowns {
        nodes {
          slug
          hotels1 {
            parentSlug
            slug
          }
        }
      }
      allContentfulHotels {
                nodes {
                  name
                  parentSlug
                }
    }
  }
    `)

  const hotelArr = data.data.allContentfulHotels.nodes
  const postsPerPage = 5
  const numPages = Math.ceil(hotelArr.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/gdansk` : `/gdansk/${i + 1}`,
      component: slash(townTemplate),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        parentSlug: "gdansk"
      },
    })
  })
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/torun` : `/torun/${i + 1}`,
      component: slash(townTemplate),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        parentSlug: "torun"
      },
    })
  })
  // paginate({
  //   createPage,
  //   items: hotels.data.allContentfulTowns.nodes[0].hotels1, // An array of objects
  //   itemsPerPage: 2, // How many items you want per page
  //   pathPrefix: '/gdansk', // Creates pages like `/blog`, `/blog/2`, etc
  //   component: slash(testTemplate)
  //   })

  // result.data.allContentfulTowns.edges.forEach(town =>{
  //   createPage({
  //     path: `/${town.node.slug}`,
  //     component: slash(townTemplate),
  //     context: {
  //       slug: town.node.slug

  //     }
  //   })
  // })

  //     result.data.allContentfulHotels.edges.forEach(hotel =>{
  //       createPage({
  //         path: `${hotel.node.parentSlug}/${hotel.node.slug}`,
  //         component: slash(hotelTemplate),
  //         context: {
  //           slug: hotel.node.slug,
  //         }
  //       })
  //     })
  // })
}
