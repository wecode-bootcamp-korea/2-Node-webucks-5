import express from 'express';
import router from './routes/router.js';

const app = express();
const PORT = 3000 | process.env.PORT;

app.use(express.json()); // post request body parser

app.use('/', router);

app.listen(PORT, err => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
