export function WatchContent() {
  const youtubeVideos = [
    { id: 'd02_xiiv7aQ', size: 'large' },      // Featured large
    { id: 'xnWYB_IOwWw', size: 'medium' },
    { id: 'aNQs6ECj5eg', size: 'medium' },
    { id: 'zfT6Y1SfTrw', size: 'medium' },
    { id: '3GCgtGUFez8', size: 'medium' },
    { id: 'b02jVM5mWhs', size: 'medium' },
  ];

  const tiktokVideos = [
    '7582124250572623112',
    '7580315849228029192',
    '7576666422424653063',
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://youtube.com/@kagantech',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'text-red-600 hover:text-red-500',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/kagantech',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'text-pink-600 hover:text-pink-500',
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@kagantech',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: 'text-cyan-400 hover:text-cyan-300',
    },
    {
      name: 'X',
      url: 'https://x.com/kagantech',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'text-white hover:text-gray-300',
    },
  ];

  return (
    <section className="bg-black py-20 px-6" style={{ fontFamily: "var(--font-main)" }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-white mb-2">
            Watch My <span className="text-gray-400">Content</span>
          </h2>
          <div className="w-24 h-1 bg-[#C89B7B] mx-auto mt-4"></div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          
          {/* Large Featured Video */}
          <div className="md:col-span-2 md:row-span-2 rounded-lg overflow-hidden bg-gray-900">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideos[0].id}`}
              title="YouTube video"
              className="w-full h-full min-h-[400px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* TikTok Video 1 - Tall */}
          <div className="md:row-span-2 rounded-lg overflow-hidden bg-gray-900">
            <iframe
              src={`https://www.tiktok.com/embed/v2/${tiktokVideos[0]}`}
              title="TikTok video"
              className="w-full h-full min-h-[400px]"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>

          {/* YouTube Video 2 */}
          <div className="rounded-lg overflow-hidden bg-gray-900">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideos[1].id}`}
              title="YouTube video"
              className="w-full h-full min-h-[200px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* YouTube Video 3 */}
          <div className="rounded-lg overflow-hidden bg-gray-900">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideos[2].id}`}
              title="YouTube video"
              className="w-full h-full min-h-[200px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* TikTok Video 2 - Tall */}
          <div className="md:row-span-2 rounded-lg overflow-hidden bg-gray-900">
            <iframe
              src={`https://www.tiktok.com/embed/v2/${tiktokVideos[1]}`}
              title="TikTok video"
              className="w-full h-full min-h-[400px]"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>

          {/* YouTube Video 4 */}
          <div className="md:col-span-2 rounded-lg overflow-hidden bg-gray-900">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideos[3].id}`}
              title="YouTube video"
              className="w-full h-full min-h-[300px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* YouTube Video 5 */}
          <div className="rounded-lg overflow-hidden bg-gray-900">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideos[4].id}`}
              title="YouTube video"
              className="w-full h-full min-h-[200px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* TikTok Video 3 - Tall */}
          <div className="md:row-span-2 rounded-lg overflow-hidden bg-gray-900">
            <iframe
              src={`https://www.tiktok.com/embed/v2/${tiktokVideos[2]}`}
              title="TikTok video"
              className="w-full h-full min-h-[400px]"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>

          {/* YouTube Video 6 */}
          <div className="md:col-span-2 rounded-lg overflow-hidden bg-gray-900">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideos[5].id}`}
              title="YouTube video"
              className="w-full h-full min-h-[300px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-12">
          {socialLinks.map((social) => (
            
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 rounded-full border border-white/20 ${social.color} transition-all duration-300 hover:scale-110`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}