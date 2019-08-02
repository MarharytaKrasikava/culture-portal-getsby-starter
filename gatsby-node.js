const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const authorPageTemplate = path.resolve('src/templates/authorPage.jsx');

  return graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "director"}}}
        limit: 1000
        ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: authorPageTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
