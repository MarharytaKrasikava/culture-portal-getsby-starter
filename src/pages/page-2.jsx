import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TimelineElement from '../components/Timeline/timeline';
import Search from '../components/Search/search';
import authors from '../components/authors';

const authorsInfo = [
  {
    id: 1,
    name: 'Scott',
  },
  {
    id: 2,
    name: 'Egor',
  },
  {
    id: 3,
    name: 'Jony',
  },
  {
    id: 4,
    name: 'Kolifa',
  },
]


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Search authors={authorsInfo} />
    <TimelineElement author={authors.KorshSablin} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
