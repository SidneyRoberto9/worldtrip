import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex w={'100vw'} h={100} align={'center'} justify={'center'}>
      <Image src="/logo.svg" alt="logo" />
    </Flex>
  );
}
