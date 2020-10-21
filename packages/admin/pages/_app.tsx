import { AppProps } from 'next/app';
import Head from 'next/head';
import { Navbar } from '../components/Navbar';

import '../styles/global.css';

export default function AppShell({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link href='https://fonts.googleapis.com/css2?family=Staatliches&display=swap' rel='stylesheet' />
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}
