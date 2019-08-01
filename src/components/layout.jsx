/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header/header';
import Footer from './Footer/footer';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allMarkdownRemark (
        filter: {frontmatter: {title: {eq: "BCJ.by"}}}
      ) {
        edges {
          node {
            frontmatter {
              title
              footerTitle
              github
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <>
      <Header siteTitle={data.allMarkdownRemark.edges[0].node.frontmatter.title} />
      <main>
        {children}
      </main>
      <Footer
        footerTitle={data.allMarkdownRemark.edges[0].node.frontmatter.footerTitle}
        githubLink={data.allMarkdownRemark.edges[0].node.frontmatter.github}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
