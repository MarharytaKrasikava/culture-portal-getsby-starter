import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import TimelineElement from '../../components/Timeline/timeline';
import ListOfWorks from '../../components/ListOfWorks/listOfWorks';
import YoutubeModalWindow from '../../components/YoutubeModalWindow/YoutubeModalWindow';
import Map from '../../components/Map/map';
import authors from '../../components/authors';
import TitleTwoPage from '../../components/Title2page/title';
import Gallery from '../../components/Gallery/gallery';


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
  // const podgon = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <Layout>
      <SEO title="Korsh-Sablin" />
      <div className="rightcolumn__wrapper">
        <TitleTwoPage author={authors.KorshSablin} />
        <TimelineElement timeline={authors.KorshSablin.timeline} />
        <ListOfWorks listOfWorks={authors.KorshSablin.listOfWorks} />
        <Gallery />
        <YoutubeModalWindow youtube={authors.KorshSablin.youtube} />
        <Map author={authors.KorshSablin} />
      </div>
    </Layout>
  );
};
export default SecondPage;
