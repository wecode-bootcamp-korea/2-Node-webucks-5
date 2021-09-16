import dotenv from 'dotenv';
import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const { PORT } = process.env;

app.post('categories', async (req, res) => {
  prisma.category.create({
    data: {
      categoryName: '티'
    }
  })
});

app.get('/ping', (req, res) => {
  res.json('pong');
});

app.listen(PORT, () => {
  console.log('server is listening at PORT: ${PORT}');
})