// 'use client'

// import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ContactSection } from "../components/HireMe";
// import Navbar from "../components/Navbar";

// gsap.registerPlugin(ScrollTrigger);

// export default function Backyard() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const headingRef = useRef<HTMLHeadingElement>(null);

//     const galleryImages = [
//         { id: 1, src: 'https://2oxn8epyl7.ucarecd.net/a063e6dc-fdc6-4e7f-9035-24ba54bcd213/akindamola2.png', alt: 'Portrait' },
//         { id: 2, src: 'https://2oxn8epyl7.ucarecd.net/911bc26c-ec93-4b83-9bd2-801ffa16fc25/akindamola3.png', alt: 'Gym session' },
//         { id: 3, src: 'https://2oxn8epyl7.ucarecd.net/46e30545-5824-4331-8381-a2a86981850c/group_photo.png', alt: 'Group photo' },
//         { id: 4, src: 'https://2oxn8epyl7.ucarecd.net/6aa02f9f-1a0b-4a29-a0f9-3120ac4882c6/Artbook.png', alt: 'African Art book' },
//         { id: 5, src: 'https://2oxn8epyl7.ucarecd.net/ae0404bd-1d2d-4273-8e52-536091fe8443/microphone.png', alt: 'Studio session' },
//         { id: 6, src: 'https://2oxn8epyl7.ucarecd.net/4cd4e3a6-c550-4368-a01b-3e450f2c8a6f/model_smile.png', alt: 'Relaxing' },
//     ];

//     const skills = [
//         "Web Design", "Product Design", "No-Code Development",
//         "Salesforce Administration", "Graphic Designs",
//         "Illustration", "Prototyping", "Product Thinking",
//         "Ux research", "And Many more"
//       ];


//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-black">
//             <div className="md:pt-[30px] w-[95%] mx-auto">
//                 <Navbar />
//             </div>

//             <main className="bg-inherit text-white px-3 md:px-12 md:py-20 py-3">
//                 <div className="max-w-7xl mx-auto">
                    
//                     {/* Header Section */}
//                     <section className="mb-12">
//                         <h1 className="font-Satoshi text-[24px] md:text-[30px] leading-tight text-[#E9E9E9] max-w-5xl mb-4">
//                             I’m a Designer with 3 years experience across Web design, Product design and Brand design. 
//                             I run on vibes, Gym sessions, Liverpool games, Anime and binge watching series. 
//                             My design philosophy is simple: user-centricity — prioritizing the needs, behaviors, and experience of the end-user.
//                         </h1>
//                         <p className="reveal-text font-Satoshi text-xs text-[#B2B2B2] uppercase tracking-widest">
//                             Skills: UI/UX design, Brand Design, Product Design, Graphic Design, Sales...
//                         </p>
//                     </section>

//                     {/* Gallery Section */}
//                     <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-20">
//                         {galleryImages.map((img) => (
//                             <div key={img.id} className="gallery-item aspect-[3/4] overflow-hidden bg-[#111] rounded-sm">
//                                 <img 
//                                     src={img.src} 
//                                     alt={img.alt} 
//                                     className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 hover:scale-110" 
//                                 />
//                             </div>
//                         ))}
//                     </section>

//                     {/* Story Section */}
//                     <section className="bg-black py-2 flex justify-center items-center">
//       <div className=" w-full bg-black/40 backdrop-blur-sm">
//         <div className="space-y-6 text-gray-300 font-sans text-sm md:text-base lg:text-lg leading-relaxed">
          
//           <p>
//             I discovered design in 2022, after university. Even without a strong background in 
//             sketching, drawing, digital design gave me a way to solve real-life problems visually.
//           </p>

//           <p>
//             After studying Political Science at Osun State University, I realized I needed a 
//             practical, future-ready skill to thrive in today’s job market. That decision led 
//             me to explore several disciplines, starting with UI/UX design. Over time, my interest 
//             and experience expanded into graphic design and brand design.
//           </p>

//           <p>
//             I’ve since had the opportunity to work with talented cross-functional teams, an 
//             experience that sharpened not only my technical abilities but also my understanding 
//             of marketing, collaboration, and how design supports business goals.
//           </p>

