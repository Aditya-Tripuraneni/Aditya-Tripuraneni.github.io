// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import WorkExperienceSection from './components/WorkExperience/WorkExperienceSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import Footer from './components/Footer/Footer'
import MyBrain from './pages/MyBrain/MyBrain'
import FoodBlogs from './pages/MyBrain/FoodBlogs/FoodBlogs'
import ThingsInteresting from './pages/MyBrain/ThingsInteresting/ThingsInteresting'
import BlogPost from './pages/MyBrain/BlogPost/BlogPost'
import './styles/globals.css'

const HomePage: React.FC = () => (
  <>
    <Header />
    <main>
      <Hero />
      <WorkExperienceSection />
      <ProjectsSection />
    </main>
    <Footer />
  </>
)

const App: React.FC = () => (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-brain" element={<MyBrain />} />
        <Route path="/my-brain/food-blogs" element={<FoodBlogs />} />
        <Route path="/my-brain/things-interesting" element={<ThingsInteresting />} />
        <Route path="/my-brain/food-blogs/:slug" element={<BlogPost category="food-blogs" />} />
        <Route path="/my-brain/things-interesting/:slug" element={<BlogPost category="things-interesting" />} />
      </Routes>
    </div>
  </Router>
)

export default App
