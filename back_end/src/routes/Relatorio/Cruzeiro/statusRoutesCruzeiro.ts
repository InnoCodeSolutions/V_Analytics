import express from 'express';
import statusAtibaia from '../../../controllers/Relatorio/Atibaia';
import statusCruzeiro from '../../../controllers/Relatorio/Cruzeiro';


const router = express.Router();

router.post('/StatusCruzeiro', statusCruzeiro);

export default router;