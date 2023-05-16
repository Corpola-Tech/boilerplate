import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState({
    exampleComponent: [],
  });

  const fetchData = async () => {
    // Make an HTTP request to the API using axios
    const response = await axios.get('http://localhost:3001/posts');
    // Set the fetched data to state
    setData({...data, exampleComponent:response.data});
  };
  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await axios.get('http://localhost:3001/login');
    setData({...data, login:response.data});
  };
  const fetchProfile = async (token) => {
    const response = await axios.get('http://localhost:3001/profile', token);
    setData({...data, profile:response.data});
  };

  return (
    <AppContext.Provider
      value={{
        data, fetchData,
        handleLogin, fetchProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
