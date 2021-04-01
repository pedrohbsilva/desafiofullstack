import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyles from './styles/global';
import client from './services/apollo';
import 'react-toastify/dist/ReactToastify.css';

const App = (): React.ReactElement => {
  return (
    <ApolloProvider client={client}>
      <Routes />
      <GlobalStyles />
      <ToastContainer />
    </ApolloProvider>
  );
};

export default App;
