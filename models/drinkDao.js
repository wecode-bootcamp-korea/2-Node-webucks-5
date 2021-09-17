import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export class DrinkDao {
  getDrinkList = async () => {
    return await prisma.$queryRaw`
      SELECT id
           , name_kor
           , name_eng
           , description
           , is_new
           , category_id
        FROM drinks
    `;
  };

  getDrinkDetail = async id => {
    return await prisma.$queryRaw`
      SELECT d.id
           , d.name_kor
           , d.name_eng
           , d.description
           , d.is_new
           , d.category_id
           , i.image_url
           , n.natrium
        FROM drinks d
           , images i
           , nutrients n
       WHERE d.id = ${id}
         AND i.drink_id = d.id
         AND n.drink_id = d.id
    `;
  };
}
