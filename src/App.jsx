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
import Unauthorized from "./pages/Unauthorized";
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {

  return (
    <AuthProvider>  
      <Router>
        <Routes>

          <Route 
            path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } 
          />
          
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Config />} />

          <Route 
            path="/" element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            } 
          />

          <Route 
            path="/users" element={
              <PrivateRoute requiredRoles={[ 'interno' ]}>
                <Users />
              </PrivateRoute>
            } 
          />

          <Route path="/register" element={<RegisterExternalUser />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;