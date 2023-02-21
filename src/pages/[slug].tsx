import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { MainLandBanner } from '../Components/Banner/MainLandBanner';
import { Header } from '../Components/Header';
import { countryData } from '../data/country';

export default function Mainland() {
  const router = useRouter();
  const { slug } = router.query;

  const continent = countryData.find(
    (country) => country.slug === String(slug),
  );

  if (continent === undefined) return null;

  return (
    <>
      <Head>
        <title>{continent.title} | WorldTrip</title>
        <meta name="description" content="WorldTrip Viagens" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box overflowX={'hidden'}>
        <Header />
        <MainLandBanner title={continent.title} bgImg={continent.bgImg} />

        <Flex my={'5rem'} align={'center'} justify={'center'} gap={'4.375rem'}>
          <Text maxW={600} textAlign={'justify'}>
            {continent.description}
          </Text>

          <Stack spacing={'9'} direction={'row'}>
            <Flex align={'center'} direction={'column'}>
              <Heading
                fontWeight={'semibold'}
                lineHeight={'9'}
                fontSize={'3xl'}
                color={'yellow.500'}
              >
                {continent.countrySize}
              </Heading>
              <Text
                fontWeight={'semibold'}
                lineHeight={'5'}
                fontSize={'md'}
                color={'gray.500'}
              >
                países
              </Text>
            </Flex>
            <Flex align={'center'} direction={'column'}>
              <Heading
                fontWeight={'semibold'}
                lineHeight={'9'}
                fontSize={'3xl'}
                color={'yellow.500'}
              >
                {continent.languagesSize}
              </Heading>
              <Text
                fontWeight={'semibold'}
                lineHeight={'5'}
                fontSize={'md'}
                color={'gray.500'}
              >
                línguas
              </Text>
            </Flex>
          </Stack>
        </Flex>

        <Box mx={'8.75rem'} my={'2rem'}>
          <Heading
            color={'gray.500'}
            fontWeight={'medium'}
            fontSize={'2xl'}
            lineHeight={'9'}
            textAlign={'left'}
          >
            Cidades +100
          </Heading>

          <Flex align={'center'} justify={'flex-start'}>
            <Box
              h={280}
              w={256}
              my={'3rem'}
              borderRadius={8}
              overflow={'hidden'}
              borderStyle={'solid'}
              borderWidth={'1px'}
              borderColor={'yellow.500'}
            >
              <Image
                src={continent.bgImg}
                alt="card"
                objectFit={'cover'}
                h={173}
                borderTopLeftRadius={4}
                borderTopRightRadius={4}
              />

              <Flex align={'center'} direction={'column'} gap={'0.875rem'}>
                <Heading
                  fontSize={'xl'}
                  fontWeight={'semibold'}
                  lineHeight={'5'}
                  color={'gray.500'}
                >
                  Londres
                </Heading>
                <Text
                  fontSize={'md'}
                  fontWeight={'semibold'}
                  lineHeight={'7'}
                  color={'gray.300'}
                >
                  Reino Unido
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
