import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import TimelineElement from '../components/Timeline/timeline';
import ListOfWorks from '../components/ListOfWorks/listOfWorks';
import Gallery from '../components/Gallery/gallery';
import YoutubeModalWindow from '../components/YoutubeModalWindow/YoutubeModalWindow';
import Map from '../components/Map/map';
import '../components/layout.css';
import './directorsPage.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { director } = data; // data.markdownRemark holds our post data
  const { frontmatter } = director;
  const { gallery } = data;
  const titleImage = data.titleImage.childImageSharp.fluid;
  console.log(data);
  return (
    <Layout>
      <div className="directors__container">
        <h1>{frontmatter.title}</h1>
        <div className="directors__image">
          <Img fluid={titleImage} alt="Gatsby Docs are awesome" />
        </div>
        <div>
          <p className="directors__years">{frontmatter.directorsLifeYears}</p>
          <p className="directors__info">{frontmatter.directorsInfo}</p>
          <TimelineElement timeline={frontmatter.timeline} />
          <ListOfWorks listOfWorks={frontmatter.listOfWorks} />
          <Gallery edges={gallery.edges} />
          <YoutubeModalWindow youtube={frontmatter.youtube} />
          <Map geolocation={frontmatter.geolocation} />
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!, $imagepath: String!, $gallery: String!) {
    director: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        directorsLifeYears
        directorsInfo
        timeline {
          date
          description
        }
        listOfWorks {
          id
          year
          film
        }
        youtube
        geolocation {
          id
          latitude
          longitude
          description
        }
      }
    }
    gallery: allFile(filter: {relativeDirectory: {eq: $gallery }}) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
    titleImage: file(relativePath: { eq: $imagepath }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

Template.propTypes = {
  data: PropTypes.shape({
    director: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        directorsLifeYears: PropTypes.string,
        directorsInfo: PropTypes.string,
        timeline: arrayOf(PropTypes.object),
        listOfWorks: arrayOf(PropTypes.object),
        youtube: PropTypes.string,
        geolocation: arrayOf(PropTypes.object),
      }),
    }),
    titleImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
    gallery: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};
Template.defaultProps = {
  data: '',
};
