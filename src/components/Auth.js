import React, { useState } from 'react';
import { Users } from '../DummyData';
import LoginPage from './LoginPage';
import Home from '../pages/home/Home';

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notif, setNotif] = useState({ message: '', style: '' });
  const [isAdmin, setIsAdmin] = useState(false);
  const [client, setClient] = useState(null);
  const localUsers = localStorage.getItem('users');

  if (!localUsers) {
    localStorage.setItem('users', JSON.stringify(Users));
  }

  const clients = JSON.parse(localStorage.getItem('users'));
  console.log('clients');
  console.log(clients);

  const isLoginSuccess = (email, password) => {
    let isFound = false;

    clients.forEach((user) => {
      if (user.email === email && user.password === password) {
        if (user.isAdmin) {
          setIsAdmin(true);
          setClient(user);
          isFound = true;
        } else {
          setIsAdmin(false);
          setClient(user);
          isFound = true;
        }
        setNotif('');
      }
    });

    if (!isFound) setNotif({ message: 'Wrong username and password.' });
    return isFound;
  };

  const login = (username, password) => {
    if (isLoginSuccess(username, password)) {
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem('client');
    setNotif({ message: 'You have logged out.' });
  };

  if (isLoggedIn) {
    localStorage.setItem('currentUser', JSON.stringify(client));
    if (isAdmin) {
      return <Home users={clients} logoutHandler={logout} />;
    } else {
      return (
        <Home
          client={client}
          users={clients}
          setClient={setClient}
          logoutHandler={logout}
        />
      );
    }
  } else {
    return (
      <LoginPage loginHandler={login} notif={notif} isLoggedIn={isLoggedIn} />
    );
  }
};

export default Auth;
