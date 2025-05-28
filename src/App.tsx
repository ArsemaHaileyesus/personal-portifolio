import React from 'react';
import PortfolioSection from './components/PortfolioSection';
import ResumeSection from './components/ResumeSection';

function App() {
  return (
    <div className="app min-h-screen bg-gray-50 dark:bg-gray-900">
      <ResumeSection />
      <PortfolioSection />
    </div>
  );
}

export default App;