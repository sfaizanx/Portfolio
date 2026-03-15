import React, { useState, useEffect } from 'react'
import { Navigation } from './Components/Navigation'
import { Hero } from './Components/Hero'
import { About } from './Components/About'
import { Services } from './Components/Services'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'
import { GlobalStyles } from './Components/Styles'
import { Toaster } from 'sonner'

const App = () => {
  const [currentYear] = useState(new Date().getFullYear())

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <GlobalStyles />
      <Navigation />
      <Hero currentYear={currentYear} />
      <About />
      <Services />
      <Projects />
      <Contact currentYear={currentYear} />
      <Footer currentYear={currentYear} />
      <Toaster position='top-center' />
    </div>
  )
}

export default App