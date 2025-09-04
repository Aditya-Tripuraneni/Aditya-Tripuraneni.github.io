import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WorkExperienceSection from './components/WorkExperience/WorkExperienceSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import Footer from './components/Footer/Footer';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <WorkExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
