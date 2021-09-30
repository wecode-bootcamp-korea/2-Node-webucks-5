import http from 'http';
import dotenv from 'dotenv';
import express from 'express';
import router from './routes/index.js';

dotenv.config();

const app = express();
const PORT = 8000 | process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

const server = http.createServer(app);

server.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});