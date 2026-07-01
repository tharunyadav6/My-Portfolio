import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
      aria-label="Toggle theme"
    >
      <motion.div animate={{ rotate: darkMode ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </motion.div>
    </button>
  )
}

export default ThemeToggle
