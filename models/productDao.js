import prisma from '../prisma';

const productsList = async () => {
  return await prisma.$queryRaw`
    SELECT  p.korean_name,
            i.image_url
    FROM  products p, 
          images i
    WHERE p.id = i.id;
  `;
};

const productDetail = async () => {
  return await prisma.$queryRaw`
    SELECT  p.id
          , p.korean_name
          , p.english_name
          , p.descriptions
          , c.name AS category_name
          , i.image_url
          , (SELECT GROUP_CONCAT(a.name)
              FROM products_allergies pa
                  , allergies a
              WHERE pa.allergy_id = a.id
              AND pa.product_id = p.id) AS allergy_name
          , n.kcal, n.fat
          , n.protein
          , n.natrium
          , n.sugal
          , n.caffeine
    FROM  products p 
    JOIN  categories c
      ON  c.id = p.category_id
    JOIN  images i 
      ON  i.product_id = p.id
    JOIN  nutritions n
      ON  n.product_id = p.id;
  `;
};

const productDetailById = async (id) => {
  return await prisma.$queryRaw`
    SELECT  p.id
          , p.korean_name
          , p.english_name
          , p.descriptions
          , c.name AS category_name
          , i.image_url
          , (SELECT GROUP_CONCAT(a.name)
              FROM products_allergies pa
                  , allergies a
              WHERE pa.allergy_id = a.id
              AND pa.product_id = p.id) AS allergy_name
          , n.kcal, n.fat
          , n.protein
          , n.natrium
          , n.sugal
          , n.caffeine
    FROM  products p
    JOIN  categories c
      ON  c.id = p.category_id
    JOIN  images i 
      ON  i.product_id = p.id
    JOIN  nutritions n
      ON  n.product_id = p.id
    WHERE p.id = ${id};
  `;
};

const createProduct = async () => {
  return await prisma.$queryRaw`
    INSERT INTO categories (name)
    VALUES  ('coldbrew'),
            ('brewed');
  `;
}

export default {
  productsList,
  productDetail,
  productDetailById,
  createProduct
};