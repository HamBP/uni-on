import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <strong>Uni On</strong>
        <p>
          <a href="#">Log In</a>
          <a href="#">Sign Up</a>
        </p>
      </div>
    </header>
  );
}

export default Header;