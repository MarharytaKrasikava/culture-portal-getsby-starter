import React from 'react';
import Container from '@material-ui/core/Container';
import { useStaticQuery, graphql } from 'gatsby';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './gallery.css';

const Gallery = () => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {extension: {eq: "jpg"}, relativeDirectory: {eq: "Authors\\KorshSablin\\gallery"}}) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`);
  return (
    <React.Fragment>
      <Container className="gallery__container">
        <Carousel>
          {data.allFile.edges.map(item => (
            <img src={item.node.publicURL} alt={item.node.name} key={item.node.name} />
          ))}
        </Carousel>
      </Container>
    </React.Fragment>
  );
};

export default Gallery;
