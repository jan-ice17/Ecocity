import React, { useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import nfidLogo from '../assets/nfid-logo.png';
import dfinitylogo from '../assets/dfinitylogo.png';
import logo from '../assets/logo.png';

const Signup = () => {
  const [authClient, setAuthClient] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);
    };
    initAuth();
  }, []);

  const handleLogin = async (provider) => {
    await authClient.login({
      identityProvider: provider,
      onSuccess: async () => {
        // Handle successful login
      },
      onError: (error) => {
        console.error("Login failed: ", error);
      },
    });
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <img src={logo} alt="EcoCity Logo" style={styles.logo} />
        <h1 style={styles.title}>Sign in to EcoCity</h1>
        <p style={styles.subtitle}>Where sustainability meets community</p>
        
        <div style={styles.inputContainer}>
          <input type="email" placeholder="Email" style={styles.input} />
          <button style={styles.submitButton}>→</button>
        </div>
        
        <button style={styles.button} onClick={() => handleLogin("https://identity.ic0.app")}>
          <img src={dfinitylogo} alt="Internet Identity" style={styles.buttonIcon} />
          <span>Sign in with Internet Identity</span>
        </button>
        
        <button style={styles.button} onClick={() => handleLogin("https://nfid.one/authenticate")}>
          <img src={nfidLogo} alt="NFID" style={styles.buttonIcon} />
          <span>Sign in with NFID (Legacy)</span>
        </button>

        <p style={styles.signupLink}>
          Don't have an account? <a href="/signup" style={styles.link}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#1e1e1e',
    borderRadius: '12px',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    width: '60px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    color: 'white',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#a0a0a0',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '12px',
    backgroundColor: '#2a2a2a',
    border: 'none',
    borderRadius: '6px 0 0 6px',
    color: 'white',
    fontSize: '16px',
  },
  submitButton: {
    padding: '12px 20px',
    backgroundColor: '#2a2a2a',
    border: 'none',
    borderRadius: '0 6px 6px 0',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonIcon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },
  signupLink: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#a0a0a0',
  },
  link: {
    color: '#2196f3',
    textDecoration: 'none',
  },
};

export default Signup;