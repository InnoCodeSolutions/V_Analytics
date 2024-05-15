import express from 'express';
import statusAtibaia from '../../../controllers/Relatorio/Atibaia';


const router = express.Router();

router.get('/StatusAtibaia', statusAtibaia);

export default router;