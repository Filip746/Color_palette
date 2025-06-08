import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Task from './Task';

function App() {
  const [showRegister, setShowRegister] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleRegister = (email, password) => {
    setEmail(email);
    setPassword(password);
    setShowRegister(false);
  };

  const handleLogin = (token) => {
    setToken(token);
  };

  if (token) {
    return <Task token={token} />;
  }

  return (
    <div>
      {showRegister ? (
        <>
          <Register onRegister={handleRegister} />
          <p>
            Already have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setShowRegister(false); }}>
              Log in
            </a>
          </p>
        </>
      ) : (
        <>
          <Login onLogin={handleLogin} defaultEmail={email} defaultPassword={password} />
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); setShowRegister(true); }}>
              Register
            </a>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
