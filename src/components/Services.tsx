export function Services() {
  const services = [
    "Strategy Sessions",
    "Product Reviews", 
    "Brand Campaigns",
    "Startup Advisory"
  ];

  return (
    <section id="services" className="relative bg-white">
      {/* Diagonal cut from black hero/about into white services */}
      <div 
        className="relative"
        style={{
          clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0% 100%)',
          marginTop: '-80px',
          paddingTop: '120px',
          background: 'linear-gradient(to bottom, #fafafa, #ffffff)'
        }}
      >
        <div className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
                Work <span style={{color: '#8B7355'}}>With Me</span>
              </h2>
              <div className="w-24 h-1 mx-auto" style={{backgroundColor: '#8B7355'}}></div>
            </div>

            {/* Services - Simple cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: '#f8f8f8',
                    borderTop: '3px solid #8B7355'
                  }}
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {service}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Let's discuss your project
                  </p>
                </div>
              ))}
            </div>

            {/* Main CTA */}
            <div className="text-center">
              <p className="text-gray-600 mb-6 text-lg">
                Ready to create something impactful together?
              </p>
              <a
                href="mailto:business@kagan.tech"
                className="inline-block px-10 py-4 text-white rounded-full hover:opacity-90 transition-all text-lg font-medium"
                style={{backgroundColor: '#8B7355'}}
              >
                Let's Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}