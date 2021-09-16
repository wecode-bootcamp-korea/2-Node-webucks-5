import express from "express";
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();

const app = express();
const PORT = 8000 | process.env.PORT;

app.get('/categories_list', async (req, res) => {
  const category = await prisma.$queryRaw`
    SELECT c.id, c.name
    FROM categories c
  `;

  res.json(category);
});

app.get('/drinks_list', async (req, res) => {
  const drink = await prisma.$queryRaw`
    SELECT d.id, d.korean_name, d.english_name, c.name, d.description, d.is_new
    FROM categories c
    JOIN drinks d
    ON d.category_id = c.id
  `;

  res.json(drink);
});

app.get('/drinks_detail', async (req, res) => {
  const drinkDetail = await prisma.$queryRaw`
    SELECT d.id, d.korean_name, d.english_name, d.description, i.image_url, n.caffeine, n.kcal, n.fat, n.protein, n.sodium, n.sugar
    FROM drinks d
    JOIN images i
    ON i.drink_id = d.id
    JOIN nutritions n
    on n.drink_id = d.id
  `;

  res.json(drinkDetail);
});

app.post('/users', async (req, res) => {
  const user = await prisma.$queryRaw`
    INSERT INTO users (email, password, username, address, phone_number, policy_agreed)
    VALUES ('taegyu@wecode.com', 'wecode!', 'taegyu', 'jongro', '0101111111', true),
    ('jinsung@wecode.com', 'wecode!', 'jinsung', 'jongro', '0102222222', true),
    ('seoungwan@wecode.com', 'wecode!', 'seoungwan', 'jongro', '0103333333', true),
    ('dongkwon@wecode.com', 'wecode!', 'dongkwon', 'jongro', '0104444444', true),
    ('hwimin@wecode.com', 'wecode!', 'hwimin', 'jongro', '0105555555', true);
  `;

  res.json(user);
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
