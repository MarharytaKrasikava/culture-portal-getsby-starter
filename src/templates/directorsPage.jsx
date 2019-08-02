import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import TimelineElement from '../components/Timeline/timeline';
import '../components/layout.css';
import './directorsPage.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { director } = data; // data.markdownRemark holds our post data
  const { frontmatter } = director;
  const titleImage = data.titleImage.childImageSharp.fluid;

  // console.log(titleImage);
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
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!, $imagepath: String!) {
    director: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        directorsLifeYears
        directorsInfo
        timeline {
          date
          description
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
      }),
    }),
    titleImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
  }),
};
Template.defaultProps = {
  data: '',
};
