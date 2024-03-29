import React, { useState } from 'react';
import { Notif } from './Notif';
import './Login.css';

const LoginPage = (props) => {
  console.log("what's in the props");
  console.log(props);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.loginHandler(username, password);
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="back">
      <h1 className="text-center  bg-light">Smapp</h1>
      <div id="login-page">
        <div id="login">
          <Notif message={props.notif.message} />
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              autoComplete="off"
              onChange={onChangeUsername}
              value={username}
              type="text"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              autoComplete="off"
              onChange={onChangePassword}
              value={password}
              type="password"
            />
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
