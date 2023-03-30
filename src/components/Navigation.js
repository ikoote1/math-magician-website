import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <div className="vl" />
            <Link to="/calculator" className="link">Calculator</Link>
          </li>
          <li>
            <div className="vl" />
            <Link to="/Quotes" className="link">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
