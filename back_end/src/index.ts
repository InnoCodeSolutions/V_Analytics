import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cadastroRoutes from './routes/Cadastro/cadastroRoutes';
import loginRoutes from './routes/Login/loginRoutes';
import statusRoutesCruzeiro from './routes/Relatorio/Cruzeiro/statusRoutesCruzeiro';
import statusRoutesTaubate from './routes/Relatorio/Taubate/statusRoutesTaubate';
import statusRoutesAtibaia from './routes/Relatorio/Atibaia/statusRoutesAtibaia';




const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
  origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use(bodyParser.json());

app.use(loginRoutes);
app.use(cadastroRoutes);
app.use(statusRoutesCruzeiro)
app.use(statusRoutesTaubate)
app.use(statusRoutesAtibaia)

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});