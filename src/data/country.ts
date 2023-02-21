interface CountryData {
  slug: string;
  bgImg: string;
  title: string;
  subtitle: string;
  description: string;
  countrySize: number;
  languagesSize: number;
}

export const countryData: CountryData[] = [
  {
    slug: 'north-america',
    bgImg:
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'América do Norte',
    subtitle: 'Desenvolvido, multicultural e influente na economia global.',
    description:
      'A América do Norte é um continente conhecido por sua diversidade cultural e natural, oferecendo aos turistas paisagens deslumbrantes, cidades modernas, uma rica gastronomia, bem como atrações históricas e culturais, incluindo museus e locais de patrimônio.',
    countrySize: 3,
    languagesSize: 256,
  },
  {
    slug: 'south-america',
    bgImg:
      'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'América do Sul',
    subtitle: 'Rico em cultura, recursos naturais e diversidade geográfica.',
    description:
      'A América do Sul é um continente de grande riqueza cultural e natural, oferecendo aos turistas uma variedade de atrações, desde praias exóticas e florestas tropicais até cidades históricas e sítios arqueológicos. A região é conhecida por sua música vibrante, gastronomia única e hospitalidade calorosa.',
    countrySize: 12,
    languagesSize: 456,
  },
  {
    slug: 'asia',
    bgImg:
      'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'Ásia',
    subtitle: 'Maior continente, rico em diversidade cultural e geográfica.',
    description:
      'A Ásia é o maior e mais diverso continente do mundo, oferecendo aos turistas uma experiência única. Com sua rica história, cultura e tradições, a Ásia oferece uma infinidade de destinos turísticos fascinantes, incluindo templos budistas, praias de areia branca, montanhas majestosas e uma rica gastronomia.',
    countrySize: 50,
    languagesSize: 2300,
  },
  {
    slug: 'africa',
    bgImg:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'África',
    subtitle: 'Berço da humanidade, rica em diversidade cultural e natural.',
    description:
      'A África é um continente de beleza natural sem igual, com uma rica diversidade de vida selvagem, paisagens, culturas e tradições. Os turistas podem explorar savanas vastas, desertos fascinantes, praias de areia branca e aprender sobre a história e a cultura dos povos locais em locais históricos e museus.',
    countrySize: 54,
    languagesSize: 2000,
  },
  {
    slug: 'europe',
    bgImg:
      'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'Europa',
    subtitle: 'Rica em história, cultura e diversidade geográfica.',
    description:
      'A Europa é um continente com uma rica história e cultura, oferecendo aos turistas uma variedade de atrações, desde cidades vibrantes até vilarejos pitorescos. A região é conhecida por sua arte, arquitetura, música, gastronomia e vida noturna.',
    countrySize: 50,
    languagesSize: 24,
  },
  {
    slug: 'oceania',
    bgImg:
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&q=80',
    title: 'Oceania',
    subtitle: 'Cenário de beleza natural e cultura diversa.',
    description:
      ' A Oceania é um continente de beleza natural surpreendente, oferecendo aos turistas praias de areia branca, águas cristalinas, paisagens exóticas e cidades modernas. A região é conhecida por sua cultura diversa, incluindo a rica cultura aborígene da Austrália e a cultura polinésia das ilhas do Pacífico.',
    countrySize: 14,
    languagesSize: 1470,
  },
];
