import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/Search/search';

const authorsInfo = [
  {
    id: 1,
    name: 'Vladimir Korsh-Sablin',
    link: '/directors/ru/KorshSablin',
  },
  {
    id: 2,
    name: 'Mikhail Ptashuk',
    link: '/directors/ru/Ptashuk',
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


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Search authors={authorsInfo} />
  </Layout>
);

export default SecondPage;
