import { useServices } from '../hooks/useServices';

export function Services() {
  const { data, loading, error } = useServices();

  if (loading) {
    return (
      <section id="services" className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section id="services" className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-red-600">Error loading services</p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="relative bg-white">
      <div 
        className="relative"
        style={{
          clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0% 100%)',
          marginTop: '-80px',
          paddingTop: '120px',
          background: 'linear-gradient(to bottom, #f5f0eb, #faf8f5)'
        }}
      >
        <div className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
                {data.title.split(' ')[0]} <span style={{color: '#8B7355'}}>{data.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <div className="w-24 h-1 mx-auto" style={{backgroundColor: '#8B7355'}}></div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {data.servicesList.map((service, index) => (
                <div 
                  key={index}
                  className="text-center p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white"
                  style={{
                    borderTop: '4px solid #8B7355'
                  }}
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href={`mailto:${data.ctaEmail}`}
                className="inline-block px-10 py-4 text-white rounded-full hover:opacity-90 transition-all text-lg font-medium shadow-lg hover:scale-105"
                style={{backgroundColor: '#8B7355'}}
              >
                {data.ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}