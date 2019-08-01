import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
      <Developers />
    </Layout>
  );
};

export default IndexPage;
