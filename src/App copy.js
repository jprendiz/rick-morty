import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Profile from './pages/Profile';


function App() {
  const name = 'JPRENDIZ';
  //const welcome = <h1>Hello, {name} </h1>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li> 
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <Link to="/about-me">Sobre mí</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Routes>
        </Router>
      </header>

    </div>
  );
}

export default App;
