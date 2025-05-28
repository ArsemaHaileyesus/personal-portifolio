import React from 'react';
import '../styles/tech-filter.css';

interface TechFilterProps {
  technologies: string[];
  selectedTech: string[];
  onTechSelect: (tech: string) => void;
  onClearFilters: () => void;
}

const TechFilter: React.FC<TechFilterProps> = ({
  technologies,
  selectedTech,
  onTechSelect,
  onClearFilters
}) => {
  // Group technologies by category
  const techCategories = {
    Languages: ['Java', 'JavaScript', 'PHP', 'HTML', 'CSS', 'TypeScript'],
    Frontend: ['React', 'Angular', 'Vue', 'Tailwind', 'Bootstrap'],
    Backend: ['Node.js', 'Express', 'Spring', 'Laravel'],
    Database: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
    Other: [] // Will hold any tech that doesn't fit in the categories above
  };

  // Populate the "Other" category
  technologies.forEach(tech => {
    const isInAnyCategory = Object.values(techCategories).some(
      category => category.includes(tech)
    );
    
    if (!isInAnyCategory) {
      techCategories.Other.push(tech);
    }
  });

  return (
    <div className="tech-filter">
      <div className="tech-filter-header">
        <h3>Filter by Technology</h3>
        {selectedTech.length > 0 && (
          <button onClick={onClearFilters} className="clear-filters-btn">
            Clear All
          </button>
        )}
      </div>
      
      <div className="tech-filter-tags">
        {Object.entries(techCategories).map(([category, techs]) => {
          // Only show categories that have technologies used in projects
          const filteredTechs = techs.filter(tech => technologies.includes(tech));
          
          if (filteredTechs.length === 0) return null;
          
          return (
            <div key={category} className="tech-category">
              <h4 className="category-title">{category}</h4>
              <div className="category-tags">
                {filteredTechs.map(tech => (
                  <button
                    key={tech}
                    className={`filter-tag ${selectedTech.includes(tech) ? 'active' : ''}`}
                    onClick={() => onTechSelect(tech)}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechFilter;