import './App.css';
import Contacts from './sections/Contacts/Contacts.jsx';
import Footer from './sections/Footer/Footer.jsx';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects.jsx';
import Skills from './sections/Skills/Skills.jsx';
function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contacts />
      <Footer/>
    </>
  );
}

export default App;
