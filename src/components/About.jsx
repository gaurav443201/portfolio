import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/hero_assets/hero_center.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = ["Python", "Machine Learning", "Data Analytics", "Scikit-learn", "R Language", "SQL (MySQL)", "Exploratory Data Analysis", "Statistics"];
const backendSkills = ["RAG Pipelines", "OpenAI / GPT", "Whisper AI", "Embeddings", "Joblib", "Pandas", "Feature Engineering", "Predictive Modeling"];
const aiSkills = ["AWS Cloud", "Power BI", "Tableau", "Microsoft Azure", "Databricks", "Jupyter Notebook", "Docker", "Git & GitHub"];
const toolsSkills = ["AWS Student Builder Leader", "GeeksforGeeks Ambassador", "FlyRank AI ML Intern", "Elastic Blogathon Top 100", "HackerEarth Winner"];

const aboutWords = [
  { text: "Hey," }, { text: "I'm" },
  { text: "Gaurav.", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#ccff00]" },
  { text: "A" }, { text: "Computer" }, { text: "Engineering" }, { text: "student" }, { text: "and" }, { text: "Machine" }, { text: "Learning" }, { text: "Intern" }, { text: "at" },
  { text: "FlyRank AI,", className: "text-[#ccff00] font-medium" },
  { text: "passionate" }, { text: "about" }, { text: "Data" }, { text: "Science," }, { text: "Predictive" }, { text: "Analytics," }, { text: "and" }, { text: "building" }, { text: "intelligent" }, { text: "AI" }, { text: "solutions." },
  { text: "I" }, { text: "also" }, { text: "serve" }, { text: "as" }, { text: "an" },
  { text: "AWS Student Builder Group Leader", className: "text-white font-medium" },
  { text: "and" },
  { text: "GeeksforGeeks Campus Ambassador,", className: "text-white font-medium" },
  { text: "organizing" }, { text: "tech" }, { text: "initiatives" }, { text: "and" }, { text: "helping" }, { text: "students" }, { text: "explore" }, { text: "emerging" }, { text: "cloud" }, { text: "and" }, { text: "AI" }, { text: "technologies." },
  { text: "I" }, { text: "love" }, { text: "solving" }, { text: "complex" }, { text: "data" }, { text: "problems" }, { text: "using" },
  { text: "Python,", className: "text-white font-medium" },
  { text: "Scikit-learn,", className: "text-white font-medium" },
  { text: "RAG Pipelines,", className: "text-white font-medium" },
  { text: "SQL," }, { text: "and" },
  { text: "Power BI.", className: "text-[#ccff00] font-medium" }
];

const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];
    
    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">

      <div className="max-w-7xl mx-auto w-full z-10">

        {/* Mobile Intro Text */}
        <h2 ref={introMobileRef} className="lg:hidden text-center text-[18vw] md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none mb-8 md:mb-12">
          Intro
        </h2>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left Column - Gaurav Photo */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-10">
            <div className="group relative bg-[#111] p-3 md:p-3.5 rounded-3xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#ccff00]/50 transition-all duration-500 transform hover:-rotate-1 hover:scale-[1.02]">
              
              {/* Image Container */}
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-84 aspect-[3/4] overflow-hidden rounded-2xl bg-black border border-white/10">
                <img
                  src={aboutImage}
                  alt="Gaurav Navghare"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#ccff00] text-[10px] font-mono font-bold border border-[#ccff00]/30 shadow-md">
                    01 // GAURAV
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs font-mono text-white/90 bg-black/70 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                  <span className="font-bold">Gaurav Navghare</span>
                  <span className="text-[#ccff00] text-[10px]">ML & Data Science</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Slightly Reduced Intro Text Card Aligned to Photo */}
          <div className="flex flex-col justify-center space-y-6 z-10 w-full px-2 md:px-0">
            {/* Desktop Intro Text */}
            <h2 ref={introDesktopRef} className="hidden lg:block text-[9rem] xl:text-[10rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none">
              Intro
            </h2>
            
            {/* Adjusted Text Container Card */}
            <div className="relative bg-white/5 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/[0.07] transition-colors duration-300 text-center lg:text-left">
              <p ref={textRef} className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {aboutWords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span className={`word ${wordObj.className || ''}`}>
                      {wordObj.text}
                    </span>
                    {index < aboutWords.length - 1 && " "}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Scrolling Skills Marquee */}
      <div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-16 -mx-6 md:-mx-16">
        {/* First Row */}
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...frontendSkills, ...frontendSkills, ...frontendSkills, ...frontendSkills].map((item, i) => (
              <div key={`front-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-[#ccff00] font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Second Row */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...backendSkills, ...backendSkills, ...backendSkills, ...backendSkills].map((item, i) => (
              <div key={`back-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-[#ccff00] font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Third Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...aiSkills, ...aiSkills, ...aiSkills, ...aiSkills].map((item, i) => (
              <div key={`ai-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-[#ccff00] font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
        {/* Fourth Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...toolsSkills, ...toolsSkills, ...toolsSkills, ...toolsSkills].map((item, i) => (
              <div key={`tools-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-[#ccff00] font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
