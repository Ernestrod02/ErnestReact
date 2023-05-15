import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import './SignUpPage.css';
import { Link } from 'react-router-dom';

Amplify.configure(awsconfig);

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSignUp(event) {
    event.preventDefault();

    if (!username || !password || !email) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log('Sign up successful!');
      setSuccessMessage('Sign up successful! Please check your email to verify your account.');
      setUsername('');
      setPassword('');
      setEmail('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error signing up:', error);
      if (error.code === 'UsernameExistsException') {
        setErrorMessage('This username is already taken');
      } else if (error.code === 'UserLambdaValidationException' && error.message.includes('email')) {
        setErrorMessage('This email is already in use');
      }
    }
  }

  function handleInputFocus() {
    setErrorMessage('');
  }

  return (
    <div className="signup-container">
      <h1 className="signup-header">Sign Up</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSignUp} className="signup-form">
        <label className="signup-label">
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="signup-input" onFocus={handleInputFocus} />
        </label>
        <br />
        <label className="signup-label">
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="signup-input" onFocus={handleInputFocus} />
        </label>
        <br />
        <label className="signup-label">
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="signup-input" onFocus={handleInputFocus} />
        </label>
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="signin-link">
          <p>Already have an account? <Link to="/signin">Sign in here.</Link></p>
        </div>
      </div>
  );
}

export default SignUpPage;
