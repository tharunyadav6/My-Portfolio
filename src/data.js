import { FaBrain, FaCode, FaDatabase, FaEnvelope, FaGithub, FaLinkedin, FaServer } from 'react-icons/fa'
import ecommerceImage from './assets/Pics/Ecommerce.jpeg'
import projectOneImage from './assets/Pics/last.jpeg'
import projectTwoImage from './assets/Pics/last.jpeg'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:tharun@example.com', icon: FaEnvelope },
]

export const stats = [
  { value: '3+', label: 'Years Building UI' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client-Focused Delivery' },
]

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', level: '95%' },
      { name: 'CSS', level: '92%' },
      { name: 'JavaScript', level: '90%' },
      { name: 'React.js', level: '94%' },
      { name: 'Tailwind CSS', level: '93%' },
      { name: 'Bootstrap', level: '88%' },
    ],
  },
  {
    category: 'State & Backend',
    items: [
      { name: 'Redux Toolkit', level: '86%' },
      { name: 'Node.js', level: '84%' },
      { name: 'Express.js', level: '82%' },
      { name: 'MongoDB', level: '80%' },
    ],
  },
  {
    category: 'Tools & Cloud',
    items: [
      { name: 'Git', level: '90%' },
      { name: 'GitHub', level: '91%' },
      { name: 'Azure Fundamentals', level: '78%' },
    ],
  },
]

export const experience = [
  {
    title: 'Frontend Developer',
    company: 'Freelance / Independent Projects',
    period: '2022 — Present',
    description: 'Designed and shipped modern React-based experiences with performance-first UX and clean component architecture.',
  },
  {
    title: 'Web Developer Intern',
    company: 'Innovative Tech Studio',
    period: '2021 — 2022',
    description: 'Built responsive product landing pages, improved accessibility, and supported deployment workflows.',
  },
]

export const certifications = [
  { title: 'Azure Fundamentals', issuer: 'Microsoft', year: '2024' },
  { title: 'React Development', issuer: 'Udemy', year: '2023' },
  { title: 'Modern Web Design', issuer: 'Coursera', year: '2022' },
]

export const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A polished dashboard for online stores with analytics, inventory management, and a premium feel.',
    image: ecommerceImage,
    tech: ['React', 'Tailwind', 'Redux'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A refined personal portfolio with motion, dark/light mode, and a highly professional presentation.',
    image: projectOneImage,
    tech: ['React', 'Framer Motion', 'Tailwind'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Creative Landing Page',
    description: 'A conversion-focused landing page with immersive visuals and modern UI interactions.',
    image: projectTwoImage,
    tech: ['HTML', 'CSS', 'JS'],
    demo: '#',
    github: '#',
  },
]

export const highlights = [
  { icon: FaCode, title: 'Modern UI', text: 'Premium interface patterns with thoughtful spacing and motion.' },
  { icon: FaServer, title: 'Reliable Frontend', text: 'Component-driven development with maintainable architecture.' },
  { icon: FaDatabase, title: 'Data-Ready Apps', text: 'RESTful integrations and scalable state management.' },
  { icon: FaBrain, title: 'AI Prompting Awareness', text: 'Comfortable using AI tools to accelerate development, improve UX ideas, and refine problem-solving workflows.' },
]
