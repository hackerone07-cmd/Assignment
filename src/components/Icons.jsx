export function Home({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3.6 3 11h2.2v8.4h5.8v-5.5h2v5.5h5.8V11H21L12 3.6Z" />
    </svg>
  )
}

export function ChevronLeft({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m14.5 6.5-5 5.5 5 5.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronRight({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m9.5 6.5 5 5.5-5 5.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Camera({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.5 7.2 9.8 5h4.4l1.3 2.2H18a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9.2a2 2 0 0 1 2-2h2.5Z"
        fill="currentColor"
      />
      <circle cx="12" cy="13" r="3.2" fill="white" />
      <circle cx="12" cy="13" r="1.8" fill="currentColor" />
    </svg>
  )
}
