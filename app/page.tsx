'use client'

import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // 1. Import ScrollTrigger
import { ContactSection } from "./components/HireMe";
import Navbar from "./components/Navbar";
import { ToolsSection } from "./components/Tools";
import WorkSection from "./components/WorkSection";

// 2. Register the plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const [showComponent, setShowComponent] = useState(false)
  const [showComponent1, setShowComponent1] = useState(false)
  
  
  // useEffect(() => {
  //   const onLoaded = () => {
  //     setTimeout(() => setShowComponent(true), 8600);
  //   };

  //   // If page already loaded → run instantly
  //   if (document.readyState === "complete") {
  //     onLoaded();
  //   } else {
  //     // Otherwise wait for load event
  //     window.addEventListener("load", onLoaded);
  //     return () => window.removeEventListener("load", onLoaded);
  //   }
  // }, []);


  useEffect(() => {
  const onLoaded = () => {
    // Subtract enough time for the CSS fade-in to feel natural
    setTimeout(() => setShowComponent(true), 9000);
    setTimeout(() => setShowComponent1(true), 9500);
  };

  if (document.readyState === "complete") {
    onLoaded();
  } else {
    window.addEventListener("load", onLoaded);
    return () => window.removeEventListener("load", onLoaded);
  }
}, []);

  useGSAP(() => {
    const runScramble = (el: HTMLElement, delay: number = 0) => {
      const originalText = el.getAttribute('data-original') || el.innerText;
      // Store original text in attribute to prevent losing it on reset
      if (!el.getAttribute('data-original')) {
        el.setAttribute('data-original', originalText);
      }
      
      const symbols = "ABCDEFGHIKLMNOPQRSTVXYZ#$%&@*+{}";
      let iteration = 0;

      // Reset state for scroll-back
      gsap.set(el, { opacity: 0 });

      const startAnimation = () => {
        gsap.to(el, { opacity: 1, duration: 0.5, delay: delay });
        
        const interval = setInterval(() => {
          el.innerText = originalText
            .split("")
            .map((char, index) => {
              if (index < iteration) return originalText[index];
              if (char === " " || char === "\n") return char;
              return symbols[Math.floor(Math.random() * symbols.length)];
            })
            .join("");

          iteration += originalText.length / 60;
          
          if (iteration >= originalText.length) {
            clearInterval(interval);
            el.innerText = originalText;
          }
        }, 30);
        
        return interval;
      };

      // 3. Create individual ScrollTriggers
      let currentInterval: NodeJS.Timeout;

      ScrollTrigger.create({
        trigger: el,
        start: "top 95%", // Play when eleme  nt top hits 95% of screen
        onEnter: () => {
          currentInterval = startAnimation();
        },
        onLeaveBack: () => {
          // Reset when scrolling back up past the element
          clearInterval(currentInterval);
          el.innerText = originalText;
          gsap.set(el, { opacity: 0 });
        },
        // restart on entry, reset on leave back
        toggleActions: "restart none none reset" 
      });
    };

    const heroElements = gsap.utils.toArray<HTMLElement>(".hero-reveal");
    
    heroElements.forEach((el, index) => {
      runScramble(el, index * 0.2); 
    });

  }, { scope: container });

  return (
    <div className="min-h-screen bg-black bg-gradient-to-br from-gray-900 via-black to-black">
      <div className="md:pt-[30px] w-[90%] mx-auto">
        <Navbar />
      </div>

      <div className="w-[90%] md:w-[90%] max-w-7xl flex flex-col mx-auto mt-[20px] md:mt-[58px]">
             
        
        {/* <h2 className="hero-reveal font-Satoshi text-[#E9E9E9] tracking-tight w-full md:w-[90%] lg:w-[80%] max-w-[1000px] font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-tight mb-2">
          <TypeAnimation 
            sequence={[
              `Hi! I'm Akindamola👋🏽 I design experiences. I turn messy, complex problems into clean, delightful digital experiences people can't stop using.`, // Types 'One'
              
              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={50}
            style={{ display: 'inline-block', color: '#E9E9E9', fontSize: '37px', fontWeight: 400, lineHeight: '45px' }}
          />
        </h2> */}

        <h2 className="hero-reveal font-Satoshi text-[#E9E9E9] tracking-tight w-full md:w-[90%] lg:w-[80%] max-w-[1000px] font-normal leading-tight mb-2">
          <TypeAnimation
            sequence={[
              `Hi! I'm Akindamola👋🏽 I design experiences. I turn messy, complex problems into clean, delightful digital experiences people can't stop using.`,
              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper="span"
            cursor={false}
            speed={50}
            style={{
              display: 'inline-block',
              color: '#E9E9E9',
              fontSize: 'clamp(22px, 4vw, 37px)',
              fontWeight: 400,
              lineHeight: 'clamp(30px, 5vw, 45px)',
            }}
          />
        </h2>

        

          <div>
          {showComponent && (
            <p className="opacity-100 animate-fade-in [animation-delay:100ms] font-Satoshi mt-2 md:mt-[10px] text-[#C5C3C3] tracking-tight w-full md:w-[85%] lg:w-[80%] max-w-[1000px] font-normal text-[12px] md:text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-2">
              With hands-on IT and Salesforce experience, I design not just for users — but for the systems and teams behind the scenes too.
            </p>
          )}

          {showComponent1 && (
            <small className="opacity-100 animate-fade-in [animation-delay:300ms] hero-reveal font-Satoshi text-[#B2B2B2] tracking-tight w-full md:w-[80%] max-w-[1000px] font-normal text-[10px] md:text-[12px] md:text-[14px] leading-relaxed">
              Experience: Tangerine Africa, Neukleos, CRM Sharks, Image & Time, Nexant Constructing
            </small>
          )}
        </div>


      </div>

      <div><WorkSection /></div>
      <div><ToolsSection /></div>
      <div><ContactSection /></div>

      <footer className="mt-32 w-full border-t border-white/5 pt-8">
        <div className="bg-[#B2B5C3] py-3 rounded-sm text-black text-[10px] md:text-xs font-Satoshi flex justify-center items-center gap-2">
          <span>★</span> Nothing to see here i just wanted a footer <span>★</span>
        </div>
      </footer>
    </div>
  );
}