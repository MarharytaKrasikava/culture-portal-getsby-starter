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
    name: 'Yurij Cvetkov',
    link: '/directors/ru/Tcvetkov',
  },
  {
    id: 4,
    name: 'Viktor Turov',
    link: '/directors/ru/Turov',
  },
  {
    id: 5,
    name: 'Valerij Rubinchik',
    link: '/directors/ru/Rubinchik',
  },
];


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Search authors={authorsInfo} />
  </Layout>
);

export default SecondPage;
