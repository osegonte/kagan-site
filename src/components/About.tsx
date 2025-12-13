import { useState } from 'react';
import { useAbout } from '../hooks/useAbout';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data, loading, error } = useAbout();

  if (loading) {
    return (
      <section id="about" className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section id="about" className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-red-600">Error loading content</p>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="relative -mt-24 md:-mt-32 lg:-mt-40">
      <div 
        className="relative bg-white"
        style={{
          clipPath: 'polygon(0 20%, 60% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      >
        <div className="pt-24 md:pt-32 lg:pt-48 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-8">
              
              <div className="md:col-span-4 pt-32 md:pt-16 pl-20 md:pl-0">
                <div className="space-y-6">
                  {data.stats.map((stat, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <div className="text-3xl font-bold text-black">{stat.value}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-8 md:pl-12">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-black">
                    {data.title.split(' ')[0]} <span className="text-gray-500">{data.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <div className="w-24 h-1 bg-black"></div>
                </div>

                <div className="space-y-6">
                  <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
                    {data.tagline}
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {data.description}
                  </p>

                  <div className={`space-y-4 transition-all duration-500 ${
                    isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {data.extendedBio && data.extendedBio.map((block: any, index: number) => (
                      <p key={index} className="text-gray-600 leading-relaxed">
                        {block.children?.[0]?.text || ''}
                      </p>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-black font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
                  >
                    {isExpanded ? 'Show Less' : 'Read Full Story'}
                    <svg 
                      className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <div className="pt-6 space-y-4">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {data.expertise.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="#services"
                      className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center"
                    >
                      View Services
                    </a>
                    <a
                      href="mailto:business@kagan.tech"
                      className="px-6 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all text-center"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}