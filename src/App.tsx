import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Project />
        <About />
      </main>
      <Contact />
    </>
  )
}
