import { useContact } from '../hooks/useContact';

export function Contact() {
  const { data, loading } = useContact();

  if (loading || !data) {
    return (
      <section id="contact" className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-semibold mb-4">
                {data.title.split(' ')[0]} <span style={{color: '#C89B7B'}}>{data.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <div className="w-24 h-1" style={{backgroundColor: '#C89B7B'}}></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {data.description}
            </p>
            <a href={`mailto:${data.email}`} className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium">
              {data.ctaText}
            </a>
          </div>
          
          <div className="relative h-[500px] md:h-[600px]">
            <div 
              className="absolute inset-0 bg-gray-900 overflow-hidden" 
              style={{clipPath: 'polygon(35% 0%, 100% 0%, 100% 100%, 40% 100%, 0% 60%, 0% 20%)'}}
            >
              <img src="/contact-image.jpg" alt="Kagan" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}