import React from 'react';
import Container from '@material-ui/core/Container';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './gallery.css';

const Gallery = ({ edges }) => {
  /* const data = useStaticQuery(graphql`
  {
    allFile(filter: {extension: {eq: "jpg"},
    relativeDirectory: {eq: "Authors\\KorshSablin\\gallery"}}) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`); */
  return (
    <React.Fragment>
      <Container className="gallery__container">
        <Carousel>
          {edges.map(item => (
            <img src={item.node.publicURL} alt={item.node.name} key={item.node.name} />
          ))}
        </Carousel>
      </Container>
    </React.Fragment>
  );
};

export default Gallery;
