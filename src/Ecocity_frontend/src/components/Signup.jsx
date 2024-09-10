import React, { useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import nfidLogo from '../assets/nfid-logo.png';  // Correct path to NFID logo
import dfinitylogo from '../assets/dfinitylogo.png';  // Correct path to Dfinity logo
import logo from '../assets/logo.png';  // Correct path to main EcoCity logo (header logo)

const Signup = () => {
  const [authClient, setAuthClient] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [principalId, setPrincipalId] = useState('');

  // Initialize AuthClient when the component mounts
  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);

      // Check if the user is already authenticated
      const authenticated = await client.isAuthenticated();
      setIsAuthenticated(authenticated);

      if (authenticated) {
        const identity = client.getIdentity();
        setPrincipalId(identity.getPrincipal().toText());
      }
    };
    initAuth();
  }, []);

  // Login with NFID
  const handleLoginNFID = async () => {
    await authClient.login({
      identityProvider: "https://nfid.one/authenticate",
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        setPrincipalId(identity.getPrincipal().toText());
        setIsAuthenticated(true);
      },
      onError: (error) => {
        console.error("Login failed: ", error);
      },
    });
  };

  // Login with Internet Identity (default identity provider)
  const handleLoginInternetIdentity = async () => {
    await authClient.login({
      identityProvider: "https://identity.ic0.app",
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        setPrincipalId(identity.getPrincipal().toText());
        setIsAuthenticated(true);
      },
      onError: (error) => {
        console.error("Login failed: ", error);
      },
    });
  };

  return (
    <div style={styles.background}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <img src={logo} alt="EcoCity Logo" style={styles.logo} /> {/* Main Logo */}
          <h2 style={styles.title}>Sign in to EcoCity</h2>
          <p style={styles.subtitle}>The Next Future Of Urban Innovation</p>
        </div>

        <div style={styles.buttonsContainer}>
          <button style={styles.button} onClick={handleLoginInternetIdentity}>
            <img src={dfinitylogo} alt="Internet Identity" style={styles.icon} />
            Sign in with Internet Identity
          </button>
          
          <button style={styles.button} onClick={handleLoginNFID}>
            <img src={nfidLogo} alt="NFID" style={styles.icon} />
            Sign in with NFID
          </button>
        </div>

        <div style={styles.footer}>
          <p>Don't have an account? <a href="/signup" style={styles.signupLink}>Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

// Inline styles for the page
const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#121212',  // Solid dark background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',  // Darker modal background
    padding: '60px',  // Larger padding for bigger content
    borderRadius: '20px',
    width: '600px',  // Increased modal width
    maxWidth: '90%',
    textAlign: 'center',
    color: 'white',
  },
  header: {
    marginBottom: '40px',  // More space below the header
  },
  logo: {
    width: '100px',  // Increased logo size for better visibility
    marginBottom: '20px',
  },
  title: {
    fontSize: '32px',  // Larger title font size
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '18px',  // Increased subtitle font size
    marginBottom: '40px',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',  // More space between buttons
  },
  button: {
    padding: '20px 50px',  // Larger buttons
    background: 'linear-gradient(90deg, #2374f0, #50a7f7)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    transition: 'background-color 0.2s ease',
  },
  icon: {
    width: '30px',  // Increased icon size for clarity
    height: '30px',
  },
  footer: {
    marginTop: '40px',
  },
  signupLink: {
    color: '#50a7f7',
    textDecoration: 'none',
  },
};

export default Signup;
