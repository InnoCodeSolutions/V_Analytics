import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import pool from '../../database';


const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  
  try {
    const user = await pool.query('SELECT * FROM usuario WHERE nome = $1 AND senha = $2', [username, password]);
    
    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas', alert: 'Credenciais inválidas' });
    }
    
    const token = jwt.sign({ usuario: user.rows[0].id }, 'senha2');
    
    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
export default login;