import './App.css';
import Calculator from './components/Calculator';
import Display from './components/DisplayQuates';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
