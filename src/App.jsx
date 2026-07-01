import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaArrowUp,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaRocket,
  FaServer,
} from 'react-icons/fa'
import LoadingScreen from './Components/LoadingScreen'
import SectionTitle from './Components/SectionTitle'
import ThemeToggle from './Components/ThemeToggle'
import { certifications, experience, highlights, navLinks, projects, skills, socials, stats } from './data'
import profileImage from './assets/Pics/last.jpeg'
import resumePdf from './assets/Cv/tharun_resumel.pdf'

const sectionBase = 'section-shell py-24 sm:py-28'

const App = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)

  const roles = ['Frontend Developer', 'React Developer', 'UI Engineer']

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let index = 0
    let isDeleting = false

    const typingInterval = setInterval(() => {
      const currentRole = roles[roleIndex]
      setDisplayText((prev) => {
        if (!isDeleting && index < currentRole.length) {
          index += 1
          return currentRole.slice(0, index)
        }

        if (isDeleting && index > 0) {
          index -= 1
          return currentRole.slice(0, index)
        }

        if (!isDeleting && index === currentRole.length) {
          isDeleting = true
          return currentRole
        }

        if (isDeleting && index === 0) {
          isDeleting = false
          setRoleIndex((prevRole) => (prevRole + 1) % roles.length)
        }

        return prev
      })
    }, 90)

    return () => clearInterval(typingInterval)
  }, [roleIndex, roles])

  return (
    <div className="overflow-x-hidden bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <LoadingScreen />

      <div className="pointer-events-none fixed inset-0 z-[60] hidden lg:block">
        <div
          className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/60 bg-cyan-400/20"
          style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }}
        />
        <div
          className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_24px_#22d3ee]"
          style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }}
        />
      </div>

      <header id="home" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_30%)]" />
        <div className="hero-ring left-[-6rem] top-10 h-48 w-48" />
        <div className="hero-ring bottom-[-4rem] right-[-4rem] h-64 w-64" />
        <nav className="section-shell flex flex-wrap items-center justify-between gap-4 py-6">
          <a href="#home" className="text-lg font-semibold tracking-[0.25em] text-slate-900 dark:text-white">
            THARUN<span className="text-cyan-600">/DEV</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="text-sm font-medium text-slate-600 transition hover:text-cyan-600 dark:text-slate-300">
                {link.label}
              </a>
            ))}
          </div>

          <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode((value) => !value)} />
        </nav>

        <div className="section-shell grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
              Professional Frontend Developer
            </p>
            <h1 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-6xl">
              Hello, I’m <span className="text-cyan-600">Tharun</span>.
            </h1>
            <p className="mt-4 text-xl font-medium text-cyan-600">{displayText || 'Frontend Developer'}</p>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              I design and build refined, responsive web experiences with React, Tailwind CSS, and a sharp eye for performance, motion, and usability.
            </p>

            <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row">
              <a href={resumePdf} download className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-500">
                <FaDownload /> Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-100">
                <FaPaperPlane /> Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
                    <Icon />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto flex w-full max-w-[420px] flex-col items-center"
          >
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border-[8px] border-cyan-400/70 bg-gradient-to-br from-cyan-100 via-white to-slate-100 p-2 shadow-[0_25px_70px_-20px_rgba(8,145,178,0.55)] dark:border-slate-700 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 sm:h-[360px] sm:w-[360px]">
              <img src={profileImage} alt="Professional portrait" className="h-full w-full rounded-full object-cover object-center" />
            </div>
            <div className="mt-6 grid w-full gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-center dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-2xl font-semibold text-cyan-600">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        <section id="about" className={sectionBase}>
          <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass-panel p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">About Me</p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                Building meaningful web experiences with clarity, speed, and style.
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                I’m a frontend developer focused on transforming ideas into polished, high-performing products. My work blends creative UI thinking with a strong technical foundation in React, Tailwind, and modern development workflows.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Education</p>
                  <p className="mt-2 font-medium text-slate-800 dark:text-slate-200">MCA / Computer Applications</p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-900/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Career Goal</p>
                  <p className="mt-2 font-medium text-slate-800 dark:text-slate-200">Deliver elegant digital products that elevate brands.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
              <SectionTitle eyebrow="Why hire me" title="Professional, versatile, and detail-driven" description="I combine strong frontend fundamentals with thoughtful design to create interfaces that look premium and perform smoothly across devices." />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="glass-panel p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600">
                        <Icon />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className={sectionBase}>
          <div className="section-shell">
            <SectionTitle eyebrow="Skills" title="Core strengths across frontend, state, and tooling" description="A modern stack with the right balance of creativity, structure, and delivery confidence." />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {skills.map((group) => (
                <motion.div key={group.category} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{group.category}</h3>
                  <div className="mt-6 space-y-4">
                    {group.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                          <span>{skill.name}</span>
                          <span>{skill.level}</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                          <div className="h-2 rounded-full bg-cyan-500" style={{ width: skill.level }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className={sectionBase}>
          <div className="section-shell">
            <SectionTitle eyebrow="Experience" title="A steady growth path in web development" description="I’ve built practical, high-value frontend solutions that combine strong code structure with polished presentation." />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {experience.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">{item.period}</p>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-lg text-cyan-600">{item.company}</p>
                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={sectionBase}>
          <div className="section-shell">
            <SectionTitle eyebrow="Projects" title="Selected work with impact and polish" description="A collection of products that balance aesthetics, functionality, and modern development standards." />
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <motion.article key={project.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
                  <div className="p-7">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-700 dark:text-cyan-300">{tech}</span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href={project.demo} className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-500">Live Demo</a>
                      <a href={project.github} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-100">GitHub</a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className={sectionBase}>
          <div className="section-shell">
            <SectionTitle eyebrow="Certifications" title="Learning, validating, and staying current" description="Continuous growth matters, and these credentials reflect a commitment to quality and modern best practices." />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {certifications.map((cert) => (
                <motion.div key={cert.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel p-6 sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600">
                    <FaCode />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className={sectionBase}>
          <div className="section-shell">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel flex flex-col gap-8 p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Resume</p>
                <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Ready to bring a thoughtful, modern frontend presence to your team.</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">I’m available for ambitious product work, freelance collaborations, and frontend-focused roles where design and usability matter.</p>
              </div>
              <a href={resumePdf} download className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-500">
                <FaDownload /> Download CV
              </a>
            </motion.div>
          </div>
        </section>

        <section id="contact" className={sectionBase}>
          <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-panel p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Contact</p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Let’s build something memorable together.</h3>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300"><FaEnvelope className="text-cyan-600" /> tharuntharunyadav67@gmail.com</div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300"><FaPhoneAlt className="text-cyan-600" /> +91 6304939738</div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300"><FaMapMarkerAlt className="text-cyan-600" /> Bengaluru, India</div>
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} onSubmit={(event) => event.preventDefault()} className="glass-panel p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Your Name" className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-700 outline-none ring-0 transition focus:border-cyan-400 dark:border-slate-700 dark:text-slate-100" />
                <input type="email" placeholder="Your Email" className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-700 outline-none ring-0 transition focus:border-cyan-400 dark:border-slate-700 dark:text-slate-100" />
              </div>
              <input type="text" placeholder="Subject" className="mt-4 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-700 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:text-slate-100" />
              <textarea rows="5" placeholder="Tell me about your project" className="mt-4 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-700 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:text-slate-100" />
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-500">
                <FaPaperPlane /> Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white/70 py-8 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-300">© 2026 Tharun. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                  <Icon />
                </a>
              )
            })}
            <a href="#home" className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white transition hover:bg-cyan-500">
              <FaArrowUp />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App