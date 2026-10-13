import Navbar from './Navbar/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/Showcase'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'


function App() {
  return (
    <div className="maskani-app">
      {/* Sticky Navbar using user's Navbar component */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="main-content">
        <Hero />
        <About />
        <Showcase />
        <Packages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
