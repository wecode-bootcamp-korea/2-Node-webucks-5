import prisma from '../prisma/index.js';

const getAllCategories = async () => {
  console.log('dao hello1')
  return await prisma.$queryRaw`
  SELECT  c.id
      ,   c.category_name
    FROM  categories c;
  `;
}

const createCategory = async (category_name) => {
  console.log('dao hello')
  return await prisma.$queryRaw`
    INSERT INTO categories (category_name)
    VALUES  (${category_name});
  `;
}

export default {
  getAllCategories, createCategory
}

