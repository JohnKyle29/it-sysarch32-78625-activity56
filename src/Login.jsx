import './index.css'
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Here you would normally integrate with Firebase for authentication
      // For this example, let's just log the email and password to console
      console.log("Email:", email);
      console.log("Password:", password);
    };
  
    return (
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ marginLeft: '1rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ marginLeft: '1rem' }}
            />
          </div>
          <button type="submit" className='loginBtn'>Login</button>
        </form>
        {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
      </div>
    );
  };
  
  export default Login;