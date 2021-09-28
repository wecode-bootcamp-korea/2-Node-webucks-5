import prisma from '../prisma/index';

const getProductList = async () => {
  return await prisma.$queryRaw`
    SELECT p.id, p.korean_name, i.image_url, c.category_name
    FROM products p
    LEFT JOIN images i
    ON p.image_id = i.id
    LEFT JOIN categories c
    ON p.category_id = c.id;
  `;
};

const getProductDetail = async id => {
  return await prisma.$queryRaw`
    SELECT p.id, 
           p.korean_name, 
           p.english_name, 
           p.description, 
           p.is_new, 
           i.image_url, 
           c.category_name, 
           n.serving_size, 
           n.kcal, 
           n.fat, 
           n.protein, 
           n.natrium, 
           n.sugar, 
           n.caffeine, 
           a.allergy_cause
    FROM products p
    LEFT JOIN images i
    ON p.image_id = i.id
    LEFT JOIN categories c
    ON p.category_id = c.id
    LEFT JOIN nutritions n
    ON p.id = n.id
    LEFT JOIN products_allergies p_a
    ON p.id = p_a.id
    LEFT JOIN allergies a
    ON a.id = p_a.id
    WHERE p.id = ${id}
  `;
};

const getCategory = async () => {
  return await prisma.$queryRaw`
    SELECT c.category_name
    FROM categories c
  `;
};

export default { getCategory, getProductList, getProductDetail };
