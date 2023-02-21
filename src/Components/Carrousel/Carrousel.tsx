import 'swiper/css';
import 'swiper/css/bundle';

import { Box } from '@chakra-ui/react';
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CarrouselItem } from './CarrouselItem';

interface CountryData {
  bgImg: string;
  title: string;
  description: string;
}

const countryData: CountryData[] = [
  {
    bgImg:
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'América do Norte',
    description: 'Desenvolvido, multicultural e influente na economia global.',
  },
  {
    bgImg:
      'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'América do Sul',
    description: 'Rico em cultura, recursos naturais e diversidade geográfica.',
  },
  {
    bgImg:
      'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'Ásia',
    description: 'Maior continente, rico em diversidade cultural e geográfica.',
  },
  {
    bgImg:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'África',
    description: 'Berço da humanidade, rica em diversidade cultural e natural.',
  },
  {
    bgImg:
      'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'Europa',
    description: 'Rica em história, cultura e diversidade geográfica.',
  },
  {
    bgImg:
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'Oceania',
    description: 'Cenário de beleza natural e cultura diversa.',
  },
];

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
        {countryData.map(({ bgImg, description, title }) => (
          <SwiperSlide key={title}>
            <CarrouselItem
              bgImg={bgImg}
              title={title}
              description={description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
