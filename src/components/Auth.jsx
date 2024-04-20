import { useState } from "react"
import { auth } from '../configRabago/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export const Auth = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {
            try {
              // Check if email or password is empty
              if (email.trim() === '' || password.trim() === '') {
                setErrorMessage('Email and password are required.');
                return;
              }
        
              // Create user with email and password using Firebase authentication
              await createUserWithEmailAndPassword(auth, email, password);
        
              // Clear email and password fields after successful sign up
              setEmail('');
              setPassword('');
            } catch (error) {
              // Handle specific error cases
              if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('Cannot create an account with this email. Please sign in.');
              } else {
                setErrorMessage('Failed to sign up.');
              }
            }
          };
        
    return (
        <div>
            <h1>Sign Up</h1>
        <div className='error'>{errorMessage}</div>
         <input placeholder="Email..."
         type='email'
         onChange={(e) => setEmail(e.target.value)}
         value={email}/>
         <input placeholder="Password..."
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}/>
         <button onClick={signUp}> Sign In </button>
         </div>
    )
}