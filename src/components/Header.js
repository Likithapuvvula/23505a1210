import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const isLoggedIn = !!localStorage.getItem('authUser');
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        AFFORDMED
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
        {isLoggedIn ? (
          <Link to="/logout">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
