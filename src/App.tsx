import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { WorkSocial } from './components/WorkSocial'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <div id="home">
          <Hero />
        </div>
        
        {/* About Section with diagonal cutout */}
        <About />
        
        {/* Services Section */}
        <Services />
        
        {/* Work & Social Section */}
        <WorkSocial />
        
        {/* Work Section - Placeholder */}
        <section id="work" className="min-h-screen flex items-center justify-center bg-white">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <h2 className="text-4xl font-semibold mb-6">Work</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your portfolio and projects will be displayed here.
            </p>
          </div>
        </section>
        
        {/* Contact Section - Placeholder */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <h2 className="text-4xl font-semibold mb-6">Let's Connect</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Ready to collaborate or have questions? Get in touch.
            </p>
            <a 
              href="mailto:business@kagan.tech"
              className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Send Email
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App