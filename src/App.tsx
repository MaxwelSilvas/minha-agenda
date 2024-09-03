// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import styled from 'styled-components';
import Header from './components/Header';
import GlobalStyles from './styles';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <Container>
        <ContactForm />
        <ContactList />
      </Container>
    </Provider>
  );
};

export default App;
