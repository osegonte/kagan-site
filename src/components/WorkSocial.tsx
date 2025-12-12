export function WorkSocial() {
  return (
    <section id="work" className="relative py-24 bg-black text-white">
      <div className="w-full px-6 md:px-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Watch My <span style={{color: '#C89B7B'}}>Content</span>
          </h2>
          <div className="w-24 h-1 mx-auto" style={{backgroundColor: '#C89B7B'}}></div>
        </div>

        {/* Perfect Rectangle Grid - 9 Videos */}
        <div 
          className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
          style={{ maxWidth: '1600px' }}
        >
          
          {/* Large Landscape (2 cols) */}
          <div className="col-span-2 aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/d02_xiiv7aQ?autoplay=1&mute=1&loop=1&playlist=d02_xiiv7aQ&controls=0&showinfo=0"
              className="w-full h-full"
              style={{ pointerEvents: 'none' }}
              allow="autoplay; encrypted-media"
              title="Featured Video"
            />
          </div>

          {/* Vertical Short 1 */}
          <div className="row-span-2 aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/KKs7oBPZPMI?autoplay=1&mute=1&loop=1&playlist=KKs7oBPZPMI&controls=0&showinfo=0"
              className="w-full h-full"
              style={{ pointerEvents: 'none' }}
              allow="autoplay; encrypted-media"
              title="Short 1"
            />
          </div>

          {/* Vertical Short 2 */}
          <div className="row-span-2 aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/ty9NCFnwcDo?autoplay=1&mute=1&loop=1&playlist=ty9NCFnwcDo&controls=0&showinfo=0"
              className="w-full h-full"
              style={{ pointerEvents: 'none' }}
              allow="autoplay; encrypted-media"
              title="Short 2"
            />
          </div>

          {/* 4 Small Landscapes Below Large One */}
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/xnWYB_IOwWw?autoplay=1&mute=1&loop=1&playlist=xnWYB_IOwWw&controls=0&showinfo=0"
              className="w-full h-full"
              style={{ pointerEvents: 'none' }}
              allow="autoplay; encrypted-media"
              title="Video 2"
            />
          </div>

          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/aNQs6ECj5eg?autoplay=1&mute=1&loop=1&playlist=aNQs6ECj5eg&controls=0&showinfo=0"
              className="w-full h-full"
              style={{ pointerEvents: 'none' }}
              allow="autoplay; encrypted-media"
              title="Video 3"
            />
          </div>

          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/zfT6Y1SfTrw?autoplay=1&mute=1&loop=1&playlist=zfT6Y1SfTrw&controls=0&showinfo=0"
              className="w-full h-full"
              style={{ pointerEvents: 'none' }}
              allow="autoplay; encrypted-media"
              title="Video 4"
            />
          </div>

          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/3GCgtGUFez8?autoplay=1&mute=1&loop=1&playlist=3GCgtGUFez8&controls=0&showinfo=0"
              className="w-full h-full"
              style={{ pointerEvents: 'none' }}
              allow="autoplay; encrypted-media"
              title="Video 5"
            />
          </div>

          {/* 2 MORE Small Landscapes at Bottom */}
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/b02jVM5mWhs?autoplay=1&mute=1&loop=1&playlist=b02jVM5mWhs&controls=0&showinfo=0"
              className="w-full h-full"
              style={{ pointerEvents: 'none' }}
              allow="autoplay; encrypted-media"
              title="Video 6"
            />
          </div>

          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/zCxU0yDjABg?autoplay=1&mute=1&loop=1&playlist=zCxU0yDjABg&controls=0&showinfo=0"
              className="w-full h-full"
              style={{ pointerEvents: 'none' }}
              allow="autoplay; encrypted-media"
              title="Video 7"
            />
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 flex-wrap mt-16">
          
          <a href="https://youtube.com/@kagantech" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <a href="https://tiktok.com/@kagantech" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>

          <a href="https://instagram.com/kagantech" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          <a href="https://x.com/kagantech" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}
