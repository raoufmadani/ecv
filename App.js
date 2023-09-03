import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Motivation from './components/Motivation';
import Internships from './components/Internships';
import ProfessionalExperience from './components/ProfessionalExperience';
import Competitions from './components/Competitions';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Internships />
      <ProfessionalExperience />
      <Competitions />
      <Education />
      <Portfolio />
      <Testimonials />
      <Motivation />
      <Footer />
    </div>
  );
}

export default App;