import React from 'react';
import { Header } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <Header as="h1" size="huge">
        Desafio Twitter
      </Header>
      Entre com sua conta no twitter e veja a localizacao de seus seguidores!
    </div>
  );
};

export default HomePage;
