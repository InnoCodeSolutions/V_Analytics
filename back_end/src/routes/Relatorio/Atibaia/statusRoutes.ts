import express from 'express';
import statusAtibaia from '../../../controllers/Relatorio/Atibaia';


const router = express.Router();

router.post('/StatusAtibaia', statusAtibaia);

export default router;