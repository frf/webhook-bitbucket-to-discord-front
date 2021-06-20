import React from 'react';
import './assets/styles/global.css';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <SnackbarProvider maxSnack={3} anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
          }}>
          <Routes />
        </SnackbarProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
