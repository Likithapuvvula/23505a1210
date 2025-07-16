import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('authUser');
    navigate('/login');
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2>Logging you out...</h2>
    </div>
  );
}
