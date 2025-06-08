import React, { useState, useEffect } from 'react';
import Login from './Login';
import Colors from './Colors';
import Palette from './Palette';
import './App.css';

function App() {
  const [token, setToken] = useState('');
  const [palette, setPalette] = useState(() => {
    const saved = localStorage.getItem('palette');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('palette', JSON.stringify(palette));
  }, [palette]);

  const handleSaveColor = (color) => {
    if (!palette.includes(color)) {
      setPalette([...palette, color]);
    }
  };

  const handleRemoveColor = (color) => {
    setPalette(palette.filter(c => c !== color));
  };

  const handleLogout = () => {
    setToken('');
  }

  if (!token) {
    return <Login onLogin={setToken} />;
  }

  return (
    <div className="app-container">
      <h1>Color Palette App</h1>
      <button
        onClick={handleLogout}
        style={{
          position: 'absolute',
          top: 32,
          right: 32,
          background: '#e63946',
          color: '#fff',
          border: 'none',
          borderRadius: '7px',
          padding: '8px 18px',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
          transition: 'background 0.18s'
        }}
      >
        Logout
      </button>
      <Colors token={token} onSaveColor={handleSaveColor} />
      <div className="palette-section">
        <Palette palette={palette} onRemoveColor={handleRemoveColor} />
      </div>
    </div>
  );


}

export default App;
