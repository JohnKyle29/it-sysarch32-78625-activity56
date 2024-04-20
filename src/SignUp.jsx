import React, { useState } from 'react';
import './index.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    // Here you would handle the sign-up logic, e.g., with Firebase
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div >
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className='signUpContainer'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginLeft: '1rem' }}
          />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ marginLeft: '1rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>

        </div>
        <button type="submit" className='registerBtn'>Register</button>
      </form>
      {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
    </div>
  );
};

export default SignUp;
