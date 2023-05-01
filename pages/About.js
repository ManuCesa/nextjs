import Head from 'next/head';
import { isMobile } from 'react-device-detect';

function About() {
  let backgroundImageUrl = '/assets/bg/about.gif';

  if (isMobile) {
    backgroundImageUrl = '/assets/bg/AereoSmall.gif';
  }

  return (
    <main
      className={`flex flex-col min-h-screen justify-center items-center bg-[url("${backgroundImageUrl}")] bg-center bg-cover px-5 pt-10`}
    >
      <Head>
        <title>Seal Squad - About</title>
        <meta name="description" content="Seal Squad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-start items-center py-14 lg:py-0 ">
        <p className="lg:w-[60%] w-full bg-[#F9FAFB]/10 lg:text-3xl text-base text-black">
          Introducing Seal Squad, a collection of 3,333 unique, pixelated seals
          invading Web3! These adorable creatures are anything but harmless...
          Don t let their cuteness fool you.
          <br></br>
          <br></br>
          To join the action, you ll need to establish your #squad of seals,
          which you ll need to complete missions for rewards. Missions will vary
          in difficulty, and while some can be completed solo, others will
          require an elite team of three. The stakes are high, but the rewards
          are even higher. Choose your squad carefully.
        </p>
      </div>
    </main>
  );
}

export default About;
