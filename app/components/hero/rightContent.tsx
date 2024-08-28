'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const RightContent = () => {
    return (
        <div className="flex-1">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-[300px] h-[400px]"
            >
                <SwiperSlide>
                    <img
                        src="/me_1.jpg"
                        alt="Image 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/me_2.jpg"
                        alt="Image 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/me_3.jpg"
                        alt="Image 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/me_4.jpg"
                        alt="Image 4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/me_5.jpg"
                        alt="Image 4"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default RightContent