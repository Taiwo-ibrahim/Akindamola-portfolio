
// 'use client'

// import React, { useRef } from 'react';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
// import { useGSAP } from '@gsap/react';
// import { VscSend } from "react-icons/vsc";
// import { useForm, ValidationError } from '@formspree/react'

// gsap.registerPlugin(ScrollTrigger);

// export const ContactSection: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const formRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // 1. Entrance & Exit Animation
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%", // Start when top of section hits 80% of viewport
//         end: "bottom 20%",
//         toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
//       }
//     });

//     tl.fromTo(formRef.current, 
//       { x: -50, opacity: 0 }, 
//       { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
//     )
//     .fromTo(imageRef.current, 
//       { x: 50, opacity: 0 }, 
//       { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
//       "-=0.8" // Overlap animations
//     );

//     // 2. Magnetic Button Logic
//     const btn = buttonRef.current;
//     if (!btn) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       const { clientX, clientY } = e;
//       const { left, top, width, height } = btn.getBoundingClientRect();
//       const x = clientX - (left + width / 2);
//       const y = clientY - (top + height / 2);

//       gsap.to(btn, {
//         x: x * 0.3,
//         y: y * 0.3,
//         duration: 1.2,
//         ease: "power3.out"
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(btn, { 
//         x: 0, 
//         y: 0, 
//         duration: 1.2, 
//         ease: "elastic.out(1, 0.3)" 
//       });
//     };

//     btn.addEventListener("mousemove", handleMouseMove);
//     btn.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       btn.removeEventListener("mousemove", handleMouseMove);
//       btn.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, { scope: sectionRef });

//   return (
//     <section ref={sectionRef} className="bg-black text-white md:py-20 py-10 px-6 md:px-12 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
//           {/* Left Side: Text and Form */}
//           <div ref={formRef} className="flex flex-col">
//             <h2 className="font-Satoshi text-2xl md:text-3xl leading-snug mb-2 max-w-md">
//               Chasing new problems to solve, fun teams to collaborate with, and ideas that deserve to exist.
//             </h2>
//             <p className="font-Satoshi text-xs text-[#B2B2B2] mb-10">
//               If this sounds like you, reach out :)
//             </p>

//             <form 
//               className="flex flex-col gap-4 max-w-lg"
//               action="https://formspree.io/f/xgoldnbb"
//               method='POST'
//             >
//               <input 
//                 type="text" 
//                 name='name'
//                 placeholder="Name" 
//                 required
//                 className="bg-transparent border border-white/20 p-4 rounded-sm font-Satoshi text-sm focus:outline-none focus:border-white transition-colors"
//               />
//               <input 
//                 type="email" 
//                 placeholder="E-mail address" 
//                 name='email'
//                 required
//                 className="bg-transparent border border-white/20 p-4 rounded-sm font-Satoshi text-sm focus:outline-none focus:border-white transition-colors"
//               />
//               <textarea 
//                 placeholder="Message" 
//                 required
//                 rows={5}
//                 name='message'
//                 className="bg-transparent border border-white/20 p-4 rounded-sm font-Inter text-sm focus:outline-none focus:border-white transition-colors resize-none"
//               />
              
//               <button 
//                 ref={buttonRef}
//                 type="submit" 
//                 className="w-fit mt-4 bg-[#D1D1D1] text-black px-8 py-3 rounded-full font-Inter font-medium flex items-center gap-2 hover:bg-white transition-colors"
//               >
//                 Hire Me <span className="text-lg"><VscSend /></span>
//               </button>
//             </form>
//           </div>

//           {/* Right Side: Portrait Image */}
//           <div ref={imageRef} className="relative flex justify-center lg:justify-end">
//             <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden">
//               <img 
//                 src="https://2oxn8epyl7.ucarecd.net/b3a493bc-b430-4123-b737-904f8910c881/akindamola.png" 
//                 alt="Akindamola" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


'use client'

import React, { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { VscSend } from "react-icons/vsc";
import { useForm, ValidationError } from '@formspree/react';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // 🔥 Formspree Hook
  const [state, handleSubmit] = useForm("xgoldnbb");

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      }
    });

    tl.fromTo(formRef.current, 
      { x: -50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(imageRef.current, 
      { x: 50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 1.2,
        ease: "power3.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { 
        x: 0, 
        y: 0, 
        duration: 1.2, 
        ease: "elastic.out(1, 0.3)" 
      });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-black text-white md:py-20 py-10 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div ref={formRef} className="flex flex-col">
            <h2 className="font-Satoshi text-2xl md:text-3xl leading-snug mb-2 max-w-md">
              Chasing new problems to solve, fun teams to collaborate with, and ideas that deserve to exist.
            </h2>
            <p className="font-Satoshi text-xs text-[#B2B2B2] mb-10">
              If this sounds like you, reach out :)
            </p>

            {/* 🔥 Formspree form */}
            {state.succeeded ? (
              <p className="text-green-400 font-Satoshi text-sm">
                Thank you! Your message has been sent 🎉
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
                
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name"
                  required
                  className="bg-transparent border border-white/20 p-4 rounded-sm font-Satoshi text-sm focus:outline-none focus:border-white transition-colors"
                />

                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <input 
                  type="email" 
                  name="email"
                  placeholder="E-mail address"
                  required
                  className="bg-transparent border border-white/20 p-4 rounded-sm font-Satoshi text-sm focus:outline-none focus:border-white transition-colors"
                />

                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <textarea 
                  name="message"
                  placeholder="Message"
                  required
                  rows={5}
                  className="bg-transparent border border-white/20 p-4 rounded-sm font-Inter text-sm focus:outline-none focus:border-white transition-colors resize-none"
                />

                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button 
                  ref={buttonRef}
                  type="submit"
                  disabled={state.submitting}
                  className="w-fit mt-4 bg-[#D1D1D1] text-black px-8 py-3 rounded-full font-Inter font-medium flex items-center gap-2 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Hire Me"} 
                  <span className="text-lg"><VscSend /></span>
                </button>

              </form>
            )}
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden">
              <img 
                src="https://2oxn8epyl7.ucarecd.net/b3a493bc-b430-4123-b737-904f8910c881/akindamola.png" 
                alt="Akindamola" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
          </div>
        </div>
      </div>
    </section>
  );
};
