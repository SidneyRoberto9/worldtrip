import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function MainBanner() {
  return (
    <Box bgImg={"url('/BannerImg.svg')"} h={335} bgSize={'cover'}>
      <Flex align={'center'} justify={'space-evenly'} px={'6'}>
        <Flex maxW={'524px'} direction={'column'} gap={'5'} m={'10'} py={'10'}>
          <Heading
            color={'gray.50'}
            fontWeight={'medium'}
            fontSize={'4xl'}
            lineHeight={'10'}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>

          <Text
            color={'gray.150'}
            fontWeight={'normal'}
            fontSize={'xl'}
            lineHeight={'7'}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Image src="/airplane.svg" alt="airplane" mt={'4.75rem'} mr={'20'} />
      </Flex>
    </Box>
  );
}
