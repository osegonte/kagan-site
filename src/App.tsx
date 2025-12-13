import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { WorkSocial } from './components/WorkSocial'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { StudioPage } from './pages/StudioPage'
import './index.css'

function App() {
  // Simple routing: if path is /studio, show Studio, otherwise show main site
  const isStudio = window.location.pathname === '/studio'
  
  if (isStudio) {
    return <StudioPage />
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <About />
        
        <Services />
        
        <WorkSocial />
        
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App