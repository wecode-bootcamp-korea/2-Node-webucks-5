import prisma from '../prisma/index.js';

const getAllCategories = async () => {
  return await prisma.$queryRaw`
  SELECT  c.id
      ,   c.category_name
    FROM  categories c;
  `;
}

const getCategoryById = async id => {
  return await prisma.$queryRaw`
    SELECT id, category_name
      FROM categories
      WHERE id = ${id}
  `;
};

const createCategory = async (category_name) => {
  return await prisma.$queryRaw`
    INSERT INTO categories (category_name)
    VALUES  (${category_name});
  `;
}

export default {
  getAllCategories, getCategoryById, createCategory
}

