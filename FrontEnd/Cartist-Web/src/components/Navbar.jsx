import '../styles/components/navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-logo">Cartist</h1>
      </div>

      <div className="navbar-center">
        <ul>
          <Link to="/"><li>🏠︎ Home</li></Link>
          <Link to="/aboutme"><li>𝒾 About Me</li></Link>
          <Link to="/forum"><li>🗪 Forum</li></Link>
        </ul>
      </div>

      <div className="navbar-right">
        <Link to="/login"><button className="icon-btn">➜] Log-In</button></Link>
        <Link to="/login"><button className="icon-btn">🛎 Sign-Up</button></Link>

        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar auto..."
          />
          <button>Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;