import express from 'express';
import statusAtibaia from '../../../controllers/Relatorio/Atibaia';
import statusTaubate from '../../../controllers/Relatorio/Taubate';


const router = express.Router();

router.post('/StatusTaubate', statusTaubate);

export default router;