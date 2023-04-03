import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useRouter} from 'next/router'

function Copyright(props: any) {

    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Box
              sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
              <Typography component="h1" variant="h5">
                  Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                  />
                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                  />
                  <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                  />
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"

                      sx={{ mt: 3, mb: 2 }}
                  >
                      Sign In
                  </Button>
                  <Grid container>
                      <Grid item xs>
                          <Link onClick={()=>router.push('/auth/account')} variant="body2">
                              Forgot password?
                          </Link>
                      </Grid>
                      <Grid item>
                          <Link onClick={()=>router.push('/auth/signup')} variant="body2">
                              {"Don't have an account? Sign Up"}
                          </Link>
                      </Grid>
                  </Grid>
              </Box>
          </Box>
      </main>
    </>
  )
}