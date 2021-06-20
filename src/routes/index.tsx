import React from 'react';
import { useAuth } from '../contexts/auth';

import SignRoutes from './SignRoutes';
import PrivateRoutes from './PrivateRoutes';

const Routes: React.FC = () => {
  const { signed } = useAuth();
  return signed ? <PrivateRoutes /> : <SignRoutes />;
};

export default Routes;