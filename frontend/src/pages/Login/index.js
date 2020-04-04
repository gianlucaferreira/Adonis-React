import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');

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

    const response = await api.post('/autheticate', { email, password });

    const { token } = response.data;

    if (!token) {
      window.alert('Usuário inexitente \n Cadastre-se agora') 
      
    }

    localStorage.setItem('token', token);

    history.push('/dashboard');
  }

  return (
    <div className="login">
      <h1>LOGIN</h1><hr/>
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL</label>
                <input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  value={email} 
                  onChange={ e => setEmail(e.target.value) } 
                />

                <label htmlFor="password">SENHA</label>
                <input 
                  type="password" 
                  placeholder="Sua senha mais segura" 
                  value={password} 
                  onChange={ e => setPassword(e.target.value) } 
                />

                <button type="submit">ENTRAR</button>
            </form>
        </section>
            <Link to="/Register">
              <button className="link">Cadastrar-se</button>
            </Link>
    </div>
  );
}
