import Head from 'next/head';
import React, { useRef, useState, useEffect } from 'react';


function Roadmap() {
 
  const [backgroundImageUrl, setBG] = useState('/assets/bg/RoadmapF.gif')

  useEffect(() => {
    if(window.innerWidth < 500) {
      setBG('/assets/bg/RoadMapSM.gif')
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
        <title>Seal Squad - Roadmap</title>
        <meta name="description" content="Seal Squad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </main>
  );
}

export default Roadmap;
