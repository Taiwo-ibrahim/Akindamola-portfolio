"use client"

import { useState } from 'react';
import ProjectsGrid from './ProjectsGrid';
import { projects } from './ProjectData';
import { ProjectCard } from './ProjectCard'; // Ensure the path is correct

const categories = ['All', 'Websites', 'Freestyles', 'Newsletters'] as const;
type Category = typeof categories[number]



const WorkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  return (
    <div className="w-[90%] mx-auto mt-12">
      {/* tab navigation  */}
      <nav className="flex gap-8 mb-12 border-b border-white/5 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`text-[14px] font-inter transition-colors duration-300 ${
              activeTab === cat ? 'text-white font-bold' : 'text-[#AAAAAA] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      <ProjectsGrid filter={activeTab} />
      
    </div>
  );
};

export default WorkSection;