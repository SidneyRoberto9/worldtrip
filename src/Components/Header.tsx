import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <Flex w={'100vw'} h={100} align={'center'} justify={'center'}>
      <Link href={'/'}>
        <Image src="/logo.svg" alt="logo" />
      </Link>
    </Flex>
  );
}
