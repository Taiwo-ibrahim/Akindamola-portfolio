'use client'

import React, { useRef } from 'react';
import { FiArrowUpRight, FiLock } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ProjectProps {
  title: string;
  year: number;
  description: string;
  image: string;
  caseStudy: string;
  liveSite: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  year, 
  description, 
  image, 
  caseStudy, 
  liveSite 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const { contextSafe } = useGSAP({ scope: cardRef });

  // Mouse Enter: Tilt and Lift
  const onMouseEnter = contextSafe((e: React.MouseEvent) => {
    gsap.to(cardRef.current, {
      y: -10, // Lift up
      duration: 0.4,
      ease: "power2.out"
    });
    
    gsap.to(imgRef.current, {
      scale: 1.1,
      duration: 0.6,
      ease: "power2.out"
    });
  });

  // Mouse Move: Follow tilt logic
  const onMouseMove = contextSafe((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const xVal = e.clientX - left;
    const yVal = e.clientY - top;
    
    // Calculate rotation based on mouse position relative to center
    const yRotation = ((xVal - width / 2) / width) * 10; // Max 10 degrees
    const xRotation = ((yVal - height / 2) / height) * -10; // Max -10 degrees

    gsap.to(cardRef.current, {
      rotateY: yRotation,
      rotateX: xRotation,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  // Mouse Leave: Reset to original
  const onMouseLeave = contextSafe(() => {
    gsap.to(cardRef.current, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)" // Soft bounce back
    });

    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    });
  });

  return (
    <div 
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group flex flex-col pb-[20px] cursor-pointer will-change-transform"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-[#111] mb-6">
        <img 
          ref={imgRef}
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0"
        />
      </div>

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-Inter text-xl text-[#E9E9E9] font-medium transition-colors group-hover:text-white">{title}</h3>
        <span className="font-Inter text-sm text-[#B2B2B2]">{year}</span>
      </div>

      <p className="font-Satoshi text-[#5A5A5A] text-sm leading-relaxed mb-6 line-clamp-2 transition-colors group-hover:text-[#E9E9E9]">
        {description}
      </p>

      {/* <div className="flex items-center gap-4 font-Satoshi text-[13px] font-medium">
        <a href="#" className="flex items-center gap-1.5 text-[#9C9C9C] hover:text-white transition-colors">
          <FiLock className="text-[12px] text-[#9C9C9C] opacity-40" /> Read Case Study
        </a>
        <span className="text-white/10">|</span>
        <a href="#" className="flex items-center gap-1 text-[##9C9C9C] hover:text-white transition-colors">
          View Live Site <FiArrowUpRight className="text-[14px]" />
        </a>
      </div> */}

<div className="flex items-center gap-4 font-Satoshi text-[13px] font-medium">
  
  {/* Read Case Study Link */}
  <a href={caseStudy} className="relative flex items-center gap-1.5 text-[#9C9C9C] hover:text-white transition-colors">
    <FiLock className="text-[12px] text-[#9C9C9C] opacity-40" /> 
    <span className="relative">
      Read Case Study
      {/* Animated Underline */}
      <span className="absolute bottom-0.5 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </span>
  </a>

  <span className="text-white/10">|</span>

  {/* View Live Site Link */}
  <a href={liveSite} className="relative flex items-center gap-1 text-[#9C9C9C] hover:text-white transition-colors">
    <span className="relative flex items-center gap-1">
      View Live Site <FiArrowUpRight className="text-[14px]" />
      {/* Animated Underline */}
      <span className="absolute bottom-0.5 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </span>
  </a>

</div>
    </div>
  );
};