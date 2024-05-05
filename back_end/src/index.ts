import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cadastroRoutes from './routes/Cadastro/cadastroRoutes';
import loginRoutes from './routes/Login/loginRoutes';



const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({
  origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use(bodyParser.json());

app.use(loginRoutes);
app.use(cadastroRoutes);

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});