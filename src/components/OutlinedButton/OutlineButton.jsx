import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  button: {
    marginTop: '20px',
    fontSize: '2rem',
    border: '3px solid var(--color-primary)',
    color: 'var(--color-white)',
    background: 'var(--color-primary)',
    textTransform: 'none',
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <Button variant="outlined" className={classes.button}>
        Learn more
    </Button>
  );
}
