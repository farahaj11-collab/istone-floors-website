import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogoStrip } from './components/LogoStrip'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { QuoteForm } from './components/QuoteForm'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <Gallery />
        <Process />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}

export default App
