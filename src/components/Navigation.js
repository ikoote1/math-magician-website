import {Link} from 'react-router-dom'

export default function Navigation(){
    return(
        <nav>
        <ul className='nav'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <div class="vl"></div>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <div class="vl"></div>
            <Link to="/Quotes">Quote</Link>
          </li>
        </ul>
      </nav>
    )
}