import React, { useState } from 'react';

import api from '../../services/api';
import './style.css';

export default function Register({ history }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      window.alert('Informe o email e senha');
      setEmail('');
      setPassword('');
    } else if (password.length !== 6) {
        window.alert('Senha tem que ter pelo menos 6 caracteres');
        setEmail('');
        setPassword('');
    }

    await api.post('/register', { username, email, password });

    history.push('/');
  }

  return (
    <div className="register">
      <h1>CADASTRAR-SE</h1><hr/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">NOME DE USUÁIO*</label>
        <input
          type="text"
          placeholder="Seu nome de usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <label htmlFor="email">E-MAIL*</label>
        <input 
          type="email"
          placeholder="Seu melhor email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">SENHA*</label>
        <input 
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button>CADASTRAR</button>
      </form>
    </div>
  );
}
