import Head from 'next/head';
import Image from 'next/image';
import SQ1F from '/public/assets/SQ1F.png';
import SQ2F from '/public/assets/SQ2F.png';
import SQ3F from '/public/assets/SQ3F.png';
import SQ4F from '/public/assets/SQ4F.png';
import SQ5F from '/public/assets/SQ5F.png';
import SQ6F from '/public/assets/SQ6F.png';
import SQ7F from '/public/assets/SQ7F.png';
import SQ8F from '/public/assets/SQ8F.png';
import SQ9F from '/public/assets/SQ9F.png';
import SQ10F from '/public/assets/SQ10F.png';
import SQ11F from '/public/assets/SQ11F.png';
import SQ12F from '/public/assets/SQ12F.png';
import SQ13F from '/public/assets/SQ13F.png';
import SQ14F from '/public/assets/SQ14F.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper';
import 'swiper/css';
import React, { useRef, useState } from 'react';
import 'swiper/css/navigation';
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
      </Head>
      <div className="w-3/4 flex justify-center items-center">
        <Swiper
          navigation={true}
          slidesPerView={3}
          modules={[Autoplay, Navigation, EffectCards]}
          effect={'cards'}
          grabCursor={true}
          centeredSlides={true}
        >
          <SwiperSlide>
            <div>
              <Image src={SQ1F} alt="SQ1F" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={SQ2F} alt="SQ2F" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={SQ3F} alt="SQ3F" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={SQ4F} alt="SQ4F" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={SQ5F} alt="SQ5F" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={SQ6F} alt="SQ6F" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}

export default SneakPeeks;