import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Display from './components/DisplayQuates';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