//           <p>
//             In my free time, I enjoy binge-watching series, scrolling through my saved memes, 
//             watching football, and anime. To stay active, I go to the gym and play football, 
//             which helps me stay disciplined and energized. When it’s time to slow down, I relax 
//             by listening to 6lack and scrolling through Pinterest.
//           </p>

//           <p className="pt-4">
//             Together, these habits shape how I think and create — helping me see things from 
//             a user’s perspective and design thoughtful, user-focused solutions.
//           </p>
          
//         </div>
//       </div>
//     </section>

//     <section className="bg-black py-16 px-6 md:px-12">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-white text-xl font-bold mb-4">Skills</h2>
        
//         {/* Responsive grid: 1 col on mobile, 2 on small, 3 on large */}
//         <div className='flex flex-col gap-[25px]'>
//             <div className='flex gap-[18px] items-center justify-between w-full'>
//                 <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
//                     <p className='satoshi font-bold text-[#E9E9E9]'>Web Design</p>
//                 </span>
//                 <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
//                     <p className='satoshi font-bold text-[#E9E9E9]'>Product Design</p>
//                 </span>
//                 <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
//                     <p className='satoshi font-bold text-[#E9E9E9]'>No-Code Development</p>
//                 </span>
//             </div>
//             <div className='flex gap-[18px] items-center justify-between w-full'>
//                 <span className='basis-[50%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
//                     <p className='satoshi font-bold text-[#E9E9E9]'>Salesforce Administration</p>
//                 </span>
//                 <span className='basis-[50%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
//                     <p className='satoshi font-bold text-[#E9E9E9]'>Graphic Design</p>
//                 </span>
//             </div>
//             <div className='flex gap-[18px] items-center justify-between w-full'>
//                 <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
//                     <p className='satoshi font-bold text-[#E9E9E9]'>Illustration</p>
//                 </span>
//                 <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
//                     <p className='satoshi font-bold text-[#E9E9E9]'>Prototyping</p>
//                 </span>
//                 <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
//                     <p className='satoshi font-bold text-[#E9E9E9]'>Product Thinking </p>
//                 </span>
//             </div>
//             <div className='flex gap-[18px] items-center justify-between w-full'>
//                 <span className='basis-[50%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
//                     <p className='satoshi font-bold text-[#E9E9E9]'>UX Research</p>
//                 </span>
//                 <span className='basis-[50%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
//                     <p className='satoshi font-bold text-[#E9E9E9]'>And Many More</p>
//                 </span>
//             </div>
//         </div>
       
//       </div>
//     </section>

//                     {/* Learning List */}
//                     <section className="reveal-text border-t border-white/5 md:pt-12 pt-3">
//                         <h2 className="font-Satoshi text-white font-bold mb-6">Skills I’m Learning (and Planning to Learn Next)</h2>
//                         <ul className="font-Satoshi text-[#C5C3C3] text-sm space-y-2 mb-12">
//                             <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span> Framer (80% there)</li>
//                             <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span> Motion Design</li>
//                             <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span> Animation</li>
//                             <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span> Illustration</li>
//                             <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span> Software Development</li>
//                         </ul>

//                         <div className="space-y-6 max-w-4xl">
//                             <p>I’m still very much a work in progress. I’m enjoying the process, learning intentionally, and growing one step at a time.</p>
//                             <p className="text-white font-medium">I’ll be documenting this journey as I go — and you’re welcome to follow along.</p>
//                         </div>
//                     </section>
//                 </div>
//             </main>

