
import 'express-async-errors';
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';

import { globalErrors } from './middlewares/globalErros'
import routes from './routes';

const app = express();
const PORT = 3333;

app.use(cors())
app.use(express.json())
app.use(routes);

app.use(globalErrors);

app.get('/', (req, res) => res.send({ msg: 'Server is Running ⚡' }))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});