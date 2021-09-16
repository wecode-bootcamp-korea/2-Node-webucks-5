import express from 'express';
import categoryRoute from './routes/categoryRoute.js';
import drinkRoute from './routes/drinkRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();
const PORT = 3000 | process.env.PORT;

app.use(express.json()); // post request body parser

app.use('/categories', categoryRoute); // router setting
app.use('/drinks', drinkRoute);
app.use('/users', userRoute);
app.get('/', (req, res) => res.send('엄커풀 &#128516'));

app.listen(PORT, err => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
