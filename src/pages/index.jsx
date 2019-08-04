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
      dayDirector: markdownRemark (frontmatter: {title: {eq: "Владимир Владимирович Корш-Саблин"}}) {
        frontmatter {
          title
          directorsLifeYears
          directorsInfo
          titleText
          imagepath
        }
      }
      info: markdownRemark (frontmatter: {title: {eq: "info"}}) {
        frontmatter {
          mainTitle
          descLine1
          descLine2
          descLine3
          descLine4
          descLine5
          descLine6
          descLine7
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
      <Main
        mainTitle={data.info.frontmatter.mainTitle}
        descLine1={data.info.frontmatter.descLine1}
        descLine2={data.info.frontmatter.descLine2}
        descLine3={data.info.frontmatter.descLine3}
        descLine4={data.info.frontmatter.descLine4}
        descLine5={data.info.frontmatter.descLine5}
        descLine6={data.info.frontmatter.descLine6}
        descLine7={data.info.frontmatter.descLine7}
      />
      <Info infoText={data.info.frontmatter.text}> </Info>
      <DayAuthor
        dayAuthorTitle={data.info.frontmatter.dayDirectorTitle}
        dayAuthorName={data.dayDirector.frontmatter.title}
        dayAuthorYearsLife={data.dayDirector.frontmatter.directorsLifeYears}
        dayAuthorInfo={data.dayDirector.frontmatter.titleText}
      />
      <Developers
        edges={data.cards.edges}
      />
    </Layout>
  );
};

export default IndexPage;
