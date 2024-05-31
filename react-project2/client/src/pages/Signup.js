import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {  
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import google from '../assets/google.png';
import github from '../assets/github.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#007bff',
    color: '#fff',
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.text.secondary,
    margin: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(1, 0),
  },
  link: {
    marginTop: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
}));

function Signup() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <Container maxWidth="xs">
      <Box className={classes.container}>
        <Typography variant="h4" className={classes.title}>Hello!</Typography>
        <Typography variant="h6">Create Your Account</Typography>
      </Box>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="fname"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lname"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email-Id"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
        >
          SIGN UP
        </Button>
      </form>
      <Box className={classes.divider}>
        <Typography variant="body2" color="textSecondary" align="center">
          OR
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            fullWidth
            className={classes.button}
            startIcon={<img src={google} alt="Google login" />}
          >
            Sign Up With Google
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            fullWidth
            className={classes.button}
            startIcon={<img src={github} alt="Github login" />}
          >
            Sign Up With Github
          </Button>
        </Grid>
      </Grid>
      <Box className={classes.link}>
        <Typography variant="body2" color="textSecondary" align="center">
          Already have an Account? <Link to="/login">LOGIN</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Signup;
