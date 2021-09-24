import prisma from '../prisma';

const getCategoryList = async () => {
  return await prisma.$queryRaw`
    SELECT id, name_kor
      FROM categories
  `;
};

const getCategoryById = async id => {
  return await prisma.$queryRaw`
    SELECT id, name_kor
      FROM categories
      WHERE id = ${id}
  `;
};

export default { getCategoryList, getCategoryById };
