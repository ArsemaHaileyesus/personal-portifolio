import React, { useState } from 'react';
import { Project } from '../types';
import { ChevronDown, ChevronUp, ExternalLink, Github as GitHub } from 'lucide-react';
import '../styles/project-card.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Dynamically calculate animation delay based on index
  const animationDelay = `${0.1 + index * 0.1}s`;

  return (
    <div 
      className={`project-card ${expanded ? 'expanded' : ''}`}
      style={{ animationDelay }}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <GitHub size={20} />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        
        <div className="project-tech-stack">
          {project.technologies.map(tech => (
            <span key={tech} className={`tech-tag ${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              {tech}
            </span>
          ))}
        </div>
        
        <p className="project-summary">{project.summary}</p>
        
        <div className={`project-description ${expanded ? 'visible' : ''}`}>
          <p>{project.description}</p>
          
          {project.features && project.features.length > 0 && (
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <button className="expand-btn" onClick={toggleExpand}>
          {expanded ? (
            <>
              <ChevronUp size={16} />
              <span>Show Less</span>
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              <span>Read More</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;