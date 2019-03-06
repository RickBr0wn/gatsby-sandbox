/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

var urlify = require('urlify').create({
  addEToUmlauts: true,
  szToSs: true,
  spaces: '-',
  nonPrintable: '-',
  trim: true,
})

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allTmdbAccountFavoriteMovies {
        edges {
          node {
            title
            imdb_id
          }
        }
      }
    }
  `)

  // check for errors
  if (result.errors) {
    throw new Error(errors)
  }

  const template = path.resolve(`./src/templates/movie.js`)

  result.data.allTmdbAccountFavoriteMovies.edges.map(edge => {
    createPage({
      path: `/movies/${urlify(edge.node.title.toLowerCase())}/`,
      component: slash(template),
      context: {
        id: edge.node.imdb_id,
      },
    })
  })
}
