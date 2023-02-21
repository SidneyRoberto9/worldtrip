import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { MainBanner } from '../Components/Banner/MainBanner';
import { Carrousel } from '../Components/Carrousel/Carrousel';
import { Header } from '../Components/Header';
import { TravelTypes } from '../Components/Travel/TravelTypes';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
        <meta name="description" content="WorldTrip Viagens" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box overflowX={'hidden'}>
        <Header />
        <MainBanner />

        <TravelTypes />

        <Center margin={'0 auto'} w={'90px'} bg={'gray.500'}>
          <Divider orientation="horizontal" />
        </Center>

        <Flex
          align={'center'}
          justify={'center'}
          mx={'14'}
          direction={'column'}
          h={'205px'}
        >
          <Text
            fontWeight={'medium'}
            fontSize={'4xl'}
            textAlign={'center'}
            lineHeight={'54px'}
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </Flex>

        <Carrousel />
      </Box>
    </>
  );
}
