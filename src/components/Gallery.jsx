import React, { useState } from 'react';
import { Camera, X, Award, Users, Mic, Sparkles, ExternalLink, ShieldCheck, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const photos = [
    {
      id: 1,
      title: 'AWS Student Builder Community Leadership',
      category: 'AWS Leadership',
      image: '/assets/photos/tedx_leader1.jpg',
      caption: 'Leading the AWS Student Builder Group in Nashik, conducting cloud workshops and mentoring developers.',
      badge: 'AWS Leader',
      rotation: 'rotate-1 sm:-rotate-2'
    },
    {
      id: 2,
      title: 'GeeksforGeeks Campus Ambassador Initiative',
      category: 'Community Leadership',
      image: '/assets/photos/tedx_speaker.jpg',
      caption: 'Empowering student developers with GFG coding resources, workshops, and hackathons.',
      badge: 'GFG Ambassador',
      rotation: '-rotate-1 sm:rotate-2'
    },
    {
      id: 3,
      title: 'Elastic Blogathon National Recognition',
      category: 'Awards & Honors',
      image: '/assets/photos/award_shantam_shukla.jpg',
      caption: 'Achieved Top 100 Rank nationally in the Elastic Blogathon for technical architecture writing.',
      badge: 'Top 100 Rank',
      rotation: 'rotate-2 sm:-rotate-1'
    },
    {
      id: 4,
      title: 'HackerEarth Tesco Retail Media Innovation Jam',
      category: 'Awards & Honors',
      image: '/assets/photos/award_munje_sir.jpg',
      caption: 'Recognized for campaign incentivisation analytics & data science modeling in HackerEarth Jam.',
      badge: 'Hackathon Finalist',
      rotation: '-rotate-2 sm:rotate-1'
    },
    {
      id: 5,
      title: 'FlyRank AI Machine Learning Development',
      category: 'Machine Learning',
      image: '/assets/photos/project_discussion.jpg',
      caption: 'Developing and evaluating ML predictive models, data preprocessing, and EDA pipelines at FlyRank AI.',
      badge: 'FlyRank AI',
      rotation: 'rotate-1 sm:rotate-2'
    },
    {
      id: 6,
      title: 'MET Institute Engineering Tech Sprint',
      category: 'Community Leadership',
      image: '/assets/photos/group_project.jpg',
      caption: 'Collaborating with fellow Computer Engineering student developers at MET Institute of Engineering.',
      badge: 'MET Engineering',
      rotation: '-rotate-1 sm:-rotate-2'
    }
  ];

  const filters = ['All', 'AWS Leadership', 'Community Leadership', 'Awards & Honors', 'Machine Learning'];

  const filteredPhotos = activeFilter === 'All'
    ? photos
    : photos.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="bg-[#faf8f5] py-28 px-6 md:px-12 w-full relative overflow-hidden border-t border-[#e8e4dc] font-sans">
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold uppercase tracking-widest text-amber-900 mb-4">
              <Camera className="w-3.5 h-3.5 text-amber-700" /> Visual Moments & Highlights
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1a1917] tracking-tight">
              Leadership & Award Highlights
            </h2>
          </div>

          {/* Filter Buttons */}
          <div data-aos="fade-left" className="flex flex-wrap gap-2 bg-white p-1.5 rounded-full border border-[#e8e4dc] shadow-sm self-start md:self-auto">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#1a1917] text-white shadow-md'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Framed Polaroid Photo Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative bg-white p-3.5 rounded-3xl border border-[#e8e4dc] cursor-pointer hover:border-amber-500/50 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-xl transform ${photo.rotation} hover:rotate-0 hover:scale-[1.03] z-10`}
            >
              {/* Image Container with Grayscale Transition */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 border border-stone-200">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                
                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1a1917] text-[10px] font-mono font-bold border border-white/40 shadow-sm">
                    {photo.badge}
                  </span>
                </div>

                {/* Top Right Zoom Icon Pill */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#1a1917] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-700" />
                </div>
              </div>

              {/* Card Footer Text */}
              <div className="p-4 pt-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-base font-black text-[#1a1917] group-hover:text-amber-700 transition-colors leading-snug">
                    {photo.title}
                  </h3>
                </div>
                <p className="text-xs text-stone-600 font-medium line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Popup Lightbox for Photos */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[200000] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8" onClick={() => setSelectedPhoto(null)}>
          <div className="relative max-w-4xl w-full bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1a1917] text-white hover:bg-amber-600 transition-colors shadow-md"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/5 bg-stone-900 flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 font-mono text-xs font-bold mb-4 border border-amber-500/20">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="text-2xl font-black text-[#1a1917] mb-3">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {selectedPhoto.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>Gaurav Navghare</span>
                  <span className="text-amber-700 font-bold">Verified Highlight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
