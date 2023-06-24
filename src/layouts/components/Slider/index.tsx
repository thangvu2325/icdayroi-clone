'use client';
import classNames from 'classnames/bind';
import styles from '@/layouts/components/Slider/Slider.module.scss';
import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import ImageSlider from '@/components/ImageSlider';
const cx = classNames.bind(styles);
const images = ['/assets/images/slide-img.webp', '/assets/images/slide-img2.jpg'];
interface SliderProps {}
const Slider: FunctionComponent<SliderProps> = (): ReactNode => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('container')}>
        <ImageSlider />
        <div className={cx('schedule-table')}>
          <div className={cx('time-work')}>Thời gian làm việc</div>
          <div className={cx('time')}>
            T2 - T6 : Sáng 7h30 {'>'} 12h00 : Chiều 13h30 {'>'} 20h00
          </div>
          <div className={cx('time')}>
            T7 - CN: Sáng 8h00 {'>'} 12h00 : Chiều 13h30 {'>'} 17h00
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
