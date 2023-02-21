import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface CarrouselItemProps {
  bgImg: string;
  title: string;
  description: string;
  slug: string;
}

export function CarrouselItem({
  bgImg,
  title,
  description,
  slug,
}: CarrouselItemProps) {
  return (
    <Box position={'relative'}>
      <Box
        bgImg={`url(${bgImg})`}
        bgPosition={'center'}
        h={550}
        maxW={'calc(100vw - 200px)'}
        bgSize={'cover'}
        filter={'brightness(0.35)'}
        position={'relative'}
      />

      <Link href={`/${slug}`}>
        <Center
          position={'absolute'}
          zIndex={2}
          right={'50%'}
          top={'50%'}
          transform={'translate(50%, -50%)'}
        >
          <Flex
            align={'center'}
            justify={'center'}
            gap={'4'}
            direction={'column'}
            margin={'0 auto'}
            h={550}
          >
            <Heading
              color={'gray.50'}
              fontSize={'5xl'}
              fontWeight={'bold'}
              textAlign={'center'}
            >
              {title}
            </Heading>
            <Text
              color={'gray.150'}
              fontSize={'2xl'}
              fontWeight={'bold'}
              textAlign={'center'}
              lineHeight={'9'}
            >
              {description}
            </Text>
          </Flex>
        </Center>
      </Link>
    </Box>
  );
}
