import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2, ChevronRight, Trophy, Users, ShieldCheck, Image as ImageIcon } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  const leadership = [
    {
      title: 'Machine Learning Intern',
      period: 'Jul 2026 – Present',
      organization: 'FlyRank AI (Remote)',
      description: 'Developing and evaluating Machine Learning models using Python and Scikit-learn for AI-driven applications. Performing data preprocessing, feature engineering, and exploratory data analysis (EDA) to optimize predictive performance for real-world solutions.',
      skills: ['Machine Learning', 'Scikit-learn', 'Python', 'Feature Engineering', 'EDA'],
      image: '/assets/photos/project_discussion.jpg',
      imageCaption: 'FlyRank AI ML Development'
    },
    {
      title: 'AWS Student Builder Group Leader',
      period: 'Jul 2026 – Present',
      organization: 'AWS Community — Nashik, MH',
      description: 'Leading the AWS Student Builder Group in Nashik. Spearheading cloud computing learning initiatives, technical workshops, and mentoring student developers on AWS infrastructure and cloud solutions.',
      skills: ['AWS Cloud', 'Community Leadership', 'Technical Workshops', 'Cloud Architecture'],
      image: '/assets/photos/tedx_leader1.jpg',
      imageCaption: 'AWS Community Leadership'
    },
    {
      title: 'GeeksforGeeks Campus Ambassador',
      period: 'Jan 2026 – Present',
      organization: 'GeeksforGeeks Community — Nashik, MH',
      description: 'Campus Ambassador representing GeeksforGeeks at MET Institute of Engineering. Organizing coding competitions, hackathons, and promoting DSA, Data Science, and Machine Learning resources.',
      skills: ['Technical Advocacy', 'Community Outreach', 'Event Management', 'Public Speaking'],
      image: '/assets/photos/group_project.jpg',
      imageCaption: 'GFG Campus Community'
    }
  ];

  const education = [
    {
      institution: 'MET Institute Of Engineering, Nashik (Mumbai Educational Trust)',
      degree: 'Bachelor of Engineering in Computer Engineering',
      period: 'Aug 2024 – Expected July 2028',
      details: 'Current Computer Engineering student specializing in Machine Learning, Data Analytics, Statistics, SQL, Python, and Data Science applications.',
      scores: [
        { label: 'Degree', score: 'B.E. Computer Engineering' },
        { label: 'Status', score: 'Undergraduate (Expected 2028)' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'Top 100 Rank – Elastic Blogathon',
      issuer: 'Elastic',
      date: '2026',
      badge: 'National Honor',
      desc: 'Achieved Top 100 Rank nationally in the Elastic Blogathon for technical writing and architecture insights.',
      image: '/assets/photos/award_shantam_shukla.jpg'
    },
    {
      title: 'HackerEarth Hackathon – Tesco Retail Media Innovation Jam',
      issuer: 'HackerEarth & Tesco',
      date: '2026',
      badge: 'Hackathon Finalist',
      desc: 'Recognized for building campaign incentivisation analytics and statistical data modeling solutions.',
      image: '/assets/photos/award_munje_sir.jpg'
    },
    {
      title: 'Crash Course on Python by GOOGLE',
      issuer: 'Google (Coursera)',
      date: '2026',
      badge: 'Google Certified',
      desc: 'Foundational and advanced Python programming techniques, data structures, and script automation.',
      image: null
    },
    {
      title: 'SQL Basics & Data Science Foundations',
      issuer: 'Data Science Platform',
      date: '2026',
      badge: 'Data Analytics',
      desc: 'Relational database management, SQL queries (MySQL), data manipulation, and visualization.',
      image: null
    },
    {
      title: 'AI Skills Fest 2026',
      issuer: 'AI Community',
      date: '2026',
      badge: 'Generative AI',
      desc: 'Hands-on exploration of Machine Learning, Artificial Intelligence, LLMs, and RAG architectures.',
      image: null
    }
  ];

  return (
    <section id="experience" className="bg-[#faf8f5] py-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-[#e8e4dc] font-sans">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold uppercase tracking-widest text-amber-900 mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-700" /> Career & Credentials
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a1917] tracking-tight mb-4">
            Leadership, Education & Certifications
          </h2>
          <p className="text-stone-600 text-base">
            Proven track record in engineering, leadership of TEDx events, and continuous learning.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div data-aos="fade-up" className="flex justify-center mb-16">
          <div className="flex bg-white p-1.5 rounded-full border border-[#e8e4dc] shadow-sm">
            <button
              onClick={() => setActiveTab('leadership')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'leadership'
                  ? 'bg-[#1a1917] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Leadership & Roles</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-[#1a1917] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'certifications'
                  ? 'bg-[#1a1917] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certifications & Awards</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Leadership & Roles */}
        {activeTab === 'leadership' && (
          <div className="space-y-8">
            {leadership.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-[#e8e4dc] rounded-3xl p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl flex flex-col lg:flex-row gap-8 items-center"
              >
                {/* Text Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#1a1917]">{item.title}</h3>
                      <p className="text-sm font-mono text-amber-800 font-bold">{item.organization}</p>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono text-stone-700 font-bold">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-stone-100 text-xs font-mono text-stone-700 border border-stone-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Photo Highlight Thumbnail */}
                {item.image && (
                  <div className="w-full lg:w-72 aspect-[4/3] rounded-2xl overflow-hidden border border-[#e8e4dc] relative group shrink-0 bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white font-bold bg-black/60 px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                      <ImageIcon className="w-3 h-3 text-amber-400" /> {item.imageCaption}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Education */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-[#e8e4dc] rounded-3xl p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1a1917]">{item.institution}</h3>
                    <p className="text-sm font-mono text-amber-800 font-bold">{item.degree}</p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-mono text-stone-700 font-bold">
                    {item.period}
                  </span>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  {item.details}
                </p>

                {/* Score Cards */}
                <div className="flex flex-wrap gap-3">
                  {item.scores.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 border border-stone-200">
                      <span className="text-xs text-stone-500 font-mono">{s.label}:</span>
                      <span className="text-sm font-black text-[#1a1917]">{s.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: Certifications & Awards */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-[#e8e4dc] rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl flex flex-col justify-between"
              >
                {item.image && (
                  <div className="w-full h-44 bg-stone-100 overflow-hidden relative group border-b border-[#e8e4dc]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-900 text-[10px] font-mono font-bold uppercase">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-stone-500 font-bold">{item.date}</span>
                  </div>

                  <h3 className="text-lg font-black text-[#1a1917] mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs font-mono text-stone-500 mb-3">{item.issuer}</p>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">{item.desc}</p>
                </div>

                <div className="p-6 pt-0 flex items-center gap-1.5 text-xs text-amber-800 font-bold font-mono border-t border-stone-100 mt-auto">
                  <ShieldCheck className="w-4 h-4 text-amber-700" /> Verified Credential
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;
