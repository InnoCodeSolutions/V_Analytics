import { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD, // Usar a senha do arquivo .env
  port: Number(process.env.DB_PORT),
});

async function runQuery() {
  try {
    const response = await pool.query(`
      SELECT cidade, atribuicao AS analista, COUNT(*) AS producao
      FROM (
          SELECT 'atibaia' AS cidade, atribuicao
          FROM tbgrade_atuacao_atibaia
          UNION ALL
          SELECT 'cruzeiro' AS cidade, atribuicao
          FROM tbgrade_atuacao_cruzeiro
          UNION ALL
          SELECT 'taubate' AS cidade, atribuicao
          FROM tbgrade_atuacao_taubate
      ) AS combined_data
      GROUP BY cidade, atribuicao
      ORDER BY cidade, producao DESC;
    `);
    console.log(response.rows);
  } catch (err) {
    console.error('Error executing query:', (err as Error).stack);
  }
}

runQuery();

dotenv.config();
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_PORT:', process.env.DB_PORT);


//código para rodar no vscode =   ts-node apontamento.ts
//o env precisa estar correto os dados do seu bd. inclusive sua senha

// deve retorar essa consulta aqui
/*
PS C:\Users\cmbol\Desktop\FATEC\2º SEMESTRE - DSM\DW2\conectar ao sgbd\Web2\aula4bd\postgres\src> ts-node controllers/apontamento.ts
>>
[
  { cidade: 'atibaia', analista: null, producao: '894' },
  { cidade: 'atibaia', analista: 'analista 2', producao: '782' },
  { cidade: 'atibaia', analista: 'analista 1', producao: '207' },
  { cidade: 'cruzeiro', analista: 'analista 3', producao: '923' },
  { cidade: 'cruzeiro', analista: 'analista 1', producao: '265' },
  { cidade: 'taubate', analista: 'analista 4', producao: '1543' },
  { cidade: 'taubate', analista: null, producao: '650' },
  { cidade: 'taubate', analista: 'analista 1', producao: '231' }
]
S C:\Users\cmbol\Desktop\FATEC\2º SEMESTRE - DSM\DW2\conectar ao sgbd\Web2\aula4bd\postgres\src\controllers> */