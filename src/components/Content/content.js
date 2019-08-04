import { useStaticQuery, graphql } from 'gatsby';

const en = useStaticQuery(graphql`
query SiteMainTitleQueryEn {
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

export default function Languges() {
  return en;
}
