import { AppProps } from 'next/app';

export default function AppShell({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
