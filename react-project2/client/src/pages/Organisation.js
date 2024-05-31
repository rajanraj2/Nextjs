import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#ADD8E6', // light blue
  },
  logoutButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  card: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  welcomeText: {
    marginBottom: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Organisation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" className={classes.logoutButton}>
        Log Out
      </Button>
      <Card className={classes.card}>
        <Typography variant="h5" className={classes.welcomeText}>
          Welcome Arya Soni!
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
        <Link to="/landing"> Self Hosting </Link>
        </Button>
        <Button variant="outlined" color="primary" className={classes.button}>
        <Link to="/landing"> XeroCode Hosting </Link>
        </Button>
      </Card>
    </div>
  );
};

export default Organisation;
