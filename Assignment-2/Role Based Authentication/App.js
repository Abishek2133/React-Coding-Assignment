import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import AdminComponent from './AdminComponent';
import UserComponent from './UserComponent';
import Unauthorized from './Unauthorized';
import Navbar from './Navbar';

const userRoles = {Admin : 'admin', User : 'user', Public : 'public'}; // Example: User roles retrieved after authentication
// Route configurations
const current_userRoles = userRoles.Admin;

function PublicElement({children}) {
  return <>{children}</>;
}

function UserElement({children}) {
  if (current_userRoles === userRoles.User || current_userRoles === userRoles.Admin)
  {return <>{children}</>}
  else{return <div>YOU DON"T HAVE ACCESS</div>
  }
}

function AdminElement({children}) {
  if (current_userRoles === userRoles.Admin)
  {return <>{children}</>}
  else{
    <div>YOU DON"T HAVE ACCESS</div>
  }
}

function App () {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<PublicElement>{<Home/>}</PublicElement>}></Route>
      <Route path="/*" element={<PublicElement>{<Unauthorized/>}</PublicElement>}></Route>

      <Route path="/admin" element={<AdminElement>{<AdminComponent/>}</AdminElement>}></Route>
      <Route path="/user" element={<UserElement>{<UserComponent/>}</UserElement>}></Route>
      <Route path="/profile" element={<PublicElement>{<Profile/>}</PublicElement>}></Route>

      {/* Other routes... */}
    </Routes>
    </>
  );
}

export default App;
