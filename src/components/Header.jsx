function Header({ isScrolled }) {
  return (
    <header className={`header ${isScrolled ? "on" : ""}`}>
      <div className="Inner">
        <h1 className="Logo">
          <a href="#Home">Hyemin Portfolio</a>
        </h1>

        <nav>
          <ul className="menu">
            <li className="menuList">
              <a href="#Career">Career</a>
            </li>
            <li className="menuList">
              <a href="#Work">Work</a>
            </li>
            <li className="menuList">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
