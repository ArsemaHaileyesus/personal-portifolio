import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ThemeToggle from './ThemeToggle';
import TechFilter from './TechFilter';
import { projects } from '../data/projects';
import '../styles/portfolio.css';

const PortfolioSection: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Get all unique technologies from projects
  const allTechnologies = Array.from(
    new Set(
      projects.flatMap(project => project.technologies)
    )
  );

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Filter projects based on selected technologies
  const handleTechFilter = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter(t => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedTech([]);
  };

  // Observer for section visibility to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.portfolio-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Filter projects when selected technologies change
  useEffect(() => {
    if (selectedTech.length === 0) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project =>
          selectedTech.some(tech => project.technologies.includes(tech))
        )
      );
    }
  }, [selectedTech]);

  // Check for saved theme preference or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme as 'light' | 'dark');
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  return (
    <section className={`portfolio-section ${theme} ${isVisible ? 'visible' : ''}`}>
      <div className="portfolio-header">
        <h2 className="portfolio-title">
          <span className="typing-effect">My Projects</span>
        </h2>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      
      <TechFilter 
        technologies={allTechnologies}
        selectedTech={selectedTech}
        onTechSelect={handleTechFilter}
        onClearFilters={clearFilters}
      />
      
      <div className="projects-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))
        ) : (
          <div className="no-projects">
            <p>No projects match the selected filters.</p>
            <button onClick={clearFilters} className="clear-btn">Clear Filters</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;