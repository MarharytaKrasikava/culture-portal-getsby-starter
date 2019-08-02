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
      dayDirector: markdownRemark (frontmatter: {title: {eq: "Leonid Alexeyevich Nechayev"}}) {
        frontmatter {
          title
          directorsLifeYears
          directorsInfo
        }
      }
      info: markdownRemark (frontmatter: {title: {eq: "info"}}) {
        frontmatter {
          mainTitle
           text
        }
      }
      cards: allMarkdownRemark (
        sort: {fields: [frontmatter___number]}
        filter: {frontmatter: {title: {eq: "card"}}}
        ) {
        edges {
          node {
            frontmatter {
              github
              name
              number
              path
              photo
              title
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Main mainTitle={data.info.frontmatter.mainTitle} />
      <Info infoText={data.info.frontmatter.text}> </Info>
      <DayAuthor
        dayAuthorTitle={data.info.frontmatter.dayDirectorTitle}
        dayAuthorName={data.dayDirector.frontmatter.directorsName}
        dayAuthorYearsLife={data.dayDirector.frontmatter.directorsLifeYears}
        dayAuthorInfo={data.dayDirector.frontmatter.directorsInfo}
      />
      <Developers
        edges={data.cards.edges}
      />
    </Layout>
  );
};

export default IndexPage;
