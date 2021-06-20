import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Webhook from '../pages/Webhook';
import WebhookShow from '../pages/WebhookShow';
import HomePage from '../pages/HomePage';

const PrivateRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
          <Route path="/" exact component={HomePage} />
          <Route path="/webhooks" component={Webhook} />
          <Route path="/webhook/:id" component={WebhookShow} />
          <Redirect to='/webhooks' />
    </BrowserRouter>
  );
};

export default PrivateRoutes;