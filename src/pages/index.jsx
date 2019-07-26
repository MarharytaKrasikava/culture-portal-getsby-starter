import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Main from '../components/Exposition/exposition';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteMainTitleQuery {
      site {
        siteMetadata {
          mainTitle
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Main mainTitle={data.site.siteMetadata.mainTitle} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
