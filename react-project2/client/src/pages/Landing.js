import React from 'react';
import { Box, Button, Card, CardContent, CircularProgress, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  progress: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const steps = [
  { step: 1, services: ['AWS', 'GCP', 'Azure'] },
  { step: 2, services: ['GitHub', 'GitLab', 'Bitbucket'] },
  { step: 3, services: ['MongoDB', 'RedisDB', 'PostgreSQL'] },
];

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Hi User !
      </Typography>
      <Typography variant="subtitle1">
        Welcome to XeroCode Ecosystem
      </Typography>
      
      {/* Steps */}
      {steps.map((stepData) => (
        <Box my={4} key={stepData.step}>
          <Typography variant="h6">Step {stepData.step}</Typography>
          <Grid container spacing={3}>
            {stepData.services.map((service) => (
              <Grid item xs={4} key={service}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6">{service}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      {/* Progress Bar */}
      <Box position="relative" display="inline-flex" className={classes.progress}>
        <CircularProgress variant="determinate" value={66} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">
            {`${Math.round(66)}%`}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
