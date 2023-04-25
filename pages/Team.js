import Head from 'next/head';
import Image from 'next/image';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';
import SQ1F from '/public/assets/SQ1F.png';

function Team() {
  return (
    <main
      className={`flex flex-col min-h-screen justify-center items-center bg-[url("/assets/bg/team.gif")] bg-center bg-cover px-5 pt-10`}
    >
      <Head>
        <title>Seal Squad - Team</title>
        <meta name="description" content="Seal Squad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start w-full py-14 lg:py-0">
        <div className="flex justify-center items-center gap-5">
          <div className="sm:w-[250px] w-[150px] bg-white/70 rounded-lg p-3">
            <Image src={Team1} alt="team1" />
          </div>
          <div className="sm:w-[250px] w-[150px]  bg-white/70 rounded-lg p-3">
            <Image src={Team2} alt="team2" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Team;
