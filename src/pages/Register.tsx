import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import '../styles/Register.css';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Confirmar Senha:', confirmPassword);
  };

  return (
    <div className="register-container container">
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa!</p>

      <Input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button text="Cadastrar" onClick={handleRegister} />

      <p className="login-link">
        Já tem uma conta? <a href="#">Entre aqui</a>
      </p>
    </div>
  );
};

export default Register;