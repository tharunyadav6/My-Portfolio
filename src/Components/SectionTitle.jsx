const SectionTitle = ({ eyebrow, title, description, align = 'center' }) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
