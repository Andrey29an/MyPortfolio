export const profile = {
  name: 'Andrew Manevskiy',
  role: 'Front-end developer',
  location: 'Lutsk, Ukraine',
  tagline: 'Front-end developer building fast, reactive web interfaces.',
  about:
    'I work mainly with Svelte and SvelteKit, am now adding React and TypeScript to my stack, and care about responsive, mobile-first layouts. I am a student in Information Systems and Technologies and I am working on my professional English.',
  photo: '/photo.png' as string,
}

export const contacts = {
  email: 'mmandrij32@gmail.com',
  telegram: 'andreeeee133',
  phone: '+380 66 785 5512',
  github: 'Andrey29an',
}

export const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#project', label: 'Project' },
  { href: '#about', label: 'About' },
]

export type SkillTag = string | { name: string; accent: boolean }

export const skills: { title: string; tags: SkillTag[] }[] = [
  {
    title: 'Core languages',
    tags: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SCSS (Sass)'],
  },
  {
    title: 'Frameworks',
    tags: [
      { name: 'Svelte', accent: true },
      { name: 'SvelteKit', accent: true },
      'React (learning)',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Responsive design',
    tags: ['Mobile-first', 'Cross-browser', 'Responsive layouts'],
  },
  {
    title: 'Tools and back end',
    tags: ['Git', 'GitHub', 'Node.js', 'Prisma'],
  },
]

export const project = {
  title: 'College Web Platform',
  period: 'Feb 2026 – Jul 2026',
  role: 'Front-end developer',
  description:
    'The website of my college, KTBP. I built several of its interactive sections and helped connect the front end to a headless CMS.',
  url: 'https://fktbp.com.ua',
  highlights: [
    'Built a responsive hero slider and a dynamic news section',
    'Created the faculty and staff profiles page, a structured personnel directory',
    'Helped set up Directus headless CMS for dynamic content and API endpoints',
    'Made every section cross-browser compatible and mobile-first',
  ],
}
