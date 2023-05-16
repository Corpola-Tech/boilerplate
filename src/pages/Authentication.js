import React, { useState, useContext } from "react";
import { AppContext } from '../AppContext';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, handleLogin, fetchProfile } = useContext(AppContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {data.login &&
          <>
            <div>Access: {data.login.access}</div>
            <div>Refresh: {data.login.refresh}</div>
            <button onClick={()=>fetchProfile(data.login)}>Fetch profile</button>
          </>
        }
      </div>
      {data.profile &&
        <div>Name: {data.profile.first_name} {data.profile.last_name}</div>
      }
    </>
  );
};

export default Auth;
