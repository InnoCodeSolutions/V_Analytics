import React, { useState } from 'react';
import axios from 'axios';
import './index.css'
import { useNavigate } from 'react-router-dom';

export default function Cadastro(): JSX.Element {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigator = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/Cadastro', { nome, email, cpf, endereco, senha });

      if (response.status === 201) {
        
        setMensagem('Colaborador cadastrado com sucesso!');
        navigator('/Acesso')
        // Redirecionar ou exibir uma mensagem de sucesso ao usuário
      } else {
        setMensagem('Erro ao cadastrar colaborador');
        // Exibir mensagem de erro ao usuário
      }
    } catch (error) {
      console.error('Erro ao cadastrar colaborador:', error);
      setMensagem('Erro ao cadastrar colaborador');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nome':
        setNome(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'cpf':
        setCpf(value);
        break;
      case 'endereco':
        setEndereco(value);
        break;
      case 'senha':
        setSenha(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="user-form">
        <h2 className="mb-3">Cadastre um Colaborador</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <label htmlFor="nome" className="form-label">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={handleInputChange}
              placeholder="Digite o nome"
              className="form-control"
            />
          </div>

          <div className="input-group mb-3">
            <label htmlFor="email" className="form-label">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Digite o e-mail"
              className="form-control"
            />
          </div>

          <div className="input-group mb-3">
            <label htmlFor="cpf" className="form-label">CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={cpf}
              onChange={handleInputChange}
              placeholder="Digite o CPF"
              className="form-control"
            />
          </div>

          <div className="input-group mb-3">
            <label htmlFor="endereco" className="form-label">Endereço:</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={endereco}
              onChange={handleInputChange}
              placeholder="Digite o endereço"
              className="form-control"
            />
          </div>

          <div className="input-group mb-3">
            <label htmlFor="senha" className="form-label">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={handleInputChange}
              placeholder="Digite a senha"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">Cadastrar</button>

          {/* Exibe a mensagem */}
          {mensagem && <p>{mensagem}</p>}
        </form>
      </div>
    </div>
  );
}
