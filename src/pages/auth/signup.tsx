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

const inter = Inter({ subsets: ['latin'] })



const theme = createTheme();

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
                        Sign up
                    </Typography>
                    <br/>
                    <Typography component="h1" variant="h6">
                        소셜 계정으로 간편하게 가입하세요
                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <Image width={'100'} height={'100'} src={'/kakao.svg'} alt={'kakao'}/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Image width={'100'} height={'100'} src={'/naver.png'} alt={'kakao'}/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Image width={'100'} height={'100'} src={'/google.svg'} alt={'kakao'}/>
                            </Grid>
                        </Grid>


                    </Box>
                    <Typography component="h1" variant="h6" >
                        <a onClick={()=>router.push('/auth/normal')}>
                            일반 회원가입
                        </a>

                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </main>
        </>
    )
}