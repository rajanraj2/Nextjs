import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Link,
  Box,
  Container,
  Grid,
  Stack,
} from '@material-ui/core';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5">Welcome Arya Soni!</Typography>
        <Typography variant="h5">Login To Your Account</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
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
          label="Passwort"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          LOGIN
        </Button>
      </form>
      <Box mt={2} display="flex" justifyContent="center">
        <Stack direction="row" spacing={2}>
          <hr style={{ width: '100%' }} />
          <Typography variant="body2" color="textSecondary" align="center">
            OR
          </Typography>
          <hr style={{ width: '100%' }} />
        </Stack>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="outlined" fullWidth startIcon={<img src="google.svg" alt="Google login" />}>
            Login With Google
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" fullWidth startIcon={<img src="github.svg" alt="Github login" />}>
            Login With Github
          </Button>
        </Grid>
      </Grid>
      <Box mt={2} display="flex" justifyContent="center">
        <Typography variant="body2" color="textSecondary" align="center">
          Don't have an Account? <Link href="/signup">SIGN UP</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Signin;
