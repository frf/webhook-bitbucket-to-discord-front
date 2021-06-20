import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Home from '../pages/HomePage';
import Register from '../pages/Register';

const SignRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/login'  component={Login} />
        <Route path='/register'  component={Register} />
    </BrowserRouter>
  );
};

export default SignRoutes;