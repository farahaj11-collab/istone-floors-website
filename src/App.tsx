import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Services from './components/Services'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Stats />
        <Services />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
