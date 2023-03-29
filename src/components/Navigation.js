import {Link} from 'react-router-dom'

export default function Navigation(){
    return(
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Quotes">Quote</Link>
          </li>
        </ul>
      </nav>
    )
}