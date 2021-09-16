import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const app = express();
const PORT = 8000 | process.env.PORT;
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/categories', async (req, res) => {
  const category = await prisma.$queryRaw`
    SELECT category_name
    FROM categories
  `;
  res.json(category);
});

app.get('/lists', async (req, res) => {
  const list = await prisma.$queryRaw`
    SELECT products.id, products.korean_name, image_url, category_name
    FROM products
    LEFT JOIN images ON products.image_id = images.id
    LEFT JOIN categories ON products.category_id = categories.id;
  `;

  res.json(list);
});

app.get('/details/:id', async (req, res) => {
  const id = req.params.id;
  const detail = await prisma.$queryRaw`
    SELECT products.id, korean_name, english_name, description, is_new, image_url, category_name, serving_size, kcal, fat, protein, natrium, sugar, caffeine, allergies.allergy_cause
    FROM products
    LEFT JOIN images
    ON products.image_id = images.id
    LEFT JOIN categories
    ON products.category_id = categories.id
    LEFT JOIN nutritions
    ON products.id = nutritions.id
    LEFT JOIN products_allergies
    ON products.id = products_allergies.id
    LEFT JOIN allergies
    ON allergies.id = products_allergies.id
    WHERE products.id = ${id}
  `;
  res.json(detail);
});

app.listen(PORT, () => console.log(`server on ${PORT}`));
