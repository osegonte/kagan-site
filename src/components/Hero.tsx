import { useHero } from '../hooks/useHero';

export function Hero() {
  const heroImage = "/hero.jpg";
  const { data, loading } = useHero();
  
  // Show hero with default content while loading
  if (loading || !data) {
    return (
      <section className="relative h-screen w-full overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 via-50% to-transparent" />
        </div>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full px-6 sm:px-12 md:px-20 lg:px-24" style={{ marginTop: '-80px' }}>
            <div className="max-w-2xl">
              <p className="text-white">Loading...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 via-50% to-transparent" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 sm:px-12 md:px-20 lg:px-24" style={{ marginTop: '-80px' }}>
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
              <span className="text-white">{data.headline} </span>
              <span className="text-gray-200">{data.subheadline}</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={data.primaryCTALink}
                className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                {data.primaryCTA}
              </a>

              <a
                href={data.secondaryCTALink}
                className="px-8 py-4 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-black transition-all duration-300 text-center"
              >
                {data.secondaryCTA}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}