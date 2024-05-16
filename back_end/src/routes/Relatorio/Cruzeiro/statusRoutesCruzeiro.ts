import express from 'express';
import statusCruzeiro from '../../../controllers/Relatorio/Cruzeiro';


const router = express.Router();

router.get('/StatusCruzeiro', statusCruzeiro);

export default router;