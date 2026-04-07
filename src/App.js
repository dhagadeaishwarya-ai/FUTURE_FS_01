import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return(
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
