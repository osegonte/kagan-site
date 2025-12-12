import { useState } from 'react';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="relative -mt-24 md:-mt-32 lg:-mt-40">
      {/* White background with diagonal cutout for camera */}
      <div 
        className="relative bg-white"
        style={{
          // Diagonal cut from left side to about 60% across, then straight
          clipPath: 'polygon(0 20%, 60% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      >
        {/* Content container */}
        <div className="pt-24 md:pt-32 lg:pt-48 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            {/* Layout that works with diagonal */}
            <div className="grid md:grid-cols-12 gap-8">
              
              {/* Left side - smaller space (stats) - MOBILE FIX: Add padding on mobile to avoid diagonal */}
              <div className="md:col-span-4 pt-24 md:pt-16 pl-12 md:pl-0">
                {/* Stats in compact format */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="text-3xl font-bold text-black">1M+</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">Followers</div>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="text-3xl font-bold text-black">300M+</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">Views</div>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="text-3xl font-bold text-black">100+</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">Brands</div>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="text-3xl font-bold text-black">5+</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">Years</div>
                  </div>
                </div>
              </div>

              {/* Right side - main content (larger space) */}
              <div className="md:col-span-8 md:pl-12">
                {/* Section Title */}
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-black">
                    About <span className="text-gray-500">Kagan</span>
                  </h2>
                  <div className="w-24 h-1 bg-black"></div>
                </div>

                {/* Bio content */}
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed">
                    Nigeria's leading tech influencer, empowering young entrepreneurs 
                    through accessible technology education.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Bridging the gap between complex technology and everyday users, 
                    creating content that transforms how people understand and 
                    use tech in business and life.
                  </p>

                  {/* Expandable section */}
                  <div className={`space-y-4 transition-all duration-500 ${
                    isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <p className="text-gray-600 leading-relaxed">
                      As a videographer, content strategist, and business consultant, 
                      Kagan has built a reputation for making technology accessible to 
                      everyone—from students to CEOs. His unique approach combines 
                      technical expertise with storytelling that resonates.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Through detailed product reviews, business strategy sessions, and 
                      educational content, he's helped thousands of young Nigerians and 
                      entrepreneurs worldwide leverage technology to build successful ventures.
                    </p>
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

                  {/* Expertise pills */}
                  <div className="pt-6 space-y-4">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Product Reviews',
                        'Tech Education', 
                        'Content Creation',
                        'Brand Storytelling',
                        'Youth Empowerment'
                      ].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA buttons */}
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