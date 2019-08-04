import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Languages from '../components/Content/content';
import Layout from '../components/layout';
import Main from '../components/Exposition/exposition';
import SEO from '../components/seo';
import Info from '../components/Info/info';
import DayAuthor from '../components/DayAuthor/dayAuthor';
import Developers from '../components/Developers/developers';

const IndexPage = () => {
  const en = useStaticQuery(graphql`
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
          text
        }
      }
      homepage: markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "en" }}) {
        frontmatter {
          button
          developers
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
        mainTitle={en.info.frontmatter.mainTitle}
        buttonText={en.homepage.frontmatter.button}
      />
      <Info infoText={en.info.frontmatter.text}> </Info>
      <DayAuthor
        dayAuthorTitle={en.info.frontmatter.dayDirectorTitle}
        dayAuthorName={en.dayDirector.frontmatter.title}
        dayAuthorYearsLife={en.dayDirector.frontmatter.directorsLifeYears}
        dayAuthorInfo={en.dayDirector.frontmatter.titleText}
        buttonText={en.homepage.frontmatter.button}
      />
      <Developers
        edges={en.cards.edges}
        developersTitle={en.homepage.frontmatter.developers}
      />
    </Layout>
  );
};

export default IndexPage;
