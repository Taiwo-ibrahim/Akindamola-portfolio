'use client'

import Navbar from "../components/Navbar";
import { useForm, ValidationError } from '@formspree/react';
import { VscSend } from "react-icons/vsc";


export default function Contact() {
    const [state, handleSubmit] = useForm("xgoldnbb")


    return  (
        <div className="w-full min-h-screen bg-black bg-gradient-to-br from-gray-900 via-black to-black">
            <div className="md:pt-[30px] w-[95%] mx-auto">
                <Navbar />
            </div>

            <div className="w-full mx-auto mt-[30px] md:mt-[80px]">
                <div className="flex justify-center">
                    {/* Replace with your actual image path */}
                    <img 
                        src="https://2oxn8epyl7.ucarecd.net/b3a493bc-b430-4123-b737-904f8910c881/akindamola.png" 
                        alt="Akindamola" 
                        className="max-w-500px w-[60%] md:w-[30%]"
                    />
                </div>
            </div>


        <div className="flex flex-col items-center justify-center mx-auto mt-[40px] md:mt-[80px] w-[90%] max-w-[1000px] text-center">
            
            {/* Heading - centered text and margin auto for max-width constraint */}
            <h2 className="font-Inter text-white text-2xl md:text-3xl leading-snug w-[90%] mb-2 mx-auto">
                Chasing new problems to solve, fun teams to collaborate with, and ideas that deserve to exist.
            </h2>
            
            {/* Subtext */}
            <p className="font-Satoshi text-xs text-[#B2B2B2] mb-10">
                If this sounds like you, reach out :)
            </p>

            {/* Form Container - w-full to be responsive, max-w-lg to keep it neat on desktop */}

            {state.succeeded ? (
                <p className="text-green-400 font-Satoshi text-sm">
                Thank you! Your message has been sent 🎉
              </p>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg mx-auto">
                <input 
                name="name"
                required
                type="text" 
                placeholder="Name" 
                className="bg-transparent text-[#E9E9E9] border border-white/20 p-4 rounded-sm font-Satoshi text-sm focus:outline-none focus:border-white transition-colors w-full"
                />
                 <ValidationError prefix="Name" field="name" errors={state.errors} />

                <input 
                type="email" 
                name="email"
                required
                placeholder="E-mail address" 
                className="bg-transparent text-[#E9E9E9] border border-white/20 p-4 rounded-sm font-Satoshi text-sm focus:outline-none focus:border-white transition-colors w-full"
                />

                <ValidationError prefix="Email" field="email" errors={state.errors} />


                <textarea 
                name="message"
                required
                placeholder="Message" 
                rows={5}
                className="text-[#E9E9E9] bg-transparent border border-white/20 p-4 rounded-sm font-Inter text-sm focus:outline-none focus:border-white transition-colors resize-none w-full"
                />

                <ValidationError prefix="Message" field="message" errors={state.errors} />

                
                {/* Button - centered in the flex column via mx-auto */}
                <button 
                type="submit" 
                disabled={state.submitting}
                className="w-fit mt-4 mx-auto bg-[#D1D1D1] text-black px-8 py-3 rounded-full font-Inter font-medium flex items-center gap-2 hover:bg-white transition-colors"
                >
                 {state.submitting ? "Sending..." : "Hire Me"} 
                <span className="text-lg"><VscSend /></span>
                </button>
            </form>
            )}
            

            </div>

            
            <footer className="mt-32 w-full border-t border-white/5 pt-8">
                <div className="bg-[#B2B5C3] py-3 rounded-sm text-black text-[10px] md:text-xs font-Satoshi flex justify-center items-center gap-2">
                <span>★</span> Nothing to see here i just wanted a footer <span>★</span>
                </div>
            </footer>
        </div>
    )
}