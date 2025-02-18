import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Config from './pages/Config';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import AuthProvider from './context/AuthContext';
import NotFound from './components/NotFound';
import RegisterExternalUser from './pages/RegisterExternalUser';
import Users from './pages/Users';

function App() {

  return (
    <AuthProvider>  
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Config />} />
          <Route path="/" element={<Admin />} />
          <Route path="/register" element={<RegisterExternalUser />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;