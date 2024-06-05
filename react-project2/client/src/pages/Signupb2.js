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
import wave from '../assets/wave.svg';

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    backgroundColor: '#fff',
    border: '3px solid silver',
    borderTopRightRadius: '30px',
    borderBottomLeftRadius: '30px',
    padding: theme.spacing(2),
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#fff',
    padding: theme.spacing(5),
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1),
    width: '45%',
    zIndex: 1,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#1F64FF',
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
    color: 'black'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: theme.spacing(1, '1%'),
    whiteSpace: 'nowrap',
    textTransform: 'none',
  },
  link: {
    marginTop: theme.spacing(2),
  },
  wave: {
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100px',
    background: `url(${wave}) no-repeat`,
    backgroundSize: 'cover',
    zIndex: 0,
  },
  mainBackground: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #DAE9FF, #ffffff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextSmall: {
    fontSize: '0.8rem',
    color: 'textSecondary',
  },
  welcomeText: {
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    fontSize: '2rem',
  },
}));

function Signup() {
  const classes = useStyles();

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const fullName = `${firstName} ${lastName}`;

    const user = {
      email,
      password,
      name : fullName
    };

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Signup successful', result);

        // Update the user context
        setUser(result.user);
        console.log('User context updated', result.user)

        // Redirect to the onboarding page
        navigate('/onboarding');
      } else {
        const error = await response.json();
        console.error('Signup failed', error);
      }
    } catch (error) {
      console.error('An error occurred during signup', error);
    }
  };

  const HandleGoogleLogin = () => {
    window.location.href = `http://localhost:5000/api/auth/google`;
  };

  const HandleGithubLogin = () => {
    window.location.href = `http://localhost:5000/api/auth/github`;
  };

  return (
    <Box className={classes.mainBackground}>
      <Container maxWidth="md" className={classes.outerContainer}>
        <Box className={classes.container}>
          <Typography variant="h5" className={classes.welcomeText}>Welcome!</Typography>
          <Box className={classes.dividerLine} />
          <Typography variant="body1" color="textSecondary">
            Create Your Account
          </Typography>
          <Box className={classes.dividerLine} />
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
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
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
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
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
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" className={classes.submit}>
              SIGN UP
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
            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                className={`${classes.button} ${classes.buttonTextSmall}`}
                endIcon={<img src={google} alt="Google login" />}
                onClick={() => HandleGoogleLogin()}
              >
                Sign Up With Google
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                className={`${classes.button} ${classes.buttonTextSmall}`}
                endIcon={<img src={github} alt="Github login" />}
                onClick={() => HandleGithubLogin()}
              >
                Sign Up With Github
              </Button>
            </Grid>
          </Grid>
          <Box className={classes.link}>
            <Typography variant="body2" color="textSecondary" align="center">
              Already have an Account? <Link to="/signin">LOGIN</Link>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.container}>
          <Box className={classes.wave} />
        </Box>
      </Container>
    </Box>
  );
}

export default Signup;
