import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import Image1 from "../../assets/images/swiper_1.jpg";
import Image2 from "../../assets/images/swiper_2.jpg";
import Image3 from "../../assets/images/swiper_3.jpg";
import Image4 from "../../assets/images/swiper_4.jpg";
import Image5 from "../../assets/images/swiper_5.jpg";
import Image6 from "../../assets/images/swiper_6.jpg";
import Image7 from "../../assets/images/swiper_7.jpg";

const FlyersCarousel = () => {
    return (
        <div className="container">
                        <div className='container-project__lpchat--title'>
                <h1 className='project__lpchat--title'>DISEÑO GRÁFICO</h1>
            </div>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 3,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={Image1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image7} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default FlyersCarousel;
