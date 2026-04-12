import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navigation } from './components/layout/Navigation'
import { ScrollManager } from './components/layout/ScrollManager'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))

function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-body">
      <ScrollManager />
      <Navigation />
      <Suspense
        fallback={
          <main className="container-shell section-shell section-anchor pt-36" aria-busy="true">
            <p className="text-sm uppercase tracking-[0.1em] text-text-dim font-mono">Loading...</p>
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App

