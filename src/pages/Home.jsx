import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Writing from '../sections/Writing';
import Education from '../sections/Education';
import Contact from '../sections/Contact';
import { useReveal } from '../hooks/useReveal';

export default function Home() {
  useReveal();
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Writing />
      <Education />
      <Contact />
    </>
  );
}
