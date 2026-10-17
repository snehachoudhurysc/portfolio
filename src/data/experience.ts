// The big numbers (the résumé's Key Achievements). Each is said once, here, with where it happened.
export const stats = [
  { to: 4, dec: 0, pre: '', suf: '', label: 'vessels on 5-year charter contracts I helped secure.', where: 'Seamax Ship Management' },
  { to: 8, dec: 0, pre: '+', suf: '%', label: 'quarterly sales in three months, from $1.2M to $1.3M.', where: 'Seamax Ship Management' },
  { to: 149, dec: 0, pre: '', suf: 'K+', label: 'people reached by communications campaigns.', where: 'Irving Woodlands' },
];

// Newest first. The first entry is marked "Current".
// summary: one line under the title. highlights: the best two, always visible.
// more: shown when the visitor clicks "More details".
// Keep the big numbers in `stats` above rather than repeating them here.
export type Role = {
  years: string;
  company: string;
  role: string;
  place: string;
  summary: string;
  highlights: string[];
  more?: string[];
};

export const timeline: Role[] = [
  {
    years: 'Apr 2026 – Present',
    company: 'Mermax Ship Management & Marine Services',
    role: 'Marketing & Operations Specialist',
    place: 'Moncton, NB',
    summary: 'Marketing, business development and shipping operations for a ship-management and marine-services company.',
    highlights: [
      'Met with 5 shipyards in the Halifax region to identify export/import opportunities and build a new-business pipeline.',
      'Plan and execute digital and print marketing campaigns, coordinating timelines and deliverables across channels.',
    ],
    more: [
      'Analyze competitors, pricing trends and customer needs to inform business development strategy.',
      'Coordinate shipment scheduling, documentation and tracking; report on volumes, delivery performance and service metrics.',
      'Represent the company at trade shows and client meetings, and resolve client issues with management.',
    ],
  },
  {
    years: 'Jan – Apr 2026',
    company: 'Human–AI Collaboration Research Lab, UNB',
    role: 'Research Assistant',
    place: 'Fredericton, NB',
    summary: 'Research support and project promotion for a university research lab.',
    highlights: [
      'Supported literature reviews, data collection and analysis.',
      'Led the promotion strategy to raise the project’s visibility.',
    ],
  },
  {
    years: 'May – Aug 2025',
    company: 'Irving Woodlands (J.D. Irving, Limited)',
    role: 'Communications Student',
    place: 'Saint John, NB',
    summary: 'Internal and social communications for Irving’s forestry operations.',
    highlights: [
      'Managed social media calendars, reaching a 2.59% average engagement rate on top posts, and refined strategy using insights.',
      'Turned complex forestry data into clear visuals and narratives.',
    ],
    more: [
      'Drafted internal bulletins on safety and sustainability.',
    ],
  },
  {
    years: 'Jan – Mar 2025',
    company: 'The Spa 654 Club',
    role: 'Social Media Marketing Consultant (Internship)',
    place: 'Fredericton, NB · Hybrid',
    summary: 'Part of a three-person team leading a month-long campaign across Facebook, Instagram and TikTok.',
    highlights: [
      'Facebook engagement rose 73% and Instagram reach rose 176%, driven largely by new, non-follower audiences.',
      'The campaign returned a 287% ROI.',
    ],
    more: [
      'Non-follower interactions on Facebook rose 346%; non-follower reach on Instagram rose 253%.',
    ],
  },
  {
    years: 'Jun – Sep 2024',
    company: 'Seamax Ship Management',
    role: 'Marketing Intern',
    place: 'Dubai, UAE',
    summary: 'Marketing and charter growth for an offshore oil & gas ship-management company, where the vessel contracts and sales growth above came from.',
    highlights: [
      'Worked with web and marketing teams on the initiatives behind the quarter’s sales growth.',
      'Created company profiles and client materials; researched industry trends and growth opportunities.',
    ],
  },
  {
    years: 'Feb 2022 – Apr 2024',
    company: 'Shoppers Drug Mart',
    role: 'Cashier Supervisor (promoted from Cashier)',
    place: 'Fredericton, NB · Part-time',
    summary: 'Promoted within 12 months, leading the front store part-time while studying at UNB.',
    highlights: [
      'Supervised, trained and coached front-store staff to meet customer-service targets.',
      'Handled escalated customer issues and oversaw accurate cash-handling procedures.',
    ],
  },
];

export type Entry = { title: string; org: string; date: string };

export const leadership: Entry[] = [
  { title: 'Delegate', org: 'Ted Rogers Management Conference, Toronto', date: '2025' },
  { title: 'Participant', org: "Bank of Canada Governor's Challenge", date: '2024' },
  { title: 'Peer Mentor', org: 'Faculty of Management, UNB', date: '2022 – 2023' },
];

export const certs: Entry[] = [
  { title: 'Lean Six Sigma White Belt', org: 'J.D. Irving, Continuous Improvement', date: '2025' },
  { title: 'AI Workshop for Business Students', org: 'McKenna Institute', date: '2026' },
  { title: 'Advanced Excel', org: 'Ira Edu-Tech', date: '2024' },
  { title: "Class 5 Driver's Licence", org: 'New Brunswick', date: '' },
];

export const skills = [
  {
    group: 'Marketing & communications',
    items: ['Campaign management', 'Digital marketing', 'Content creation', 'Social media', 'Email', 'Google Ads'],
  },
  {
    group: 'Business analysis & operations',
    items: ['Market research', 'Data analysis', 'Reporting', 'Process improvement', 'Stakeholder communication'],
  },
  {
    group: 'Tools',
    items: ['Microsoft Office (Word, Excel, PowerPoint)', 'Advanced Excel (pivot tables, VLOOKUP)', 'Canva', 'Percolate'],
  },
];
