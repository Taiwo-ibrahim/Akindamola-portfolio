"use client";
import React from 'react';
import { motion } from 'framer-motion';


const galleryImages = [
    { id: 1, src: 'https://2oxn8epyl7.ucarecd.net/a063e6dc-fdc6-4e7f-9035-24ba54bcd213/akindamola2.png', alt: 'Portrait' },
    { id: 2, src: 'https://2oxn8epyl7.ucarecd.net/911bc26c-ec93-4b83-9bd2-801ffa16fc25/akindamola3.png', alt: 'Gym session' },
    { id: 3, src: 'https://2oxn8epyl7.ucarecd.net/46e30545-5824-4331-8381-a2a86981850c/group_photo.png', alt: 'Group photo' },
    { id: 4, src: 'https://2oxn8epyl7.ucarecd.net/6aa02f9f-1a0b-4a29-a0f9-3120ac4882c6/Artbook.png', alt: 'African Art book' },
    { id: 5, src: 'https://2oxn8epyl7.ucarecd.net/ae0404bd-1d2d-4273-8e52-536091fe8443/microphone.png', alt: 'Studio session' },
    { id: 6, src: 'https://2oxn8epyl7.ucarecd.net/4cd4e3a6-c550-4368-a01b-3e450f2c8a6f/model_smile.png', alt: 'Relaxing' },
  ];
  
export const BackyardCarousel = () => {
  return (
    <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing py-10">
      <motion.div 
        drag="x" 
        dragConstraints={{ right: 0, left: -800 }} // Adjust 'left' based on total width
        className="flex gap-4 px-4 md:px-12"
      >
        {galleryImages.map((img) => (
          <motion.div 
            key={img.id}
            className="min-w-[200px] md:min-w-[280px] aspect-[3/4] overflow-hidden bg-[#111] rounded-sm flex-shrink-0"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none" 
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Scroll indicator for UX */}
      <div className="mt-6 flex justify-center gap-2 opacity-20">
        <div className="h-1 w-12 bg-white rounded-full" />
        <div className="h-1 w-4 bg-white/50 rounded-full" />
        <div className="h-1 w-4 bg-white/50 rounded-full" />
      </div>
    </div>
  );
};