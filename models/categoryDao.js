import prisma from './client';

const createCategory = async (category_name) => {
  console.log('hello')
  return await prisma.$queryRaw`
    INSERT INTO categories (category_name)
    VALUES  (${category_name});
  `;
}

const getAllCategories = async () => {
  console.log('hello')
  return await prisma.$queryRaw`
  SELECT  c.id
      ,   c.category_name
    FROM  categories c;
  `;
}

app.post('/categories', createCategory);
app.get('/categories', getAllCategories);

module.exports = {
  createCategory, getAllCategories
}

