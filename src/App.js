import './App.css';
// import Calculator from './components/Calculator';
import Display from './components/DisplayQuates';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      {/* <Calculator /> */}
      <Display />
    </div>
  );
}

export default App;
