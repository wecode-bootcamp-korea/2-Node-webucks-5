import prisma from '../prisma/index.js';


const getCategory = async () => {
  return await prisma.$queryRaw`
    SELECT  name
    FROM    categories;
  `;
};

const createCategory = async () => {
  return await prisma.$queryRaw`
    INSERT INTO categories (name)
    VALUES  ('coldbrew')
          , ('brewed');    
  `;
};

export default {
  getCategory,
  createCategory
};