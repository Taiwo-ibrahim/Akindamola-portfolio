// import React from "react";
// import { FiArrowUpRight, FiLock } from 'react-icons/fi';
// import { projects, Project } from "./ProjectData"; 

// interface ProjectsGridProps {
//   filter: string;
// }

// const ProjectsGrid: React.FC<ProjectsGridProps> = ({ filter }) => {
//   // Filter logic runs every time the 'filter' prop changes
//   const filtered: Project[] =
//     filter === "All"
//       ? projects
//       : projects.filter((project) => project.category === filter);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
//       {filtered.length > 0 ? (
//         filtered.map((p) => (
//         <div className="group flex flex-col pb-[20px]">
//         <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-[#111] mb-6">
//             <img 
//             src={p.image} 
//             alt={p.title} 
//             className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
//             />
//         </div>

//         <div className="flex justify-between items-center mb-2">
//             <h3 className="font-Inter text-xl text-[#E9E9E9] font-medium">{p.title}</h3>
//             <span className="font-Inter text-sm text-[#B2B2B2]">{p.year}</span>
//         </div>

//         <p className="font-Satoshi text-[#C5C3C3] text-sm leading-relaxed mb-6 line-clamp-2">
//             {p.description}
//         </p>

//         <div className="flex items-center gap-4 font-Satoshi text-[13px] font-medium">
//             <a href="#" className="flex items-center gap-1.5 text-[#E9E9E9] hover:opacity-60 transition-opacity">
//             <FiLock className="text-[12px] opacity-40" /> Read Case Study
//             </a>
//             <span className="text-white/10">|</span>
//             <a href="#" className="flex items-center gap-1 text-[#E9E9E9] hover:opacity-60 transition-opacity">
//             View Live Site <FiArrowUpRight className="text-[14px]" />
//             </a>
//         </div>
//         </div>
//         ))
//       ) : (
//         <div className="col-span-full py-20 text-center text-[#B2B2B2]">
//           No projects found in this category.
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectsGrid;

'use client'

import React, { useRef } from "react";
import { FiArrowUpRight, FiLock } from 'react-icons/fi';
import { projects, Project } from "./ProjectData"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsGridProps {
  filter: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ filter }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered: Project[] =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  useGSAP(() => {
    // 1. Target all cards
    const cards = gsap.utils.toArray<HTMLElement>(".work-card");

    // 2. Loop through each card and create an individual trigger
    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,         // Each card triggers its own animation
          start: "top 90%",      // Starts when the card's top reaches 90% of viewport
          toggleActions: "restart none none reset",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    // Cleanup triggers when filter changes
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { dependencies: [filtered], scope: containerRef });

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
      {filtered.length > 0 ? (
        filtered.map((p) => (
          <div key={p.id} className="work-card group flex flex-col pb-[20px]">
            {/* Image Container */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-[#111] mb-6">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-Inter text-xl text-[#E9E9E9] font-medium">{p.title}</h3>
              <span className="font-Inter text-sm text-[#B2B2B2]">{p.year}</span>
            </div>

            <p className="font-Satoshi text-[#C5C3C3] text-sm leading-relaxed mb-6 line-clamp-2">
              {p.description}
            </p>

            {/* Links */}
            <div className="flex items-center gap-4 font-Satoshi text-[13px] font-medium">
              <a href={p.caseStudy} className="flex items-center gap-1.5 text-[#E9E9E9] hover:opacity-60 transition-opacity">
                <FiLock className="text-[12px] opacity-40" /> Read Case Study
              </a>
              <span className="text-white/10">|</span>
              <a href={p.liveSite} className="flex items-center gap-1 text-[#E9E9E9] hover:opacity-60 transition-opacity">
                View Live Site <FiArrowUpRight className="text-[14px]" />
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full py-20 text-center text-[#B2B2B2]">
          No projects found in this category.
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;