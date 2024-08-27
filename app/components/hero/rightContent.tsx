'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

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
                        src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGNvZGluZyUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Image 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1706569344019-8bdec7130196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbiUyMGNvZGluZyUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Image 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661540624244-2e9e297bd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG1hbiUyMGNvZGluZyUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Image 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1683133576454-c7942fe26467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fG1hbiUyMGNvZGluZyUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Image 4"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default RightContent