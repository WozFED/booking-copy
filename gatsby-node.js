const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query Hotels {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)

    data.allMarkdownRemark.nodes.forEach(node =>{
        actions.createPage({
            path: '/towns/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/hotels-template.js'),
            context: {slug: node.frontmatter.slug}
        })
    })

}