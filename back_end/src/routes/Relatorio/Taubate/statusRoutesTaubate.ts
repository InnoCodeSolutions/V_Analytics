import express from 'express';
import statusTaubate from '../../../controllers/Relatorio/Taubate';


const router = express.Router();

router.get('/StatusTaubate', statusTaubate);

export default router;