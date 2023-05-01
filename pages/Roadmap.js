import Head from 'next/head';

function Roadmap() {


  let backgroundImageUrl = '/assets/bg/RoadmapF.gif';

  if (isMobile) {
    backgroundImageUrl = '/assets/bg/TankSm.gif';
  }



  return (
    <main
      className={`flex flex-col min-h-screen justify-center items-center bg-[url("/assets/bg/RoadmapF.gif")] bg-top bg-cover px-5 pt-10`}
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
