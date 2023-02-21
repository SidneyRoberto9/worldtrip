import { Flex } from '@chakra-ui/react';

import { TravelIcon } from './TravelIcon';

const travelTypes = [
  {
    icon: '/icons/cocktail.svg',
    children: 'vida noturna',
  },
  {
    icon: '/icons/surf.svg',
    children: 'praia',
  },
  {
    icon: '/icons/building.svg',
    children: 'moderno',
  },
  {
    icon: '/icons/museum.svg',
    children: 'clássico',
  },
  {
    icon: '/icons/earth.svg',
    children: 'e mais...',
  },
];

export function TravelTypes() {
  return (
    <Flex
      align={'center'}
      justify={'space-evenly'}
      pt={'16'}
      m={'5rem auto'}
      ml={'-10'}
    >
      {travelTypes.map(({ icon, children }) => (
        <TravelIcon icon={icon} children={children} key={children} />
      ))}
    </Flex>
  );
}
