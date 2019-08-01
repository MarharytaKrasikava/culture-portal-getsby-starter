import React from 'react';
import { graphql } from 'gatsby';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.directorsName}</h1>
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
        </div>
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
        frontmatter {
          directorsName
          directorsLifeYears
          directorsInfo
        }
      }
    }`;
