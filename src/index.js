import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
     <Provider store={store}>
     <SnackbarProvider maxSnack={3} anchorOrigin={{vertical: 'top' , horizontal: 'right'}}>
      <App />
     </SnackbarProvider>
     </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
