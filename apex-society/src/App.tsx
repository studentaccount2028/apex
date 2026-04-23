import { useState } from 'react'
import LandingPage     from './pages/LandingPage'
import CompetitionPage from './pages/CompetitionPage'

export default function App() {
  const [page, setPage] = useState<'landing' | 'competition'>('landing')

  function handleNav(link: string) {
    if (link === 'Competition') {
      setPage('competition')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (page === 'competition') {
    return (
      <CompetitionPage
        onBack={() => { setPage('landing'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      />
    )
  }

  return <LandingPage onNavClick={handleNav} />
}
