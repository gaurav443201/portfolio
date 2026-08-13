import React, { useState } from 'react';

const projects = [
  {
    id: 'rag-assistant',
    name: 'RAG AI TEACHING ASSISTANT ON YOUR DATA',
    title: (
      <>
        RAG AI <span className="font-light italic text-gray-300 lowercase font-serif">teaching</span><br />
        ASSISTANT ON YOUR DATA
      </>
    ),
    description: "A Retrieval-Augmented Generation (RAG) platform to convert custom lecture video archives into an interactive AI teaching assistant. Automatically transcribes video audio to MP3, converts speech to JSON, generates vector embeddings, and feeds contextual prompt payloads to LLMs.",
    image: "/assets/photos/rag_project.png",
    github: "https://github.com/gaurav443201/RAG-BASED-PROJECT",
    modalType: 'rag'
  },
  {
    id: 'bunk-manager-pro',
    name: 'BUNK MANAGER PRO',
    title: (
      <>
        BUNK MANAGER <span className="font-light italic text-gray-300 lowercase font-serif">pro</span><br />
        ATTENDANCE ENGINE
      </>
    ),
    description: "A modern educational web application designed to help students track attendance, compute bunk allowances above 75%, and calculate recovery classes. Features single-click attendance logging, Chart.js visual analytics, dark mode, and a Flask/MongoDB backend.",
    image: "/assets/photos/bunk_manager.png",
    github: "https://github.com/gaurav443201/bunk-manager-pro",
    modalType: 'bunk'
  }
];

const ragPipelineSteps = [
  {
    step: "Step 1",
    title: "Collect your video",
    details: "Move all the video files to the video folder",
    script: "video/",
    action: "Move all your input lecture / tutorial video files into the target video/ directory."
  },
  {
    step: "Step 2",
    title: "Convert to mp3",
    details: "Convert all the video files to mp3 by running video_to_mp3",
    script: "python video_to_mp3.py",
    action: "Extract high-quality audio streams from mp4/mkv video files into mp3 format."
  },
  {
    step: "Step 3",
    title: "Convert mp3 to json",
    details: "Convert all the mp3 files to json by running mp3_to_json",
    script: "python mp3_to_json.py",
    action: "Run speech recognition to generate detailed JSON transcriptions with timestamps."
  },
  {
    step: "Step 4",
    title: "Convert the json files to vectors",
    details: "Use the file preprocess_json to convert the json files to a dataframe with Embedding",
    script: "python preprocess_json.py",
    action: "Chunk JSON transcriptions, calculate vector embeddings, and export vector dataframe."
  },
  {
    step: "Step 5",
    title: "Prompt generation and feeding to LLM",
    details: "Read the joblib file and load it into the memory. Then create a prompt as per the user query and feed it to the LLM",
    script: "python rag_query_llm.py",
    action: "Load joblib index into RAM, compute similarity match for user query, assemble context prompt, and query the LLM."
  }
];

const bunkSetupSteps = [
  {
    step: "01",
    title: "Environment & MongoDB Setup",
    command: "python -m venv venv && venv\\Scripts\\activate",
    details: "Ensure Python 3.8+ and MongoDB URI (local mongodb://localhost:27017/ or MongoDB Atlas) are configured."
  },
  {
    step: "02",
    title: "Install Dependencies",
    command: "pip install -r requirements.txt",
    details: "Installs Flask, PyMongo, and core backend libraries."
  },
  {
    step: "03",
    title: "Database Environment Variable",
    command: "set MONGO_URI=mongodb://localhost:27017/bunkmanager",
    details: "Configures MONGO_URI env variable (defaults to local MongoDB server)."
  },
  {
    step: "04",
    title: "Launch Flask Server",
    command: "python app.py",
    details: "Starts local development server on http://localhost:5000/."
  },
  {
    step: "05",
    title: "Presentation Demo Login",
    command: "User: gaurav443201 | Pass: 443201",
    details: "Preconfigured secure login bypass for instant demo presentation access."
  }
];

const bunkFeatures = [
  { title: "Bunk Limit Calculator", desc: "Accurately calculates affordable bunks while staying above 75% attendance threshold." },
  { title: "Recovery Logic Engine", desc: "Calculates precise class attendance count needed to recover low attendance." },
  { title: "Visual Subject Analytics", desc: "Interactive Chart.js subject breakdowns and attendance distribution." },
  { title: "One-Click Quick Logging", desc: "Instant buttons to mark Attended or Bunked with real-time UI updates." },
  { title: "Auto-Keep-Awake Script", desc: "Pinging script prevents cloud hosting servers from spinning down during inactivity." }
];

