export interface CardInterface {
  id: string;
  title: string;
  body: string;
  image?: string;
}


export const cardList: CardInterface[] = [
  {
    id: '1',
    title: 'Card 1',
    body: 'This is the content of Card 1.',
    image: 'https://randomuser.me/api/portraits/men/70.jpg',
  },
  {
    id: '2',
    title: 'Card 2',
    body: 'This is the content of Card 2.',
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
  {
    id: '3',
    title: 'Card 3',
    body: 'This is the content of Card 3.',
    image: 'https://randomuser.me/api/portraits/men/72.jpg',
  },
  {
    id: '4',
    title: 'Card 4',
    body: 'This is the content of Card 4.',
    image: 'https://randomuser.me/api/portraits/men/73.jpg',
  },
  {
    id: '5',
    title: 'Card 5',
    body: 'This is the content of Card 5.',
    // No image specified for Card 5
  },
];
