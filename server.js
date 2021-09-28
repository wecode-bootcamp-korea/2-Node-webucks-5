import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from './routes/index';

const app = express();
const PORT = 8000 | process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));
app.use(router);

app.use((req, res, next) => {
  res.status(400).send({ message: 'not found' });
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send({ message: 'interval server error' });
});

app.listen(PORT, () => console.log(`server on ${PORT}`));
