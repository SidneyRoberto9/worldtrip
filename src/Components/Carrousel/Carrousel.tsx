import 'swiper/css';
import 'swiper/css/bundle';

import { Box } from '@chakra-ui/react';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { countryData } from '../../data/country';
import { CarrouselItem } from './CarrouselItem';

export function Carrousel() {
  return (
    <Box mx={'100px'} mb={'50px'}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {countryData.map(({ bgImg, subtitle, title, slug }) => (
          <SwiperSlide key={slug}>
            <CarrouselItem
              bgImg={bgImg}
              title={title}
              description={subtitle}
              slug={slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
