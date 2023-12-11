import React, { Component } from 'react';
import { BrowserRouter as Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';

class AuthenticationApp extends Component {
    render(){
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <ProtectedRoute path="/home" element={<Home/>} />
      {/* Redirect to login page if the route doesn't match */}
      <Navigate to="/login" />
    </Routes>
  );}
};

export default AuthenticationApp;
