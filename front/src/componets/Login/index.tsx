import React, { useState, ChangeEvent, FormEvent } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/', credentials);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate('/Acesso');
      } else {
        console.log('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>ACESSE SUA CONTA</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">USUÁRIO</label>
            <input
              name="username"
              type="text"
              id="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">SENHA</label>
            <input
              name="password"
              type="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button id="button" type="submit">ENTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
