import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header/header';
import Footer from './Footer/footer';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      markdownRemark (frontmatter: {title: {eq: "homepage"}}) {
        frontmatter {
          siteTitle
          footerTitle
          github
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.markdownRemark.frontmatter.siteTitle} />
      <main>
        {children}
      </main>
      <Footer
        footerTitle={data.markdownRemark.frontmatter.footerTitle}
        githubLink={data.markdownRemark.frontmatter.github}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
