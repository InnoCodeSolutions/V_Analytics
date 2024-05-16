import { Request, Response } from 'express';
import pool from '../../database';


const cadastro = async (req: Request, res: Response) => {
  const { nome, email, cpf, endereco, senha } = req.body;

  try {
    // Verifica se o CPF já existe na tabela
    const cpfExistente = await pool.query(
      'SELECT id_usuario FROM usuario WHERE cpf = $1',
      [cpf]
    );

    // Se o CPF já existir, retorna um erro
    if (cpfExistente.rows.length > 0) {
      return res.status(400).json({ error: 'CPF já cadastrado' });
    }

    // Caso contrário, insere os dados normalmente
    const result = await pool.query(
      'INSERT INTO usuario (nome, email, cpf, endereco, senha) VALUES ($1, $2, $3, $4, $5) RETURNING id_usuario',
      [nome, email, cpf, endereco, senha]
    );

    const novoId = result.rows[0].id_usuario;
    
    res.status(201).json({ message: 'Colaborador cadastrado com sucesso', id_usuario: novoId });
  } catch (error) {
    console.error('Erro ao cadastrar colaborador:', error);
    res.status(500).json({ error: 'Erro ao cadastrar colaborador' });
  }
};

export default cadastro;
