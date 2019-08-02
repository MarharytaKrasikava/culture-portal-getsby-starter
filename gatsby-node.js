const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const directorsPageTemplate = path.resolve('src/templates/directorsPage.jsx');

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
              imagepath
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
        component: directorsPageTemplate,
        context: {
          imagepath: node.frontmatter.imagepath,
        }, // additional data can be passed via context
      });
    });
  });
};
