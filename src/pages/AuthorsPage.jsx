import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/Search/search';

const authorsInfoEn = [
  {
    id: 1,
    name: 'Vladimir Korsh-Sablin',
    link: '/directors/en/KorshSablin',
  },
  {
    id: 2,
    name: 'Mikhail Ptashuk',
    link: '/directors/en/Ptashuk',
  },
  {
    id: 3,
    name: 'Yurij Cvetkov',
    link: '/directors/en/Tcvetkov',
  },
  {
    id: 4,
    name: 'Viktor Turov',
    link: '/directors/en/Turov',
  },
  {
    id: 5,
    name: 'Valerij Rubinchik',
    link: '/directors/en/Rubinchik',
  },
];

const authorsInfoRu = [
  {
    id: 1,
    name: 'Владимир Корш-Саблин',
    link: '/directors/ru/KorshSablin',
  },
  {
    id: 2,
    name: 'Михаил Пташук',
    link: '/directors/ru/Ptashuk',
  },
  {
    id: 3,
    name: 'Юрий Цветков',
    link: '/directors/ru/Tcvetkov',
  },
  {
    id: 4,
    name: 'Виктор Туров',
    link: '/directors/ru/Turov',
  },
  {
    id: 5,
    name: 'Валерий Рубинчик',
    link: '/directors/ru/Rubinchik',
  },
];

const authorsInfoBe = [
  {
    id: 1,
    name: 'Уладзімір Корш-Саблін',
    link: '/directors/en/KorshSablin',
  },
  {
    id: 2,
    name: 'Міхаіл Пташук',
    link: '/directors/en/Ptashuk',
  },
  {
    id: 3,
    name: 'Юрый Цвяткоў',
    link: '/directors/en/Tcvetkov',
  },
  {
    id: 4,
    name: 'Віктар Тураў',
    link: '/directors/en/Turov',
  },
  {
    id: 5,
    name: 'Валерый Рубінчык',
    link: '/directors/en/Rubinchik',
  },
];

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      en: markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "en" }}) {
        frontmatter {
          siteTitle
          footerTitle
          github
          listLitle
        }
      }
      be: markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "be" }}) {
        frontmatter {
          siteTitle
          footerTitle
          github
          listLitle
        }
      }
      ru: markdownRemark (frontmatter: {title: {eq: "homepage"}, lang: { eq: "ru" }}) {
        frontmatter {
          siteTitle
          footerTitle
          github
          listLitle
        }
      }
    }
  `);
  const [lang, setLang] = React.useState({
    value: localStorage.getItem('lang'),
  });
  function handleChoice(event) {
    setLang({ value: event.target.value });
    localStorage.setItem('lang', event.target.value);
  }
  let authorsInfo;
  let headerInfo;
  switch (lang.value) {
    case 'en':
      authorsInfo = authorsInfoEn;
      headerInfo = {
        homepage: data.en,
      };
      break;
    case 'be':
      authorsInfo = authorsInfoBe;
      headerInfo = {
        homepage: data.be,
      };
      break;
    case 'ru':
      authorsInfo = authorsInfoRu;
      headerInfo = {
        homepage: data.ru,
      };
      break;
    default:
      authorsInfo = authorsInfoEn;
      headerInfo = {
        homepage: data.en,
      };
  }
  const listStyles = {
    position: 'absolute',
    top: '20px',
    left: '200px',
  };
  return (
    <Layout
      siteTitle={headerInfo.homepage.frontmatter.siteTitle}
      footerTitle={headerInfo.homepage.frontmatter.footerTitle}
      github={headerInfo.homepage.frontmatter.github}
      listLitle={headerInfo.homepage.frontmatter.listLitle}
    >
      <select style={listStyles} value={lang.value} onChange={handleChoice}>
        <option value="en">en</option>
        <option value="be">be</option>
        <option value="ru">ru</option>
      </select>
      <SEO title="Page two" />
      <Search authors={authorsInfo} />
    </Layout>
  );
};

export default SecondPage;
