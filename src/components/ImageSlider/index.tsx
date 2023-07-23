import { FC, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/swiper-bundle.css';

import Image from 'next/image';

SwiperCore.use([Autoplay]);

const ImageSlider: FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      <SwiperSlide>
        <Image src="/assets/images/slide-img.webp" width={1140} height={350} alt="Picture is here in Slider" priority />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/assets/images/slide-img2.jpg" width={1140} height={350} alt="Picture is here in Slider" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
