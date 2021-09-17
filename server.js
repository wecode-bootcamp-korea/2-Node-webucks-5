import express from "express";
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();

const app = express();
const PORT = 8000 | process.env.PORT;

app.use(express.json());  // post request body parser

app.get('/categories_list', async (req, res) => {
  const category = await prisma.$queryRaw`
    SELECT c.id, c.name
    FROM categories c
  `;

  res.json(category);
});

app.get('/drinks_list', async (req, res) => {
  const drink = await prisma.$queryRaw`
    SELECT d.id, d.korean_name AS name, i.image_url
    FROM drinks d
    LEFT JOIN images i
    ON i.drink_id = d.id
  `;

  res.json(drink);
});

app.get('/drinks_detail', async (req, res) => {
  const drinkDetail = await prisma.$queryRaw`
    SELECT d.id, d.korean_name, d.english_name, d.description, i.image_url, n.caffeine, n.kcal, n.fat, n.protein, n.sodium, n.sugar
    FROM drinks d
    LEFT JOIN images i
    ON i.drink_id = d.id
    LEFT JOIN nutritions n
    on n.drink_id = d.id
  `;

  res.json(drinkDetail);
});

app.post('/users', async (req, res) => {
  const { email, password, username, address, phone_number, policy_agreed } = req.body;
  const createUser = await prisma.$queryRaw`
    INSERT INTO users (email, password, username, address, phone_number, policy_agreed) 
    VALUES (${email}, ${password}, ${username}, ${address}, ${phone_number}, ${policy_agreed});
  `;

  res.json(createUser);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
