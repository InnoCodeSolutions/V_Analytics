import express from 'express';
import cadastro from '../../controllers/Cadastros';

const router = express.Router();

router.post('/Cadastro', cadastro);

export default router;