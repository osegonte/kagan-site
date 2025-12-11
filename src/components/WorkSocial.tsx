export function WorkSocial() {
  const videos = [
    { id: 'K2i_sGGBAdA', platform: 'youtube' },
    { id: 'qW0b2mncO08', platform: 'youtube' },
    { id: '4A-1FaGm2X0', platform: 'youtube' }
  ];

  const socials = [
    { name: 'YouTube', url: 'https://youtube.com/@KaganTech', color: '#FF0000' },
    { name: 'TikTok', url: 'https://tiktok.com/@kagantech', color: '#000000' },
    { name: 'Instagram', url: 'https://instagram.com/kagantech', color: '#E4405F' },
    { name: 'X', url: 'https://twitter.com/kagantech', color: '#000000' }
  ];

  return (
    <section id="work" className="relative py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Watch My <span style={{color: '#8B7355'}}>Content</span>
          </h2>
          <div className="w-24 h-1 mx-auto" style={{backgroundColor: '#8B7355'}}></div>
        </div>

        {/* Video Mosaic */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {videos.map((video, index) => (
            <a
              key={index}
              href="https://youtube.com/@KaganTech"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-lg"
              style={{
                height: index === 0 ? '300px' : '200px',
                gridColumn: index === 0 ? 'span 2' : 'span 1'
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&showinfo=0`}
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: 'none' }}
                allow="autoplay; encrypted-media"
                title={`Video ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-medium">
                  Visit Channel →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-white transition-all duration-300 hover:scale-105"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}