import './App.css';
import Home from "./components/HomePage/Home"
import About from './components/AboutPage/About';
import Services from './components/ServicesPage/Services';
import Portfolio from './components/PorfolioPage/Portfolio';
import Contact from './components/ContactPage/Contact';
// import Portfolio from './components/PorfolioPage/Portfolio';
import Swaper from './components/Swaper/Swaper';
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Portfolio />
      {/* <Swaper /> */}
      <Contact />
      {/* <Portfolio /> */}

    </div>
  );
}

export default App;
