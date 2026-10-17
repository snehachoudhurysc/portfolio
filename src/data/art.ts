// The gallery. To add a piece:
//   1. Put the photo in /public/art/ (e.g. public/art/sunset.jpg)
//   2. Add an entry below with image: '/art/sunset.jpg'
// `ratio` is width/height of the photo, e.g. '4/5' for a portrait canvas, '3/2' for landscape.
// `completed` is the date you finished it (YYYY-MM-DD); the caption shows the year.
// Pieces are shown in the order listed here, numbered Fig. 01, Fig. 02, ...

export type Artwork = {
  title: string;
  year: number;
  medium: string;
  completed?: string;
  type: 'painting' | 'sketch';
  ratio: string;
  image: string | null;
};

export const artworks: Artwork[] = [
  {
    title: 'Mountain Blues',
    year: 2026,
    completed: '2026-08-23',
    medium: 'Acrylic and watercolour on canvas',
    type: 'painting',
    ratio: '1423/1922',
    image: '/art/mountain-blues.jpg',
  },
  {
    title: 'Yin Yang',
    year: 2026,
    completed: '2026-10-09',
    medium: 'Acrylic and watercolour on canvas',
    type: 'painting',
    ratio: '1585/2000',
    image: '/art/yin-yang.jpg',
  },
  {
    title: 'Doorway of Ghosts',
    year: 2025,
    completed: '2025-10-26',
    medium: 'Acrylic on pumpkin',
    type: 'painting',
    ratio: '4/5',
    image: '/art/doorway-of-ghosts.jpg',
  },
  {
    title: 'Fall Afternoon',
    year: 2025,
    completed: '2025-10-06',
    medium: 'Acrylic on vinyl',
    type: 'painting',
    ratio: '1/1',
    image: '/art/fall-afternoon.jpg',
  },
];
