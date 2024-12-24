import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session | null }>) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Story Generator</title>
      </Head>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </SessionProvider>
  );
}

export default MyApp;
