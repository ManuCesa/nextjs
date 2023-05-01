import Head from 'next/head';
import { isMobile } from 'react-device-detect';

function Roadmap() {
  let backgroundImageUrl = '/assets/bg/RoadmapF.gif';

  if (isMobile) {
    backgroundImageUrl = '/assets/bg/RoadMapSM.gif';
  }

  return (
    <main
      className={`flex flex-col min-h-screen justify-center items-center bg-[url("${backgroundImageUrl}")] bg-top bg-cover px-5 pt-10`}
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