//             <section className="bg-black py-16 px-6">
//                 <div className="w-[95%]  mx-auto">
//                     <h2 className="text-white text-xl font-bold mb-8">Founder Chapter - Building Subsi</h2>
//                     <div className="space-y-6 text-[#F5F5F5] text-sm md:text-base leading-relaxed">
//                     <p>
//                         Subsi Stores was created from a desire to make shopping more convenient and accessible while 
//                         helping businesses connect easily with customers. I saw an opportunity to build a platform 
//                         that brings stores and shoppers together in a simple, enjoyable way, and I took the step 
//                         to bring that vision to life.
//                     </p>
//                     <p>
//                         I handle brand direction and design to ensure a consistent, engaging experience, drive 
//                         marketing initiatives that attract and retain users, and coordinate operational processes 
//                         that keep the platform running smoothly. Managing these different areas has strengthened 
//                         my ability to think strategically while executing details that impact real users.
//                     </p>
//                     <p>
//                         This journey is not a solo effort. I work closely with my co-founders and an incredible team, 
//                         collaborating across decisions, ideas, and execution to keep the brand strong and the platform 
//                         running smoothly. Together, we combine our strengths to solve challenges, improve experiences, 
//                         and continuously build a brand people can trust.
//                     </p>
//                     <p>
//                         This chapter represents my growth not just as a founder, but as a collaborator and builder 
//                         committed to creating something meaningful with a team that shares the same vision.
//                     </p>
//                     <p className="pt-2 text-gray-300 italic">
//                         You can check out <span className="underline cursor-pointer text-white">Subsi.com.ng</span> to see some of our work or check out Subsi Stores on IG
//                     </p>
//                     </div>
//                 </div>
//             </section>

//             <ContactSection />

//             <footer className="mt-20 w-full border-t border-white/5 pt-8">
//                 <div className="bg-[#B2B5C3] py-3 rounded-sm text-black text-[10px] md:text-xs font-Satoshi flex justify-center items-center gap-2 mx-auto w-[100%]">
//                     <span>★</span> Nothing to see here i just wanted a footer <span>★</span>
//                 </div>
//             </footer>
//         </div>
//     );
// }

