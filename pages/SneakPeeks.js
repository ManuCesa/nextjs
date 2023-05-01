import Head from 'next/head';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper';
import 'swiper/css';
import React, { useRef, useState } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { Autoplay } from 'swiper';
function SneakPeeks() {
  let backgroundImageUrl = '/assets/bg/team.gif';

  if (isMobile) {
    backgroundImageUrl = '/assets/bg/BarcaSm.gif';
  }

  return (
    <main
      className={`flex flex-col min-h-screen justify-center items-center bg-[url("${backgroundImageUrl}")] bg-center bg-cover px-5 pt-10`}
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
            <Image src="/public/assets/SQ1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ7.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ8.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ9.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ10.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ11.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ12.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ13.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/public/assets/SQ14.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default SneakPeeks;
