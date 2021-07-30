import React from 'react';
import './App.css';
import Login from './component/Login';
import UserList from './component/UserList';

function App() {
  return (
    <div className="App">
      <Login/>
      <UserList/>
    </div>
  );
}

export default App;