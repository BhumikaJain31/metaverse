import Head from 'next/head'
import Login from '../components/login'
import { useMoralis } from 'react-moralis';
import Welcome from '../components/Welcome';

export default function Home() {
  // const isAuthenticate = false;
  const {isAuthenticated, logout} = useMoralis();
  
  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse is here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Welcome />
    </div>
  )
}
