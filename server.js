import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const prisma = new PrismaClient();
const app = express();
const PORT = 8000 | process.env.PORT;

app.get("/category_list", async (req, res) => {
  const categoryList = await prisma.$queryRaw`
  SELECT name
  FROM categories;
  `;
  
  res.send(categoryList);
});

app.get("/products_list", async (req, res) => {
  const productsList = await prisma.$queryRaw`
  SELECT p.korean_name, p.english_name, i.image_url
  FROM products p, images i
  WHERE p.id = i.id;
  `;

  res.send(productsList);
});

app.get("/product_detail", async (req, res) => {
  const productDetail = await prisma.$queryRaw`
  SELECT p.korean_name, p.english_name, a.name, c.name, i.image_url, n.name, n.amount 
  FROM products p, allergies a, categoreis c, images i, nutrition n;
  `;

  res.send(productDetail);
});



app.post("/allergies", async (req, res) => {
  const allergy = await prisma.$queryRaw`
  INSERT INTO allergies (name)
  VALUES  ('우유'),
          ('대두');
          `;

  res.json( { message: 'allergies res SUCCESS'});
});

app.post("/categories", async (req, res) => {
  const category = await prisma.$queryRaw`
  INSERT INTO categories (name)
  VALUES ('coldbrew'),
         ('brewed');
          `;

  res.json( { message: 'categories res SUCCESS'});
});

app.post("/images", async (req, res) => {
  const image = await prisma.$queryRaw`
  INSERT INTO images (image_url, product_id)
  VALUES  ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg', 1),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg', 2),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg', 3),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg', 4),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg', 5),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg', 6),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg', 7),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg', 8),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg', 9),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg', 10),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg', 11),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg', 12),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg', 13),
          ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg', 14);
          `;

  res.json( { message: 'images res SUCCESS'});
});

app.post("/nutritions", async (req, res) => {
  const nutrition = await prisma.$queryRaw`
  INSERT INTO nutritions (name, amount, product_id)
  VALUES  ('kcal', 25, 1), ('fat(g)', 0, 1), ('protein(g)', 0, 1), ('natrium(mg)', 50, 1), ('sugal(g)', 0, 1), ('caffeine(mg)', 680, 1),
          ('kcal', 75, 2), ('fat(g)', 2, 2), ('protein(g)', 1, 2), ('natrium(mg)', 20, 2), ('sugal(g)', 10, 2), ('caffeine(mg)', 245, 2),
          ('kcal', 5, 3), ('fat(g)', 0, 3), ('protein(g)', 0, 3), ('natrium(mg)', 5, 3), ('sugal(g)', 0, 3), ('caffeine(mg)', 245, 3),
          ('kcal', 265, 4), ('fat(g)', 9, 4), ('protein(g)', 8, 4), ('natrium(mg)', 115, 4), ('sugal(g)', 29, 4), ('caffeine(mg)', 150, 4),
          ('kcal', 125, 5), ('fat(g)', 6, 5), ('protein(g)', 3, 5), ('natrium(mg)', 58, 5), ('sugal(g)', 11, 5), ('caffeine(mg)', 150, 5),
          ('kcal', 150, 6), ('fat(g)', 6, 6), ('protein(g)', 2, 6), ('natrium(mg)', 15, 6), ('sugal(g)', 17, 6), ('caffeine(mg)', 160, 6),
          ('kcal', 340, 7), ('fat(g)', 8, 7), ('protein(g)', 10, 7), ('natrium(mg)', 115, 7), ('sugal(g)', 44, 7), ('caffeine(mg)', 105, 7),
          ('kcal', 5, 8), ('fat(g)', 0, 8), ('protein(g)', 0, 8), ('natrium(mg)', 11, 8), ('sugal(g)', 0, 8), ('caffeine(mg)', 150, 8),
          ('kcal', 510, 9), ('fat(g)', 20, 9), ('protein(g)', 10, 9), ('natrium(mg)', 148, 9), ('sugal(g)', 40, 9), ('caffeine(mg)', 150, 9),
          ('kcal', 105, 10), ('fat(g)', 1, 10), ('protein(g)', 1, 10), ('natrium(mg)', 95, 10), ('sugal(g)', 11, 10), ('caffeine(mg)', 65, 10),
          ('kcal', 230, 11), ('fat(g)', 10, 11), ('protein(g)', 3, 11), ('natrium(mg)', 69, 11), ('sugal(g)', 18, 11), ('caffeine(mg)', 150, 11),
          ('kcal', 80, 12), ('fat(g)', 0, 12), ('protein(g)', 0, 12), ('natrium(mg)', 0, 12), ('sugal(g)', 19, 12), ('caffeine(mg)', 145, 12),
          ('kcal', 5, 13), ('fat(g)', 0, 13), ('protein(g)', 0, 13), ('natrium(mg)', 10, 13), ('sugal(g)', 0, 13), ('caffeine(mg)', 140, 13),
          ('kcal', 5, 14), ('fat(g)', 0, 14), ('protein(g)', 0, 14), ('natrium(mg)', 10, 14), ('sugal(g)', 0, 14), ('caffeine(mg)', 260, 14);
  `;

  res.json( { message: 'nutritions res SUCCESS'});
});

app.post("/products", async (req, res) => {
  const product = await prisma.$queryRaw`
  INSERT INTO products (korean_name, english_name, category_id)
  VALUES  ('시그니처 더 블랙 콜드 브루', 'Signnature The Black Cold Brew', 1),
          ('나이트로 바닐라 크림', 'Nitro Vanilla Cream', 1),
          ('나이트로 콜드 브루', 'Nitro Cold Brew', 1),
          ('돌체 콜드 브루', 'Dolce Cold Brew', 1),
          ('바닐라 크림 콜드 브루', 'Vanilla Cream Cold Brew', 1),
          ('벨벳 다크 모카 나이트로', 'Velvet Dark Mocha Nitro', 1),
          ('제주 비자림 콜드 브루', 'Jeju Forest Cold Brew', 1),
          ('콜드 브루', 'Cold Brew', 1),
          ('콜드 브루 몰트', 'Cold Brew Malt', 1),
          ('콜드 브루 오트 라떼', 'Cold Brew Oat Latte', 1),
          ('콜드 브루 플로트', 'Cold Brew Float', 1),
          ('프랜치 애플 타르트 나이트로', 'French Apple Tarte Nitro', 1),
          ('아이스 커피', 'Iced Coffee', 2),
          ('오늘의 커피', 'Brewed Coffee', 2);
          `;

  res.json( { message: 'products res SUCCESS'});
});

app.post("/products_allergies", async (req, res) => {
  const productAllergy = await prisma.$queryRaw`
  INSERT INTO products_allergies(product_id, allergy_id)
  VALUES  (2, 1),
          (4, 1),
          (5, 1),
          (6, 1),
          (9, 1),
          (9, 2),
          (11, 1);
          `;

  res.json( { message: 'products_allergies res SUCCESS'});
});
// wrap up 후 추가작성 필요.
app.post("/users", async (req, res) => {
  const user = await prisma.$queryRaw`
  INSERT INTO users(email, password, user_name, adress, phone_number, policy_agreed)
  VALUES  ('email', 'password', 'userName', 'adress', 'phoneNumber', 'policyAreed')
  VALUES  ('', '', '', '', '', ''),
  VALUES  ('', '', '', '', '', ''),
  VALUES  ('', '', '', '', '', ''),
  VALUES  ('', '', '', '', '', '');
  `;

    res.json( {message: 'users res SUCCESS'})
})

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Success`);
  } else {
    console.log(err);
  }
}); 