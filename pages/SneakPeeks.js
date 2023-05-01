import Head from 'next/head';
import Image from 'next/image';
import SQ1 from '/public/assets/SQ1.png';
import SQ2 from '/public/assets/SQ2.png';
import SQ3 from '/public/assets/SQ3.png';
import SQ4 from '/public/assets/SQ4.png';
import SQ5 from '/public/assets/SQ5.png';
import SQ6 from '/public/assets/SQ6.png';
import SQ7 from '/public/assets/SQ7.png';
import SQ8 from '/public/assets/SQ8.png';
import SQ9 from '/public/assets/SQ9.png';
import SQ10 from '/public/assets/SQ10.png';
import SQ11 from '/public/assets/SQ11.png';
import SQ12 from '/public/assets/SQ12.png';
import SQ13 from '/public/assets/SQ13.png';
import SQ14 from '/public/assets/SQ14.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper';
import 'swiper/css';
import React, { useRef, useState } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { Autoplay } from 'swiper';
function SneakPeeks() {
  return (
    <main
      className={`flex flex-col min-h-screen justify-center items-center bg-[url("/assets/bg/team.gif")] bg-center bg-cover px-5 pt-10`}
    >
      <Head>
        <title>Seal Squad - SneakPeeks</title>
        <meta name="description" content="Seal Squad" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./global.css" />
      </Head>

      <div className="BoxSwiper">
        <Swiper
          navigation={true}
          modules={[Autoplay, Navigation, EffectCards]}
          effect={'cards'}
          grabCursor={true}
          centeredSlides={true}
        >
          <SwiperSlide>
            <Image src={SQ1} alt="SQ1F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ2} alt="SQ2F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ3} alt="SQ3F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ4} alt="SQ4F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ5} alt="SQ5F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ6} alt="SQ6F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ7} alt="SQ6F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ8} alt="SQ6F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ9} alt="SQ6F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ10} alt="SQ6F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ11} alt="SQ6F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ12} alt="SQ6F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ13} alt="SQ6F" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={SQ14} alt="SQ6F" />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default SneakPeeks;
