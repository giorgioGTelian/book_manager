import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import ButtonCounter from './components/ButtonCounter.jsx';


//import bootsrap css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Navbar className="bg-body-tertiary justify-content-between navbar.header"></Navbar>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/button-counter" element={<ButtonCounter />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
