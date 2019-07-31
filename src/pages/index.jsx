import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Main from '../components/Exposition/exposition';
import SEO from '../components/seo';
import Info from '../components/Info/info';
import DayAuthor from '../components/DayAuthor/dayAuthor';
import Developers from '../components/Developers/developers';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteMainTitleQuery {
      site {
        siteMetadata {
          mainTitle
          infoText
          dayAuthorTitle
          dayAuthorName
          dayAuthorYearsLife
          dayAuthorInfo
        }
      }
      cards: allMarkdownRemark (
        sort: {fields: [frontmatter___number]}
        filter: {frontmatter: {id: {eq: "card"}}}
        ) {
        edges {
          node {
            ...CardMarkdownFrontmatter
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Main mainTitle={data.site.siteMetadata.mainTitle} />
      <Info infoText={data.site.siteMetadata.infoText}> </Info>
      <DayAuthor
        dayAuthorTitle={data.site.siteMetadata.dayAuthorTitle}
        dayAuthorName={data.site.siteMetadata.dayAuthorName}
        dayAuthorYearsLife={data.site.siteMetadata.dayAuthorYearsLife}
        dayAuthorInfo={data.site.siteMetadata.dayAuthorInfo}
      />
      <Developers
        edges={data.cards.edges}
      />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
