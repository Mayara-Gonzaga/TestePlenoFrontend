import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className="login-container container">
      <h2>Bem-vindo de volta 👋</h2>
      <p>Entre com seu e-mail e senha para continuar.</p>

      <Input
        type="email"
        placeholder="seuemail@exemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button text="Entrar" onClick={handleLogin} />

      <p className="signup-link">
        Ainda não tem uma conta? <a href="#">Cadastre-se</a>
      </p>
    </div>
  );
};

export default Login;