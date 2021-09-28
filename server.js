import express from 'express';
import router from './routes/router.js';

const app = express();

app.use(express.json()); // post request body parser

app.use('/', router);

app.listen(process.env.PORT, err => {
  if (!err) {
    console.log(`Server is running on ${process.env.PORT}`);
  } else {
    console.log(err);
  }
});
