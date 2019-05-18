/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.sourceNodes = ({ actions, store, cache, createNodeId }) => {
  const { createNode } = actions

  return createRemoteFileNode({
    url: "https://httpstat.us/404",
    store,
    cache,
    createNode,
    createNodeId,
  })
  .catch(err => {
    console.log("caught error:", err)
  })
  .then(node => {
    console.log("created node:", node)
  })
}
