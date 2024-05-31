import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '20px'
  },
  card: {
    padding: '20px',
    textAlign: 'center',
    color: 'black',
    marginBottom: '20px'
  },
  title: {
    marginBottom: '20px'
  }
});

const Company = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Choose A Template To Deploy An Application 🚀
      </Typography>
      <Grid container spacing={3}>
        {[...Array(6)].map((e, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6">Import Existing App</Typography>
                <Typography color="textSecondary">
                  Import Your Settings App From Your Own Repository
                </Typography>
              </CardContent>
              <Button variant="contained" color="primary">
                Deploy
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Company;
