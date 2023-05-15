import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignInPage.css';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmationError, setConfirmationError] = useState('');

  async function handleSignIn(event) {
    event.preventDefault();

    setEmailError('');
    setPasswordError('');
    setConfirmationError('');

    if (!username) {
      setEmailError("Please enter your email");
      return;
    }
  
    if (!password) {
      setPasswordError("Please enter your password");
      return;
    }

    try {
      await Auth.signIn(username, password);

      console.log('Sign in successful!');
      // Redirect to app home page
    } catch (error) {
      console.error('Error signing in:', error);

      if (error.code === 'UserNotConfirmedException') {
        setConfirmationError('Please confirm your account before signing in.');
      } else if (error.code === 'NotAuthorizedException') {
        setPasswordError('Incorrect username or password.');
      } else if (error.code === 'UserNotFoundException') {
        setEmailError('Email not found.');
      }
    }
  }

  function handleEmailChange(event) {
    setEmailError('');
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPasswordError('');
    setPassword(event.target.value);
  }

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <label>
            Email:
            <input type="text" value={username} onChange={handleEmailChange} />
          </label>
          <p className="error-message">{emailError}</p>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <p className="error-message">{passwordError}</p>
          <button type="submit">Sign In</button>
        </form>
        {confirmationError && (
          <div>
            <p className="error-message">{confirmationError}</p>
            <p>
              Didn't receive a confirmation code? <Link to="/resend-confirmation-code">Resend code.</Link>
            </p>
          </div>
        )}
        <div>
          <p>Don't have an account? <Link to="/signup">Sign up here.</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
