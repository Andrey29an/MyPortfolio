export const profile = {
  name: 'Andrew Manevskiy',
  nameLines: ['Andrew', 'Manev-', 'skiy'],
  logo: 'A.M. / FE',
  eyebrow: 'Front-end developer — Lutsk, UA',
  tagline: 'Fast, reactive interfaces with Svelte and SvelteKit. Adding React. Built to work on every screen.',
  photo: '/photo.png',
}

export const contacts = {
  email: 'mmandrij32@gmail.com',
  telegram: 'andreeeee133',
  phone: '+380667855512',
  github: 'Andrey29an',
}

export const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#project', label: 'Project' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

/** pink | blue | light — колір групи; outline — контурний тег */
export type SkillColor = 'pink' | 'blue' | 'light'
export type SkillTag = string | { name: string; outline: true }

export const skills: { title: string; color: SkillColor; tags: SkillTag[] }[] = [
  { title: 'Languages', color: 'pink', tags: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS (Sass)'] },
  {
    title: 'Frameworks',
    color: 'blue',
    tags: ['React', 'Svelte'],
  },
  { title: 'Responsive', color: 'light', tags: ['Mobile-first', 'Cross-browser', 'Responsive layouts'] },
  { title: 'Tools', color: 'pink', tags: ['Git', 'GitHub', 'Node.js', 'Prisma'] },
]

export const project = {
  eyebrow: 'Selected project · Feb–Jul 2026',
  titleLines: ['College Web', 'Platform'],
  description:
    'The website of my college, KTBP. I built interactive sections and connected the front end to a headless CMS.',
  url: 'https://fktbp.com.ua',
  highlights: [
    'Responsive hero slider and dynamic news section',
    'Faculty and staff profiles directory',
    'Directus headless CMS for content and API',
    'Cross-browser, mobile-first sections',
  ],
}

export const about = {
  education: {
    title: 'Education',
    main: "Bachelor's student, Information Systems and Technologies (Major 126)",
    note: 'Currently enrolled. Internship in information systems at ТОВ «Коршовецька СЕС».',
  },
  languages: [
    { name: 'Ukrainian', level: 'Native' },
    { name: 'English', level: 'A2' },
  ],
}