'use client'

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
// import { BackyardCarousel } from '../components/Carousel';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin'; // Required for typewriter effect
import { ContactSection } from "../components/HireMe";
import Navbar from "../components/Navbar";
import Carousel from '../components/Carousel';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Backyard({images}: {images: string[]}) {

    images = [
        'https://2oxn8epyl7.ucarecd.net/911bc26c-ec93-4b83-9bd2-801ffa16fc25/akindamola3.png',
        'https://2oxn8epyl7.ucarecd.net/a063e6dc-fdc6-4e7f-9035-24ba54bcd213/akindamola2.png',
        'https://2oxn8epyl7.ucarecd.net/46e30545-5824-4331-8381-a2a86981850c/group_photo.png',
        'https://2oxn8epyl7.ucarecd.net/6aa02f9f-1a0b-4a29-a0f9-3120ac4882c6/Artbook.png',
        'https://2oxn8epyl7.ucarecd.net/ae0404bd-1d2d-4273-8e52-536091fe8443/microphone.png',
        'https://2oxn8epyl7.ucarecd.net/4cd4e3a6-c550-4368-a01b-3e450f2c8a6f/model_smile.png',
        'https://2oxn8epyl7.ucarecd.net/184ee030-abce-41d4-b045-6d0617c314d2/Frame1984079326.png',
        'https://2oxn8epyl7.ucarecd.net/d5efc8bc-a774-470a-9ddc-1347bad66b13/Frame1984079324.png',
        'https://2oxn8epyl7.ucarecd.net/f4accaa8-f1f2-4478-ad14-dc0b0b8ad1b6/Frame19840793231.png',
        'https://2oxn8epyl7.ucarecd.net/ebda2653-f64a-4acf-935c-1745156a1f49/Frame1984079322.png',
        'https://2oxn8epyl7.ucarecd.net/28799228-d074-424d-a268-eab631fc494e/Frame1984079325.png'
    ]

    const [showSecond, setShowSecond] = useState(false);

    useEffect(() => {
    const timer = setTimeout(() => setShowSecond(true), 10500);
    return () => clearTimeout(timer);
    }, []); 

    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    // The full text for your typewriter animation
    const headerText = "I’m a Designer with 3 years experience across Web design, Product design and Brand design. I run on vibes, Gym sessions, Liverpool games, Anime and binge watching series. My design philosophy is simple: user-centricity — prioritizing the needs, behaviors, and experience of the end-user.";

    useGSAP(() => {
        // 1. Typewriter Animation for the Header
        gsap.to(headingRef.current, {
            duration: 10,
            text: headerText,
            ease: "none",
        });

        // 2. Fade-in Animation for all sections with the 'reveal' class
        const sections = gsap.utils.toArray('.reveal');
        sections.forEach((section: any) => {
            gsap.fromTo(section, 
                { opacity: 0, y: 30 }, 
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%", // Trigger when the top of the section is 85% down the viewport
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }, { scope: containerRef });

    
    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-black">
            <div className="md:pt-[30px] w-[90%] mx-auto">
                <Navbar />
            </div>

            <main className="w-[95%] mx-auto bg-inherit text-white px-3 md:px-12 md:py-12 py-3">
                <div className="max-w-7xl  mx-auto">
                    
                    {/* Header Section */}
                    <section className="mb-12">
                        {/* We leave the h1 empty so GSAP can "type" the text into it */}
                        <h1 
                            ref={headingRef} 
                            className="font-Satoshi text-[22px] md:text-[26px] leading-tight text-[#E9E9E9] max-w-5xl mb-4 min-h-[100px]"
                        ></h1>
                        {showSecond && (
                            <p className="reveal font-Satoshi text-xs text-[#B2B2B2] uppercase tracking-widest">
                                Skills: UI/UX design, Brand Design, Product Design, Graphic Design, Sales...
                            </p>
                        )}
                    </section>

                    {/* Gallery Section */}
                    {/* <section className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-20">
                        {galleryImages.map((img) => (
                            <div key={img.id} className="gallery-item aspect-[3/4] overflow-hidden bg-[#111] rounded-sm">
                                <img 
                                    src={img.src} 
                                    alt={img.alt} 
                                    className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                                />
                            </div>
                        ))}
                    </section> */}
                    <section className='max-w-[1200px] mx-auto mt-10'>
                          {/* <BackyardCarousel />   */}
                        <Carousel images={images} />
                    </section>

                    {/* Story Section */}
                    <section className="reveal bg-black py-2 flex justify-center items-center">
                        <div className=" w-full bg-black/40 backdrop-blur-sm">
                            <div className="space-y-6 text-gray-300 font-sans text-sm md:text-[18px] lg:tet-lg leading-relaxed">
                                <p className='text-[18px]'>
                                    I discovered design in 2022, after university. Even without a strong background in 
                                    sketching, drawing, digital design gave me a way to solve real-life problems visually.
                                </p>
                                <p>
                                    After studying Political Science at Osun State University, I realized I needed a 
                                    practical, future-ready skill to thrive in today’s job market. That decision led 
                                    me to explore several disciplines, starting with UI/UX design. Over time, my interest 
                                    and experience expanded into graphic design and brand design.
                                </p>
                                <p>
                                    I’ve since had the opportunity to work with talented cross-functional teams, an 
                                    experience that sharpened not only my technical abilities but also my understanding 
                                    of marketing, collaboration, and how design supports business goals.
                                </p>
                                <p>
                                    In my free time, I enjoy binge-watching series, scrolling through my saved memes, 
                                    watching football, and anime. To stay active, I go to the gym and play football, 
                                    which helps me stay disciplined and energized. When it’s time to slow down, I relax 
                                    by listening to 6lack and scrolling through Pinterest.
                                </p>
                                <p className="pt-4">
                                    Together, these habits shape how I think and create — helping me see things from 
                                    a user’s perspective and design thoughtful, user-focused solutions.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    {/* <section className="reveal bg-black py-16 md:px-12">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-white text-xl font-bold mb-4">Skills</h2>
                            <div className='flex flex-col gap-[25px]'>
                                <div className='flex gap-[18px] items-center justify-between w-full'>
                                    <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
                                        <p className='satoshi font-bold text-[#E9E9E9]'>Web Design</p>
                                    </span>
                                    <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
                                        <p className='satoshi font-bold text-[#E9E9E9]'>Product Design</p>
                                    </span>
                                    <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
                                        <p className='satoshi font-bold text-[#E9E9E9]'>No-Code Development</p>
                                    </span>
                                </div>
                                <div className='flex gap-[18px] items-center justify-between w-full'>
                                    <span className='basis-[50%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
                                        <p className='satoshi font-bold text-[#E9E9E9]'>Salesforce Administration</p>
                                    </span>
                                    <span className='basis-[50%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
                                        <p className='satoshi font-bold text-[#E9E9E9]'>Graphic Design</p>
                                    </span>
                                </div>
                                <div className='flex gap-[18px] items-center justify-between w-full'>
                                    <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
                                        <p className='satoshi font-bold text-[#E9E9E9]'>Illustration</p>
                                    </span>
                                    <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
                                        <p className='satoshi font-bold text-[#E9E9E9]'>Prototyping</p>
                                    </span>
                                    <span className='basis-[33%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
                                        <p className='satoshi font-bold text-[#E9E9E9]'>Product Thinking</p>
                                    </span>
                                </div>
                                <div className='flex gap-[18px] items-center justify-between w-full'>
                                    <span className='basis-[50%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
                                        <p className='satoshi font-bold text-[#E9E9E9]'>UX Research</p>
                                    </span>
                                    <span className='basis-[50%] border border-zinc-800 rounded-lg py-4 px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default'>
                                        <p className='satoshi font-bold text-[#E9E9E9]'>And Many More</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section className="reveal bg-black py-12 md:py-16 px-6 md:px-12">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-white text-lg md:text-xl font-bold mb-6">Skills</h2>
                            
                            <div className="flex flex-col gap-4 md:gap-[25px]">
                                
                                {/* Row 1: 3-column layout */}
                                <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-[18px] items-center justify-between w-full">
                                    <span className="basis-full sm:basis-[48%] md:basis-[33%] border border-zinc-800 rounded-lg py-3 px-4 md:py-4 md:px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default">
                                        <p className="satoshi font-bold text-[#E9E9E9] text-xs sm:text-sm md:text-base">Web Design</p>
                                    </span>
                                    <span className="basis-full sm:basis-[48%] md:basis-[33%] border border-zinc-800 rounded-lg py-3 px-4 md:py-4 md:px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default">
                                        <p className="satoshi font-bold text-[#E9E9E9] text-xs sm:text-sm md:text-base">Product Design</p>
                                    </span>
                                    <span className="basis-full sm:basis-full md:basis-[33%] border border-zinc-800 rounded-lg py-3 px-4 md:py-4 md:px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default">
                                        <p className="satoshi font-bold text-[#E9E9E9] text-xs sm:text-sm md:text-base">No-Code Development</p>
                                    </span>
                                </div>

                                {/* Row 2: 2-column layout */}
                                <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-[18px] items-center justify-between w-full">
                                    <span className="basis-full sm:basis-[48%] md:basis-[50%] border border-zinc-800 rounded-lg py-3 px-4 md:py-4 md:px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default">
                                        <p className="satoshi font-bold text-[#E9E9E9] text-xs sm:text-sm md:text-base text-center">Salesforce Administration</p>
                                    </span>
                                    <span className="basis-full sm:basis-[48%] md:basis-[50%] border border-zinc-800 rounded-lg py-3 px-4 md:py-4 md:px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default">
                                        <p className="satoshi font-bold text-[#E9E9E9] text-xs sm:text-sm md:text-base">Graphic Design</p>
                                    </span>
                                </div>

                                {/* Row 3: 3-column layout */}
                                <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-[18px] items-center justify-between w-full">
                                    <span className="basis-full sm:basis-[48%] md:basis-[33%] border border-zinc-800 rounded-lg py-3 px-4 md:py-4 md:px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default">
                                        <p className="satoshi font-bold text-[#E9E9E9] text-xs sm:text-sm md:text-base">Illustration</p>
                                    </span>
                                    <span className="basis-full sm:basis-[48%] md:basis-[33%] border border-zinc-800 rounded-lg py-3 px-4 md:py-4 md:px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default">
                                        <p className="satoshi font-bold text-[#E9E9E9] text-xs sm:text-sm md:text-base">Prototyping</p>
                                    </span>
                                    <span className="basis-full sm:basis-full md:basis-[33%] border border-zinc-800 rounded-lg py-3 px-4 md:py-4 md:px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default">
                                        <p className="satoshi font-bold text-[#E9E9E9] text-xs sm:text-sm md:text-base">Product Thinking</p>
                                    </span>
                                </div>

                                {/* Row 4: 2-column layout */}
                                <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-[18px] items-center justify-between w-full">
                                    <span className="basis-full sm:basis-[48%] md:basis-[50%] border border-zinc-800 rounded-lg py-3 px-4 md:py-4 md:px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default">
                                        <p className="satoshi font-bold text-[#E9E9E9] text-xs sm:text-sm md:text-base">UX Research</p>
                                    </span>
                                    <span className="basis-full sm:basis-[48%] md:basis-[50%] border border-zinc-800 rounded-lg py-3 px-4 md:py-4 md:px-6 flex justify-center items-center text-gray-300 hover:border-zinc-500 transition-colors cursor-default">
                                        <p className="satoshi font-bold text-[#E9E9E9] text-xs sm:text-sm md:text-base">And Many More</p>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Learning List */}
                    <section className="reveal border-t border-white/5 md:pt-12 pt-3">
                        <h2 className="font-Satoshi text-white font-bold mb-6">Skills I’m Learning (and Planning to Learn Next)</h2>
                        <ul className="font-Satoshi text-[#C5C3C3] text-sm space-y-2 mb-12">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span> Framer (80% there)</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span> Motion Design</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span> Animation</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span> Illustration</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span> Software Development</li>
                        </ul>

                        <div className="space-y-6 max-w-4xl">
                            <p>I’m still very much a work in progress. I’m enjoying the process, learning intentionally, and growing one step at a time.</p>
                            <p className="text-white font-medium">I’ll be documenting this journey as I go — and you’re welcome to follow along.</p>
                        </div>
                    </section>
                </div>
            </main>

            {/* Founder Chapter Section */}
            <section className="w-[95%] mx-auto reveal bg-black py-16 px-6">
                <div className="w-[95%] mx-auto">
                    <h2 className="text-white text-xl font-bold mb-8">Founder Chapter - Building Subsi</h2>
                    <div className="space-y-6 text-[#F5F5F5] text-sm md:text-base leading-relaxed">
                        <p>
                            Subsi Stores was created from a desire to make shopping more convenient and accessible while 
                            helping businesses connect easily with customers. I saw an opportunity to build a platform 
                            that brings stores and shoppers together in a simple, enjoyable way, and I took the step 
                            to bring that vision to life.
                        </p>
                        <p>
                            I handle brand direction and design to ensure a consistent, engaging experience, drive 
                            marketing initiatives that attract and retain users, and coordinate operational processes 
                            that keep the platform running smoothly. Managing these different areas has strengthened 
                            my ability to think strategically while executing details that impact real users.
                        </p>
                        <p>
                            This journey is not a solo effort. I work closely with my co-founders and an incredible team, 
                            collaborating across decisions, ideas, and execution to keep the brand strong and the platform 
                            running smoothly. Together, we combine our strengths to solve challenges, improve experiences, 
                            and continuously build a brand people can trust.
                        </p>
                        <p>
                            This chapter represents my growth not just as a founder, but as a collaborator and builder 
                            committed to creating something meaningful with a team that shares the same vision.
                        </p>
                        <p className="pt-2 text-gray-300 italic">
                            You can check out <span className="underline cursor-pointer text-white">Subsi.com.ng</span> to see some of our work or check out Subsi Stores on IG
                        </p>
                    </div>
                </div>
            </section>

            <ContactSection />

            <footer className="reveal mt-20 w-full border-t border-white/5 pt-8">
                <div className="bg-[#B2B5C3] py-3 rounded-sm text-black text-[10px] md:text-xs font-Satoshi flex justify-center items-center gap-2 mx-auto w-[100%]">
                    <span>★</span> Nothing to see here i just wanted a footer <span>★</span>
                </div>
            </footer>
        </div>
    );
}