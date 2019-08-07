import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './gallery.css';

const Gallery = ({ edges }) => {
  const images = edges.map((image) => {
    return {
      url: image.node.publicURL,
      name: image.node.name,
      id: image.node.id,
    };
  });

  return (
    <React.Fragment>
      <Container className="gallery__container">
        <Carousel showArrows showThumbs>
          {images.map(image => (
            <img
              src={image.url}
              alt={image.name}
              key={image.id}
            />
          ))}
        </Carousel>
      </Container>
    </React.Fragment>
  );
};

export default Gallery;

Gallery.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object),
};
Gallery.defaultProps = {
  edges: '',
};
