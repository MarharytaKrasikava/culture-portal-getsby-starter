import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header/header';
import Footer from './Footer/footer';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "be" }}) {
        frontmatter {
          siteTitle
          footerTitle
          github
          listLitle
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.markdownRemark.frontmatter.siteTitle}
        listLitle={data.markdownRemark.frontmatter.listLitle}
      />
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
