import { Image, Stack, Text } from '@chakra-ui/react';

interface TravelIconProps {
  icon: string;
  children: string;
}

export function TravelIcon({ icon, children }: TravelIconProps) {
  return (
    <Stack direction={'column'} align={'center'}>
      <Image src={icon} alt="cocktail" h={'85px'} w={'85px'} />
      <Text
        fontWeight={'semibold'}
        fontSize={'2xl'}
        lineHeight={'10'}
        color={'gray.500'}
      >
        {children}
      </Text>
    </Stack>
  );
}
