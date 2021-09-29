import prisma from '../prisma/index.js';


const getCategories = async () => {
  return await prisma.$queryRaw`
    SELECT  c.name
    FROM    categories c;
    `;
};

const getCategoryByName = async (name) => {
  return await prisma.$queryRaw`
    SELECT  c.name
    FROM    categories c
    WHERE   c.name = ${name}
    `;
}

export default {
  getCategories,
  getCategoryByName
};