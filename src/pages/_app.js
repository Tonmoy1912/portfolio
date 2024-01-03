import '@/styles/globals.css'
import Head from 'next/head'
import { Fragment } from 'react'
import Navbar from '@/components/Navbar';
import Navigation from '@/components/Navigation';

export default function App({ Component, pageProps }) {
  return (<Fragment>
    <Head>
      <title>Tonmoy's Portfolio</title>
      <meta name='description' content='My portfolio website'/>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
    <Navigation/>
  </Fragment>);
}
