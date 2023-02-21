import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '500': '#FFBA08',
    },
    gray: {
      '500': '#47585B',
      '300': '#999999',
      '150': '#DADADA',
      '50': '#F5F8FA',
    },
    black: {
      '900': '#000000',
    },
    white: {
      '900': '#FFFFFF',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white.900',
        color: 'gray.500',
      },
    },
  },
});
