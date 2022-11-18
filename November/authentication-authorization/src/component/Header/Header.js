import './Header.css';
import { Link } from 'react-router-dom';

const Header=()=>{
   return <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link to="login" className="nav-link">Login</Link>
      </li>
      <li class="nav-item">
        <Link to="" className="nav-link">Register</Link>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
    </form> */}
  </div>
</nav>
   </div>
}
export default Header;