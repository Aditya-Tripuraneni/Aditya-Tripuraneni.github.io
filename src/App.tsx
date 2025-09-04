// src/App.tsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import WorkExperienceSection from './components/WorkExperience/WorkExperienceSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import Footer from './components/Footer/Footer'
import './styles/globals.css'

const Home: React.FC = () => (
  <div className="App">
    <Header />
    <main>
      <Hero />
      <WorkExperienceSection />
      <ProjectsSection />
    </main>
    <Footer />
  </div>
)

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* optional future pages: <Route path="/projects" element={<ProjectsPage />} /> */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default App
