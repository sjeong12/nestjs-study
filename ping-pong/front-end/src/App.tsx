import React from 'react';
import './App.css';
import Chat from './component/Chat';
import Login from './component/Login';
import UserList from './component/UserList';

function App() {
  return (
    <div className="App">
      <Login/>
      <UserList/>
      <Chat/>
    </div>
  );
}

export default App;