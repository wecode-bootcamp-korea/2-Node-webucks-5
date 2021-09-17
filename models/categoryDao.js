import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export default class CategoryDao {
  getCategoryList = async () => {
    return await prisma.$queryRaw`
      SELECT id, name_kor
        FROM categories
    `;
  };

  getCategoryById = async id => {
    return await prisma.$queryRaw`
      SELECT id, name_kor
        FROM categories
       WHERE id = ${id}
    `;
  };
}
