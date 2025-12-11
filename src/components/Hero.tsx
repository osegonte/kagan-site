export function Hero() {
  // Use a placeholder or put your hero.jpg in the public folder
  const heroImage = "/hero.jpg"; // Put hero.jpg in public folder
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* FULLSCREEN IMAGE - Enhanced sizing to always fill viewport */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="Kagan"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            minHeight: '100vh',
            minWidth: '100vw',
            width: '100%',
            height: '100%'
          }}
        />
        
        {/* Gradient Overlay for text readability - stronger on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 via-50% to-transparent" />
      </div>

      {/* Content Layer - LEFT ALIGNED, slightly closer to edge and higher */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 sm:px-12 md:px-20 lg:px-24" style={{ marginTop: '-80px' }}>
          {/* Content positioned on LEFT side - about 1-1.5 inches from edge on desktop */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
              <span className="text-white">Hello, I'm </span>
              <span className="text-gray-200">Kagan.</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
              I help brands tell better stories through tech. From product reviews to 
              strategic consulting, I create content and solutions that connect technology 
              with real people.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                Work With Me
              </a>

              <a
                href="#channel"
                className="px-8 py-4 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-black transition-all duration-300 text-center"
              >
                Watch Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}