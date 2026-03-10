
// 'use client'

// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { TypeAnimation } from 'react-type-animation';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const tools = [
//   { name: 'Figma', icon: 'https://2oxn8epyl7.ucarecd.net/9ec6e769-e5cf-4ccf-b70e-2f6cf8fe4386/figma.png' },
//   { name: 'Photoshop', icon: 'https://2oxn8epyl7.ucarecd.net/81006aad-4c80-4081-923d-b721b0c4a08c/photoshop.png' },
//   { name: 'Illustrator', icon: 'https://2oxn8epyl7.ucarecd.net/e8ab88d7-21e6-4831-8df9-89041ce8f133/illustrator.png' },
//   { name: 'Midjourney', icon: 'https://2oxn8epyl7.ucarecd.net/04e319d1-3aa6-447d-9d56-72b4bb976e58/midjourney.png' },
//   { name: 'Pinterest', icon: 'https://2oxn8epyl7.ucarecd.net/18063195-d369-44b1-9ac5-485f5dcaeb9a/pinterest.png' },
// ];

// export const 
// ToolsSection: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);

//   useGSAP(() => {
//     const cards = gsap.utils.toArray<HTMLElement>(".tool-card");

//     // 1. Initial State: Hide and bunch them up at the top
//     gsap.set(cards, { opacity: 0, scale: 0, y: -50 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 70%",
//       }
//     });

//     // 2. The Burst & Path Animation
//     tl.to(cards, {
//       opacity: 1,
//       scale: 1,
//       duration: 1.5,
//       // Randomize the start path for each card
//       x: () => (Math.random() - 0.5) * 400, 
//       y: () => Math.random() * 100,
//       rotation: () => (Math.random() - 0.5) * 60,
//       stagger: 0.1,
//       ease: "back.out(1.7)",
//     })
//     // 3. Snap to Grid Position
//     .to(cards, {
//       x: 0,
//       y: 0,
//       rotation: 0,
//       duration: 1,
//       ease: "power4.inOut",
//       stagger: 0.05
//     });

//     // 4. Idle Floating Animation (Continuous)
//     cards.forEach((card, i) => {
//       gsap.to(card, {
//         y: "-=10",
//         duration: 2 + i * 0.2, // Offset timing so they don't move in sync
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         delay: i * 0.1
//       });
//     });

//     // 5. Scramble Effect for Heading
//     const originalText = "The Tools i use to Create Magic✨";
//     const letters = "X#!@012";
    
//     tl.to(headingRef.current, {
//         onStart: () => {
//             let iteration = 0;
//             const interval = setInterval(() => {
//                 if(!headingRef.current) return;
//                 headingRef.current.innerText = originalText.split("").map((char, index) => {
//                     if (index < iteration) return originalText[index];
//                     return letters[Math.floor(Math.random() * letters.length)];
//                 }).join("");
//                 if (iteration >= originalText.length) {
//                     clearInterval(interval);
//                     headingRef.current.innerHTML = `The <span class="text-[#800404] font-[800] italic font-serif">Tools</span> i use to Create <span class="text-[#800404] italic font-[800] font-serif">Magic</span>✨`;
//                 }
//                 iteration += 1/2;
//             }, 30);
//         }
//     }, "<"); // Starts at the same time as the burst

//   }, { scope: containerRef });

//   return (
//     <section ref={containerRef} className="w-full bg-[#CCCCCC] py-24 px-6 overflow-hidden mt-[80px]">
//       <div className="max-w-7xl w-[90%] mx-auto text-center">
        
//         <h2 
        
//           className="font-inter text-2xl md:text-3xl font-[700] text-black mb-12 min-h-[40px]"
//         >
//           <TypeAnimation 
//             sequence={[
//               `The Tools i use to Create Magic✨`, // Types 'One'
              
//               () => {
//                 console.log('Sequence completed');
//               },
//             ]}
//             wrapper="span"
//             cursor={false}
//             speed={50}
//             style={{ display: 'inline-block' }}
//         />
//           {/* The Tools i use to Create Magic✨ */}
//         </h2>

