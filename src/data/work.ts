// Selected work / case studies. Each one gets its own page at /work/<slug>/.
// Images go in /public/work/. Leave image as null to show a placeholder.

export type CaseStudy = {
  slug: string;
  kind: string;
  title: string;
  blurb: string; // one line on the card: what you made
  result: string; // shown on the case-study page
  challenge: string;
  approach: string;
  image: string | null;
  placeholder: string;
};

export const work: CaseStudy[] = [
  {
    slug: 'irving-woodlands',
    kind: 'Social campaign',
    title: 'Irving Woodlands',
    blurb: 'Social content and campaign visuals for forestry communications.',
    result: 'Reached 149K+ people at a 2.59% engagement rate.',
    challenge: '[What needed solving, and for whom.]',
    approach: '[Your role, the tools you used, and how you approached it.]',
    image: null,
    placeholder: 'campaign visuals',
  },
  {
    slug: 'seamax',
    kind: 'Brochure',
    title: 'Seamax Ship Management',
    blurb: 'Company profiles and client materials for a growing charter business.',
    result: 'Helped secure 4 vessels on 5-year charter contracts.',
    challenge: '[What needed solving, and for whom.]',
    approach: '[Your role, the tools you used, and how you approached it.]',
    image: null,
    placeholder: 'brochure spread',
  },
  {
    slug: 'mermax',
    kind: 'Company profile',
    title: 'Mermax Ship Management',
    blurb: 'A company profile for a ship-management and marine-services firm.',
    result: '[One-line result]',
    challenge: '[What needed solving, and for whom.]',
    approach: '[Your role, the tools you used, and how you approached it.]',
    image: null,
    placeholder: 'company profile pages',
  },
];
