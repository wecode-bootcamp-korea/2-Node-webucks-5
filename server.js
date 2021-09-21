import express from 'express';
import dotenv from 'dotenv';
import Route from './routes/Route';

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;

app.use(express.json());
app.use(express.urlencoded( {extended : false } )); 

app.use( Route.categoryRoute );
app.use( Route.productRoute );
app.use( Route.userRoute );

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Success`);
  } else {
    console.log(err);
  }
});