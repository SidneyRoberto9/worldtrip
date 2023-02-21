import { Box, Heading } from '@chakra-ui/react';

interface MainLandBannerProps {
  bgImg: string;
  title: string;
}

export function MainLandBanner({ bgImg, title }: MainLandBannerProps) {
  const bannerUrl = `url('${bgImg}')`;

  return (
    <Box position={'relative'}>
      <Box
        bgImg={bannerUrl}
        h={500}
        bgSize={'cover'}
        filter={'brightness(0.75)'}
        zIndex={1}
      />

      <Heading
        fontWeight={'semibold'}
        fontSize={'4xl'}
        lineHeight={'4.5rem'}
        color={'gray.50'}
        position={'absolute'}
        zIndex={2}
        left={'8.75rem'}
        bottom={'3.25rem'}
      >
        {title}
      </Heading>
    </Box>
  );
}
