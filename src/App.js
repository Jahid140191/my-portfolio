import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Portfolio from './component/Portfolio';
import Skill from './component/Skill';

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="main-container">
          <Home  />
          <About />
          <Skill />
          <Portfolio />
          <Contact />
      </div>
    </div>
  );
}

export default App;
