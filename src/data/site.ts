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
  // Drop a file into /public and set the path. Leave as null to show a placeholder.
  signature: null as string | null, // e.g. '/signature.svg'

  artistStatement:
    '[Artist statement: one or two sentences about what you paint, sketch, and why.]',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/experience/', label: 'Experience' },
  { href: '/art/', label: 'Art' },
];
