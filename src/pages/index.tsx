import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '@/components/Main';


export default function Home() {
  return (
  <div>
    <Head>
      <title>Armandas | Front-End Developer</title>
      <meta name='description' content='Generated by next js' />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Main />
  </div>
  );
  
}
