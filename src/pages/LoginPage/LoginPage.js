// src/pages/LoginPage.js
import React, { useState } from "react";
import { login } from '../../store/auth/actions'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(email, password));
    setPassword('')
    setEmail('')
  }

  return (
    <div className='page'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
}

export default LoginPage