const Project = ({ onCtaClick }) => {
  const [activeModal, setActiveModal] = useState(null); // 'rag' | 'bunk' | null

  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16 relative">

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">

        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
            As a full-stack & AI engineer using modern architectures, computer vision, and high-performance algorithms tailored for scalable production systems.
          </p>
          <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={proj.id || proj.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-16 w-full group`}>

              {/* Image Side */}
              <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-sm">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale hover:grayscale-0"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-6">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10">
                  {proj.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  {proj.modalType ? (
                    <button 
                      onClick={() => setActiveModal(proj.modalType)} 
                      className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-bold hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#ccff00]/10"
                    >
                      {proj.modalType === 'rag' ? 'Pipeline Guide' : 'Setup & Features'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </button>
                  ) : (
                    <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors inline-flex items-center gap-2">
                      Live Demo
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </button>
                  )}

                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cursor-pointer px-6 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
                  >
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* RAG AI Teaching Assistant Pipeline Modal */}
      {activeModal === 'rag' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0f0f0f] border border-[#ccff00]/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-white/10">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ccff00]/10 text-[#ccff00] text-xs font-mono font-bold uppercase tracking-wider">
                  Project Integration Guide
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-2 uppercase tracking-tight">
                  How to use this RAG AI Teaching assistant on your own data
                </h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 5 Step Workflow Cards */}
            <div className="py-6 space-y-4">
              {ragPipelineSteps.map((s) => (
                <div key={s.step} className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:border-[#ccff00]/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded bg-[#ccff00] text-black font-mono font-black text-xs">
                        {s.step}
                      </span>
                      <h4 className="text-base font-bold text-white uppercase tracking-wide">
                        {s.title}
                      </h4>
                    </div>
                    <code className="text-xs font-mono bg-black/60 px-3 py-1 rounded border border-white/10 text-[#ccff00]">
                      {s.script}
                    </code>
                  </div>
                  <p className="text-xs md:text-sm text-gray-300 font-light mb-2">
                    {s.details}
                  </p>
                  <p className="text-xs text-gray-400 font-mono">
                    💡 <span className="italic">{s.action}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a 
                href="https://github.com/gaurav443201/RAG-BASED-PROJECT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#b3e600] transition-colors flex items-center justify-center gap-2"
              >
                <span>View Full GitHub Repository</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <button
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-gray-300 font-medium text-xs uppercase hover:bg-white/10 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Bunk Manager Pro Modal */}
      {activeModal === 'bunk' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0f0f0f] border border-[#ccff00]/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-white/10">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ccff00]/10 text-[#ccff00] text-xs font-mono font-bold uppercase tracking-wider">
                  Full-Stack Application Overview
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-2 uppercase tracking-tight">
                  Bunk Manager Pro — Setup & Architecture
                </h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Features Highlight Grid */}
            <div className="py-6">
              <h4 className="text-xs font-mono font-bold text-[#ccff00] uppercase tracking-widest mb-4">Core Engine Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {bunkFeatures.map((f) => (
                  <div key={f.title} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h5 className="text-sm font-bold text-white mb-1">{f.title}</h5>
                    <p className="text-xs text-gray-300 font-light">{f.desc}</p>
                  </div>
                ))}
              </div>

              {/* Setup Steps */}
              <h4 className="text-xs font-mono font-bold text-[#ccff00] uppercase tracking-widest mb-4">Local Setup Instructions</h4>
              <div className="space-y-3">
                {bunkSetupSteps.map((s) => (
                  <div key={s.step} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-[#ccff00] text-black font-mono font-black text-xs">
                          {s.step}
                        </span>
                        <h5 className="text-sm font-bold text-white">{s.title}</h5>
                      </div>
                      <code className="text-xs font-mono bg-black/60 px-3 py-1 rounded border border-white/10 text-[#ccff00]">
                        {s.command}
                      </code>
                    </div>
                    <p className="text-xs text-gray-300 font-light">{s.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pb-6">
              {['Python', 'Flask', 'PyMongo', 'MongoDB', 'Tailwind CSS', 'Alpine.js', 'Chart.js', 'FontAwesome'].map(t => (
                <span key={t} className="px-2.5 py-1 rounded bg-white/10 text-xs font-mono font-bold text-gray-200 border border-white/10">
                  {t}
                </span>
              ))}
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a 
                href="https://github.com/gaurav443201/bunk-manager-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#ccff00] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#b3e600] transition-colors flex items-center justify-center gap-2"
              >
                <span>GitHub Repository</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <button
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-gray-300 font-medium text-xs uppercase hover:bg-white/10 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Project;