//         <div className="flex flex-wrap justify-center mt-20 gap-4 md:gap-8">
//           {tools.map((tool) => (
//             <div 
//               key={tool.name} 
//               className="tool-card flex flex-col items-center bg-[#8585A2B2] rounded-[13px] p-[10px] gap-1 min-w-[110px] shadow-xl backdrop-blur-md"
//             >
//               <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-3">
//                 <img 
//                   src={tool.icon} 
//                   alt={tool.name} 
//                   className="w-full h-full object-contain pointer-events-none drop-shadow-md"
//                 />
//               </div>
//               <span className="font-inter text-sm font-[400] text-white">
//                 {tool.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



'use client'

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tools = [
  { name: 'Figma', icon: 'https://2oxn8epyl7.ucarecd.net/9ec6e769-e5cf-4ccf-b70e-2f6cf8fe4386/figma.png' },
  { name: 'Photoshop', icon: 'https://2oxn8epyl7.ucarecd.net/81006aad-4c80-4081-923d-b721b0c4a08c/photoshop.png' },
  { name: 'Illustrator', icon: 'https://2oxn8epyl7.ucarecd.net/e8ab88d7-21e6-4831-8df9-89041ce8f133/illustrator.png' },
  { name: 'Midjourney', icon: 'https://2oxn8epyl7.ucarecd.net/04e319d1-3aa6-447d-9d56-72b4bb976e58/midjourney.png' },
  { name: 'Pinterest', icon: 'https://2oxn8epyl7.ucarecd.net/18063195-d369-44b1-9ac5-485f5dcaeb9a/pinterest.png' },
  { name: 'Framer', icon: 'https://2oxn8epyl7.ucarecd.net/bf75193d-ad77-4fb1-b433-5130a17ef7c2/framer.png' },
];

export const ToolsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".tool-card");
    const typeChars = gsap.utils.toArray<HTMLElement>(".type-char");

    gsap.set(cards, { opacity: 0, scale: 0, y: -50 });
    gsap.set(typeChars, { display: "none" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.to(typeChars, {
      display: "inline",
      stagger: 0.04,
      ease: "none",
    })
    .to(cards, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      x: () => (Math.random() - 0.5) * 400,
      y: () => Math.random() * 100,
      rotation: () => (Math.random() - 0.5) * 45,
      stagger: 0.1,
      ease: "back.out(1.7)",
    }, "-=0.5")
    .to(cards, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.05
    });

    cards.forEach((card, i) => {
      gsap.to(card, {
        y: "-=10",
        duration: 2 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1
      });
    });

  }, { scope: containerRef });


  const renderStyledText = () => {
    const fullText = "The Tools i use to Create Magic✨";
    return fullText.split("").map((char, i) => {
      const isRed = (i >= 4 && i <= 8) || (i >= 25 && i <= 30);
      return (
        <span 
          key={i} 
          className={`type-char ${isRed ? "text-[#800404] italic font-[800] font-serif" : ""}`}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section ref={containerRef} className="w-full bg-[#CCCCCC] py-24 px-6 overflow-hidden mt-[80px]">
      <div className="max-w-7xl w-[90%] mx-auto text-center">
        
        <h2 className="font-inter text-2xl md:text-3xl font-[700] text-black mb-12 min-h-[40px]">
          {renderStyledText()}
        </h2>

        <div className="flex flex-wrap justify-center mt-20 gap-4 md:gap-8">
          {tools.map((tool) => (
            <div 
              key={tool.name} 
              className="tool-card flex flex-col items-center bg-[#8585A2B2] rounded-[13px] p-[10px] gap-1 min-w-[110px] shadow-xl backdrop-blur-md"
            >
              {/* FIXED ICON WRAPPER */}
              <div className="icon-wrapper w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-2 md:p-3">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="icon-img w-[70%] h-[70%] object-contain pointer-events-none drop-shadow-md"
                />
              </div>

              <span className="font-inter text-sm font-[400] text-white">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
