import React, { useState, ChangeEvent, FormEvent } from 'react';
import './index.css';
import { Credentials } from '../../types';
import { useNavigate } from 'react-router-dom';
import { generateToken, verifyToken, checkRole } from './role';





type User = {
  username: string;
  password: string;
  role: string;
};

const users: { [key: string]: User } = {
  'gestor': { username: 'gestor', password: 'senha1', role: 'gestor' },
  'revisor': { username: 'revisor', password: 'senha2', role: 'revisor' },
  'editor1': { username: 'editor1', password: 'senha3', role: 'editor1' },
  'editor2': { username: 'editor2', password: 'senha4', role: 'editor2' },
  'editor3': { username: 'editor3', password: 'senha5', role: 'editor3' },
};



const Login: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '', role: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = users[credentials.username];
    if (user && user.password === credentials.password) {
      setCredentials({ ...credentials, role: user.role });
      console.log(credentials);
      switch(credentials.role) {
        case 'gestor':
        case 'revisor':
          navigate('/Acesso');
          break;
        case 'editor1':
          navigate('/StatusTaubate');
          break;
        case 'editor2':
          navigate('/StatusCruzeiro');
          break;
        case 'editor3':
          navigate('/StatusAtibaia');
          break;
        default:
          console.log('Função não reconhecida');
          break;
      }
      
    } else {
      console.log('Nome de usuário ou senha incorretos');
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
          
          <button id='button' type="submit">ENTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
