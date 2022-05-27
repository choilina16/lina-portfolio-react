import React from 'react';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// resume?

export default function App() {
  return (
    <div>
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
