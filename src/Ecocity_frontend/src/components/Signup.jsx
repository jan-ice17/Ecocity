import React, { useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import bannerImage from '../assets/ecocity_banner.png';
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
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-['Space_Grotesk']">
      {/* Banner */}
      <div className="relative w-full h-64 mb-8">
        <img src={bannerImage} alt="Ecocity Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Sign Up for Ecocity</h1>
        </div>
      </div>

      {/* Signup Modal */}
      <div className="flex justify-center items-center px-4 py-12">
        <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md shadow-xl">
          <img src={logo} alt="EcoCity Logo" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-2xl text-white font-bold text-center mb-2">Join Ecocity</h2>
          <p className="text-gray-400 text-center mb-6">The next future of urban innovation</p>
          
          <div className="flex mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-grow bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300">
              →
            </button>
          </div>
          
          <button 
            onClick={() => handleLogin("https://identity.ic0.app")}
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg mb-3 flex items-center justify-center hover:bg-gray-600 transition duration-300"
          >
            <span>Sign in with Internet Identity</span>
          </button>
          
          <button 
            onClick={() => handleLogin("https://nfid.one/authenticate")}
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-600 transition duration-300"
          >
            <span>Sign in with NFID (Legacy)</span>
          </button>

          <p className="text-gray-400 text-center mt-6">
            Already have an account? <a href="/login" className="text-blue-400 hover:text-blue-300">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;