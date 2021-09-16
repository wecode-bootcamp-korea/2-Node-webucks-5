import { PrismaClient } from '.prisma/client';
import express from 'express';

const app = express();
const PORT = 3000 | process.env.PORT;
const prisma = new PrismaClient();

//
app.use(express.json());

// root
app.get('/', (req, res) => {
  res.send('Hello !');
});

// categories
app.get('/categories', async (req, res) => {
  const categories = await prisma.$queryRaw`
    SELECT id, name_kor
      FROM categories
  `;
  res.json(categories);
});

// drinks
app.get('/drinks', async (req, res) => {
  const drinks = await prisma.$queryRaw`
    SELECT d.id
         , d.name_kor 'drink_name'
         , d.name_eng 'drink_name_eng'
         , d.description
         , d.is_new
         , d.category_id
         , c.name_kor 'category_name'
      FROM drinks d
         , categories c
     WHERE d.category_id = c.id
  `;
  res.json(drinks);
});

// drink detail
app.get('/drinks/:id', async (req, res) => {
  const id = req.params.id;
  const [drink] = await prisma.$queryRaw`
    SELECT d.id
         , d.name_kor
         , d.name_eng
         , d.description
         , d.is_new
         , d.category_id
         , n.natrium
      FROM drinks d
         , nutrients n
     WHERE d.id = ${id}
       AND n.drink_id = d.id
  `;
  res.json(drink);
});

// create user
app.post('/user', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  await prisma.$queryRaw`
    INSERT INTO users (email, password)
    VALUES (${email}, ${password})
  `;
  res.json(req.body);
});

//
app.listen(PORT, err => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
