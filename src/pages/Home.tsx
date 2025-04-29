import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Olá, Teste Capys</h1>
      <p>Desenvolvedor Front-End</p>
      <p>Que pena! Estamos em desenvolvimento :(</p>
      <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades.</p>
      <button className="home-button">Voltar</button>
    </div>
  );
};

export default Home;