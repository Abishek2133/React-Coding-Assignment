import React from 'react';
import { Route, Routes } from 'react-router-dom';
import withAuthorization from './WithAuthorization';
import AdminComponent from './AdminComponent';
import UserComponent from './UserComponent';
import Unauthorized from './Unauthorized';
import Home from './Home';
import Navbar from './Navbar';

// Route configurations
function App () {
  return (
    <>
    <header>
        <Navbar/>
    </header>
    <Routes>
      <Route exact path="/" element={Home} />
      <Route path="/unauthorized" element={Unauthorized} />
      
      {/* Example routes with role-based authorization */}
      <Route path="/admin" element={withAuthorization(['admin'])(AdminComponent)} />
      <Route path="/user" element={withAuthorization(['user'])(UserComponent)} />

      {/* Other routes... */}
    </Routes>
    </>
  );
};

export default App;
