import '../styles/components/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-logo">Cartist</h1>
      </div>

      <div className="navbar-right">
        <button className="icon-btn">⚙️Log-In</button>
        <button className="icon-btn">🔔Sign-Up</button>

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
