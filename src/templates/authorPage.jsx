import React from 'react';
import { graphql } from 'gatsby';
import TimelineComponent from '../components/Timeline/timeline';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        {/* <div>
          <img width="900" height="588" src={frontmatter.image} alt="Yuri-Khashchavacki" />
        </div> */}
        <div className="blog-post-content">
          <p>
            {frontmatter.directorsLifeYears}
          </p>
          <p>
            {frontmatter.directorsInfo}
          </p>
          <TimelineComponent timeline={frontmatter.timeline} />
        </div>
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
    }`;
