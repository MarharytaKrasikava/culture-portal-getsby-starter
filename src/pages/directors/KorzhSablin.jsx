import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import TimelineElement from '../../components/Timeline/timeline';
import YoutubeElement from '../../components/Youtube/youtube';
import authors from '../../components/authors';
import TitleTwoPage from '../../components/Title2page/title';


const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query AuthorQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              birthDate
              timeline {
                date
                description
              }
            }
            id
          }
        }
      }
    }
  `);
  const podgon = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <Layout>
      <SEO title="Page two" />
      <div className="rightcolumn__wrapper">
        <TitleTwoPage />
        <TimelineElement author={authors.KorshSablin} />
        <YoutubeElement author={podgon} />
      </div>
    </Layout>
  );
};

export default SecondPage;
