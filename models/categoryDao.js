import prisma from '../prisma';

const getCategoryList = async () => {
  return await prisma.$queryRaw`
    SELECT 
      c.id, c.name
    FROM 
      categories c
  `;
};

export default { getCategoryList };
