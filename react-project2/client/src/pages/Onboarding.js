import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    position: 'relative',
  },
  container: {
    backgroundColor: '#fff',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(4, 0),
  },
  button: {
    width: '30%',
    height: '60px',
    fontSize: '16px',
  },
  orgNameContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  orgNameField: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  logoutButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Onboarding = () => {
  const classes = useStyles();
  const [orgName, setOrgName] = useState('');

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logged out');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submit logic
    console.log('Organization Name:', orgName);
  };

  return (
    <Box className={classes.root}>
      <Button variant="outlined" className={classes.logoutButton} onClick={handleLogout}>
        Log Out
      </Button>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Welcome Arya Soni !
        </Typography>
        <Box className={classes.buttonGroup}>
          <Button variant="outlined" className={classes.button}>
            Developer
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Organisation
          </Button>
          <Button variant="outlined" className={classes.button}>
            Company
          </Button>
        </Box>
        <form onSubmit={handleSubmit} className={classes.orgNameContainer}>
          <TextField
            variant="outlined"
            label="Organization Name"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            className={classes.orgNameField}
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.submitButton}
          >
            SUBMIT
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Onboarding;
