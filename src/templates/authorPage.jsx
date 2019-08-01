import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import TimeLine from '../components/Timeline/timeline';

const AuthorPageTemplate = ({
  title,
  timeline,
  youtubeLink
}) => {

  return (
    <Layout>
      <TimeLine author={timeline} />
    </Layout>
  )
}

AuthorPageTemplate.propTypes = {
  title: PropTypes.string,
  timeline: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }))
}
AuthorPageTemplate.defaultProps = {
  title: '',
  timeline: '',
};

export default AuthorPageTemplate;
