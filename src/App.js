import './App.css';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/skills';
import Project from './Pages/Projects';
import Resume from './Pages/Resume';
import Balloons from './Pages/Animations'; // Import the Balloons component
import './Pages/Animation.css'; // Import the animation CSS file

function App() {
  return (
    <div className="App">
      <Navbar />
      <Balloons /> {/* Render the Balloons component */}
      <div className="tech-objects">
        {/* Technology-related objects */}
        <div className="tech-object tech1"></div>
        <div className="tech-object tech2"></div>
        <div className="tech-object tech3"></div>
        {/* Add more objects as needed */}
      </div>
      <div className="moving-objects">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
      <Home />
      <About />
      <Skills />
      <Resume />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
