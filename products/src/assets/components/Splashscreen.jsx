import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Splashscreen.css';

const Splashscreen = () => {
  const [showLogo, setShowLogo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoginClick = () => {
    navigate('/signup');
  };

  return (
    <div className="splash-container">
      {!showLogo ? (
        <div className="welcome-screen">
          <p>Welcome</p>
        </div>
      ) : (
        <div className="two">
          <div className="logoname">
            <img src="/images/logo.png" alt="Logo" height="300px" width="300px" />
            <button onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Splashscreen;