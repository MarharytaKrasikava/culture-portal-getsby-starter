import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/Search/search';

const authorsInfo = [
  {
    id: 1,
    name: 'Leonid Alexeyevich Nechayev',
    link: '/Nechaev',
  },
  {
    id: 2,
    name: 'Egor EgorEgor EgorEgorEgor',
    link: '/directors/KorzhSablin/',
  },
  {
    id: 3,
    name: 'Jony JonyJony JonyJonyJony',
    link: '/directors/KorzhSablin/',
  },
  {
    id: 4,
    name: 'Kolifa KolifaKolifa KolifaKolifaKolifa',
    link: '/directors/KorzhSablin/',
  },
  {
    id: 5,
    name: 'Jorg JorgJorg JorgJorgJorg',
    link: '/directors/KorzhSablin/',
  },
];


const SecondPage = () => {
  useStaticQuery(graphql`
    query SecondPage {
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
  return (
    <Layout>
      <SEO title="Page two" />
      <Search authors={authorsInfo} />
    </Layout>
  );
};

export default SecondPage;
