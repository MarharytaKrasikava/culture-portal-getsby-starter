import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { graphql } from 'gatsby';
import Card from '../Card/card';
import '../layout.css';
import '../variables.css';
import './developers.css';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(3, 0, 0),
    color: 'white',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    maxWidth: '100%',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'none',
  },
  cardName: {
    textAlign: 'center',
  },
  cardMedia: {
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: 'var(--color-2)',
    color: 'white',
  },
}));

const cards = [
  {
    number: 1,
    name: 'Uladzislau Khliabets',
    github: 'https://github.com/vladislavkhlebec',
    photo: 'https://avatars3.githubusercontent.com/u/43673398?s=400&v=4',
  },
  {
    number: 2,
    name: 'Marharyta Krasikava',
    github: 'https://github.com/MarharytaKrasikava',
    photo: 'https://avatars3.githubusercontent.com/u/47751829?s=400&v=4',
  },
  {
    number: 3,
    name: 'Vladislav Priakhine',
    github: 'https://github.com/vladji',
    photo: 'https://avatars1.githubusercontent.com/u/47819058?s=400&v=4',
  },
  {
    number: 4,
    name: 'Nikita Turlyka',
    github: 'https://github.com/hhh1361',
    photo: 'https://avatars2.githubusercontent.com/u/47751762?s=400&v=4',
  },
  {
    number: 5,
    name: 'Pavel Yermakov',
    github: 'https://github.com/PavelYermakov1',
    photo: 'https://avatars1.githubusercontent.com/u/47759016?s=400&v=4',
  },
];

/* export const pageQuery = graphql`
  query cardMarkdown {
    allMarkdownRemark(relativePath: { eq: "markdown/cards" }) {
      frontmatter {
        cards {
          number
          name
          github
          photo
        }
      }
    }
  }
`; */

export default function Exposition() {
  const classes = useStyles();
  /* const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  const { cards } = frontmatter; */

  return (
    <React.Fragment>
      <CssBaseline />
      <section className="section section__developers">
        <div className={classes.heroContent}>
          <Container className="title container__title" maxWidth="sm">
            <h1>Developers Team</h1>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid
            className="cardContainer"
            container
            justify="center"
            alignItems="center"
            spacing={4}
          >
            {cards.map(card => (
              <Card
                key={card.number}
                cardNumber={card.number}
                cardName={card.name}
                cardGithub={card.github}
                cardPhoto={card.photo}
              />
            ))}
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  );
}
