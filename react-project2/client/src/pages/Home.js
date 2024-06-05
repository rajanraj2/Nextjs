import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(to bottom, #DAE9FF, #ffffff)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(2, 0),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Welcome to Demo Project
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/signup"
          fullWidth
          className={classes.button}
        >
          Signup
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={RouterLink}
          to="/login"
          fullWidth
          className={classes.button}
        >
          Login
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
