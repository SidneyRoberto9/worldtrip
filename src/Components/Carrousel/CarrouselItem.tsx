import { Box } from '@chakra-ui/react';

export function CarrouselItem() {
  return (
    <Box
      bgImg={
        'url(https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80)'
      }
      bgPosition={'center'}
      h={550}
      maxW={'calc(100vw - 200px)'}
      bgSize={'cover'}
      filter={'brightness(0.4)'}
    >
      <h1>CarrouselItem</h1>
    </Box>
  );
}
