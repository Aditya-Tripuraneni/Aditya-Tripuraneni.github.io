// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import WorkExperienceSection from './components/WorkExperience/WorkExperienceSection'
import OpenSourceSection from './components/OpenSource/OpenSourceSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import Footer from './components/Footer/Footer'
import CheatSheet from './components/CheatSheet/CheatSheet'
import Projects from './pages/Projects/Projects'
import MyBrain from './pages/MyBrain/MyBrain'
import FoodBlogs from './pages/MyBrain/FoodBlogs/FoodBlogs'
import ThingsInteresting from './pages/MyBrain/ThingsInteresting/ThingsInteresting'
import BlogPost from './pages/MyBrain/BlogPost/BlogPost'
import { usePageTracking } from './lib/trackVisit'
import './styles/globals.css'

const HomePage: React.FC = () => (
  <>
    <Header />
    <main>
      <Hero />
      <WorkExperienceSection />
      <OpenSourceSection />
      <ProjectsSection />
    </main>
    <Footer />
  </>
)

const PageTracker: React.FC = () => {
  usePageTracking()
  return null
}

const App: React.FC = () => (
  <Router>
    <PageTracker />
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/my-brain" element={<MyBrain />} />
        <Route path="/my-brain/food-blogs" element={<FoodBlogs />} />
        <Route path="/my-brain/things-interesting" element={<ThingsInteresting />} />
        <Route path="/my-brain/food-blogs/:slug" element={<BlogPost category="food-blogs" />} />
        <Route path="/my-brain/things-interesting/:slug" element={<BlogPost category="things-interesting" />} />
      </Routes>
      <CheatSheet />
      <Analytics />
    </div>
  </Router>
)

export default App
