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
      dayDirector: allMarkdownRemark (
        filter: {frontmatter: {directorsName: {eq: "Leonid Alexeyevich Nechayev"}}}
      ) {
        edges {
          node {
            frontmatter {
              directorsName
              directorsLifeYears
              directorsInfo
            }
          }
        }
      }
      info: allMarkdownRemark (
        filter: {frontmatter: {title: {eq: "info"}}}
      ) {
        edges {
          node {
            frontmatter {
              mainTitle
              text
            }
          }
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
      <Main mainTitle={data.info.edges[0].node.frontmatter.mainTitle} />
      <Info infoText={data.info.edges[0].node.frontmatter.text}> </Info>
      <DayAuthor
        dayAuthorTitle={data.info.edges[0].node.frontmatter.dayDirectorTitle}
        dayAuthorName={data.dayDirector.edges[0].node.frontmatter.directorsName}
        dayAuthorYearsLife={data.dayDirector.edges[0].node.frontmatter.directorsLifeYears}
        dayAuthorInfo={data.dayDirector.edges[0].node.frontmatter.directorsInfo}
      />
      <Developers
        edges={data.cards.edges}
      />
      <Developers />
    </Layout>
  );
};

export default IndexPage;
