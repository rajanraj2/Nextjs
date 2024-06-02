import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { UserContext } from './UserContext';

import google from '../assets/google.png';
import github from '../assets/github.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
    background: '#fff',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
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
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
  },
  dividerLine: {
    flexGrow: 1,
    height: '1px',
    backgroundColor: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1, 0),
  },
  link: {
    marginTop: theme.spacing(2),
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '150px',
    background: 'url(wave.svg) no-repeat',
    backgroundSize: 'cover',
  },
}));

function Signin() {
  const classes = useStyles();

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Signin successful', result);

        // Extract user information
        const userId = result.userId;
        console.log('User ID:', userId);

        // Update the user context
        setUser(result.user);
        console.log('User context updated', result.user)

        // Redirect to the onboarding page
        navigate('/onboarding');
      } else {
        const error = await response.json();
        console.error('Signin failed', error);
      }
    } catch (error) {
      console.error('An error occurred during signin', error);
    }
  };

  const HandleGoogleLogin = () => {
    window.location.href = `http://localhost:5000/api/auth/google`;
  };

  const HandleGithubLogin = () => {
    window.location.href = `http://localhost:5000/api/auth/github`;
  };

  return (
    <Box position="relative" minHeight="100vh" bgcolor="#f0f2f5">
      <Container maxWidth="xs" className={classes.container}>
        <Typography variant="h5">Welcome Arya Soni!</Typography>
        <Typography variant="body1" color="textSecondary">
          Login To Your Account
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email-Id"
            name="email"
            autoComplete="email"
            autoFocus
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
          <Button type="submit" fullWidth variant="contained" className={classes.submit}>
            LOGIN
          </Button>
        </form>
        <Box className={classes.divider}>
          <Box className={classes.dividerLine} />
          <Typography variant="body2" color="textSecondary" align="center" mx={2}>
            OR
          </Typography>
          <Box className={classes.dividerLine} />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              className={classes.button}
              startIcon={<img src={google} alt="Google login" />}
              onClick={() => HandleGoogleLogin()}
            >
              Login With Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              className={classes.button}
              startIcon={<img src={github} alt="Github login" />}
              onClick={() => HandleGithubLogin()}
            >
              Login With Github
            </Button>
          </Grid>
        </Grid>
        <Box className={classes.link}>
          <Typography variant="body2" color="textSecondary" align="center">
            Don't have an Account? <Link to="/signup">SIGN UP</Link>
          </Typography>
        </Box>
      </Container>
      <Box className={classes.wave} />
    </Box>
  );
}

export default Signin;
