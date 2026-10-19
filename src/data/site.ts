// Everything personal that appears across the site. Edit freely.

export const site = {
  name: 'Sneha Choudhury',
  email: 'snehachoudhury.sc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sneha-choudhury-/',

  // Home page intro: replace with your own line.
  intro:
    'Dubai-raised, Fredericton-based marketer who loves turning ideas into growth, and blank canvases into paintings.',
  currently: 'Marketing & Operations Specialist at Mermax Ship Management',

  // Put a CV PDF in /public and set the filename here (use a version without your phone number).
  cv: '/Sneha_Choudhury_CV.pdf',

  // About-page photos are set in src/pages/about.astro (files live in /public/photos).
  // Image shown when the site is shared on LinkedIn, iMessage, etc.
  shareImage: '/photos/og.jpg',

  artistStatement:
    'Canvas, vinyl, pumpkins: if it holds still long enough, I’ll paint it. My work moves between calm landscapes and seasonal one-offs, mostly in acrylic and watercolour.',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/experience/', label: 'Experience' },
  { href: '/art/', label: 'Art' },
];
