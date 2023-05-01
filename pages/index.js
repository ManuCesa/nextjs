import Head from 'next/head';
import Image from 'next/image';
import Mint from '../components/Mint';
import React, { useRef, useState, useEffect} from 'react';


export default function Home() {

  const [backgroundImageUrl, setBG] = useState('/assets/bg/home.gif')

  useEffect(() => {
    if(window.innerWidth < 500) {
      setBG('/assets/bg/TankSm.gif')
    }
  }, [])


  return (
    <main
    className="flex flex-col min-h-screen justify-center items-center"
    style={{ 
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundColor: '#F9FAFB',
      opacity: 0.1,
    }}
  >
      <Head>
        <title>Seal Squad - Home</title>
        <meta name="description" content="Seal Squad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex lg:w-[90%] w-full lg:justify-end justify-center items-center ">
        <p className="lg:w-[55%] w-full lg:text-3xl text-lg bg-[#F9FAFB]/10 p-3 lg:text-left text-center rounded-lg">
          3,333 pixelated seals invading Web3.<br></br>
          Establish your squad to complete top secret missions for rewards
        </p>
      </div>
    </main>
  );
}
