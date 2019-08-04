import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Languages from '../components/Content/content';
import Layout from '../components/layout';
import Main from '../components/Exposition/exposition';
import SEO from '../components/seo';
// import List from '../components/List/list';
import Info from '../components/Info/info';
import DayAuthor from '../components/DayAuthor/dayAuthor';
import Developers from '../components/Developers/developers';

localStorage.setItem('lang', 'en');

const IndexPage = () => {
  // let data;
  /* switch (lang) {
    case 'en':
      data = en;
      break;
    case 'be':
      data = be;
      break;
    default:
      data = en;
  } */
  /* const en = useStaticQuery(graphql`
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
      info: markdownRemark (frontmatter: {title: {eq: "info"}, lang: { eq: "en" }}) {
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
  `); */
  const query = useStaticQuery(graphql`
    query SiteMainTitleQueryBe {
      dayDirectorEn: markdownRemark(
        frontmatter: { title: { eq: "Владимир Владимирович Корш-Саблин" } }
      ) {
        frontmatter {
          title
          directorsLifeYears
          directorsInfo
          titleText
          imagepath
        }
      }
      infoBe: markdownRemark(
        frontmatter: { title: { eq: "info" }, lang: { eq: "be" } }
      ) {
        frontmatter {
          mainTitle
          text
          dayDirectorTitle
          infoTitle
        }
      }
      homepageBe: markdownRemark(
        frontmatter: { title: { eq: "homepage" }, lang: { eq: "be" } }
      ) {
        frontmatter {
          button
          developers
          seoTitle
        }
      }
      cardsEn: allMarkdownRemark(
        sort: { fields: [frontmatter___number] }
        filter: { frontmatter: { title: { eq: "card" } } }
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
      infoEn: markdownRemark(
        frontmatter: { title: { eq: "info" }, lang: { eq: "en" } }
      ) {
        frontmatter {
          mainTitle
          text
          dayDirectorTitle
          infoTitle
        }
      }
      homepageEn: markdownRemark(
        frontmatter: { title: { eq: "homepage" }, lang: { eq: "en" } }
      ) {
        frontmatter {
          button
          developers
          seoTitle
        }
      }
    }
  `);
  const [lang, setLang] = React.useState('be');
  function handleChoice(event) {
    setLang({ value: event.target.value });
  }
  let data;
  switch (lang.value) {
    case 'en':
      data = {
        homepage: query.homepageEn,
        info: query.infoEn,
        cards: query.cardsEn,
        dayDirector: query.dayDirectorEn,
      };
      break;
    case 'be':
      data = {
        homepage: query.homepageBe,
        info: query.infoBe,
        cards: query.cardsEn,
        dayDirector: query.dayDirectorEn,
      };
      break;
    default:
      data = {
        homepage: query.homepageEn,
        info: query.infoEn,
        cards: query.cardsEn,
        dayDirector: query.dayDirectorEn,
      };
  }
  const listStyles = {
    position: 'absolute',
    top: '200px',
    left: '200px',
    width: '50px',
    height: ' 50px',
  };

  console.log(lang.value);

  return (
    <Layout>
      <SEO title={data.homepage.frontmatter.seoTitle} />
      <select style={listStyles} value={lang.value} onChange={handleChoice} className="list__lang">
        <option value="en">EN</option>
        <option value="be">BE</option>
        <option value="ru">RU</option>
      </select>
      <Main
        mainTitle={data.info.frontmatter.mainTitle}
        buttonText={data.homepage.frontmatter.button}
      />
      <Info
        infoText={data.info.frontmatter.text}
        infoTitle={data.info.frontmatter.infoTitle}
      />
      <DayAuthor
        dayAuthorTitle={data.info.frontmatter.dayDirectorTitle}
        dayAuthorName={data.dayDirector.frontmatter.title}
        dayAuthorYearsLife={data.dayDirector.frontmatter.directorsLifeYears}
        dayAuthorInfo={data.dayDirector.frontmatter.titleText}
        buttonText={data.homepage.frontmatter.button}
      />
      <Developers
        edges={data.cards.edges}
        developersTitle={data.homepage.frontmatter.developers}
      />
    </Layout>
  );
};

export default IndexPage;
