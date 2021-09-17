import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const prisma = new PrismaClient();
const app = express();
const PORT = 8000 | process.env.PORT;

app.get("/", async (req,res) => {
  res.send({ message: 'Hello World' })
})

app.get("/category/list", async (req, res) => {
  const categoryList = await prisma.$queryRaw`
  SELECT name
  FROM categories;
  `;
  
  res.send(categoryList);
});

app.get("/product/list", async (req, res) => {
  const productsList = await prisma.$queryRaw`
  SELECT p.korean_name, i.image_url

  FROM products p, images i
  
  WHERE p.id = i.id;
  `;

  res.send(productsList);
});

app.get("/product/detail", async (req, res) => {
  const productDetail = await prisma.$queryRaw`
  SELECT p.id, p.korean_name, p.english_name, p.descriptions, c.name, i.image_url, a.name AS allergy_name, n.kcal, n.fat, n.protein, n.natrium, n.sugal, n.caffeine
  FROM products p 
  JOIN categories c
    ON c.id = p.category_id
  JOIN images i 
    ON i.product_id = p.id
  LEFT JOIN products_allergies pa
    ON pa.product_id = p.id
  LEFT JOIN allergies a
    ON a.id = pa.allergy_id
  JOIN nutritions n
    ON n.product_id = p.id
  `;

  // nutritions, allergies 추가 필요

  res.send(productDetail);
});



app.post("/allergies", async (req, res) => {
  const allergy = await prisma.$queryRaw`
  INSERT INTO allergies (name)
  VALUES  ('우유'),
          ('대두');
          `;

  res.json({ message: 'allergies res SUCCESS'});
});

app.post("/categories", async (req, res) => {
  const category = await prisma.$queryRaw`
  INSERT INTO categories (name)
  VALUES ('coldbrew'),
         ('brewed');
          `;

  res.json({ message: 'categories res SUCCESS'});
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

  res.json({ message: 'images res SUCCESS'});
});

app.post("/nutritions", async (req, res) => {
  const nutrition = await prisma.$queryRaw`
  INSERT INTO nutritions (kcal, fat, protein, natrium, sugal, caffeine, product_id)
  VALUES  (25, 0, 0, 50, 0 ,680, 1),
          (75, 2, 1, 20, 10, 245, 2),
          (5, 0, 0, 5, 0 ,245, 3),
          (265, 9, 8, 115, 29, 150, 4),
          (125, 6, 3, 58, 11, 150, 5),
          (150, 6, 2, 15, 17, 160, 6),
          (340, 8, 10, 115, 44, 105, 7),
          (5, 0, 0 ,11, 0, 150, 8),
          (510, 20, 10, 148, 40, 150, 9),
          (105, 1, 1, 95, 11, 65, 10),
          (230, 10, 3, 69, 18, 150, 11),
          (80, 0, 0, 0, 19, 145, 12),
          (5, 0, 0, 10, 0, 140, 13),
          (5, 0, 0, 10, 0, 260, 14);
          `;

  res.json({ message: 'nutritions res SUCCESS'});
});

app.post("/products", async (req, res) => {
  const product = await prisma.$queryRaw`
  INSERT INTO products (korean_name, english_name, descriptions, category_id)
  VALUES  ('시그니처 더 블랙 콜드 브루', 'Signnature The Black Cold Brew', '콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 부드럽고 진한 풍미의 콜드브루를 딜리버리로 원하는 곳애서 편하게 즐겨보세요 (전용 리유저블 보틍 /500ml)', 1),
          ('나이트로 바닐라 크림', 'Nitro Vanilla Cream', '부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!', 1),
          ('나이트로 콜드 브루', 'Nitro Cold Brew', '나이트로 커피 정통의 캐스케이딩과 부드러운 콜드 크레마! 부드러운 목 넘김과 완벽한 밸런스에 커피 본연의 단맛을 경험할 수 있습니다.', 1),
          ('돌체 콜드 브루', 'Dolce Cold Brew', '무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게 하는 스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를 만나보세요!', 1),
          ('바닐라 크림 콜드 브루', 'Vanilla Cream Cold Brew', '콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를 새롭게 즐길 수 있는 음료입니다.', 1),
          ('벨벳 다크 모카 나이트로', 'Velvet Dark Mocha Nitro', '다크 초콜릿 모카의 진한 바디감과 함께 헤이즐넛 향과 달콤한 카라멜 크림 폼으로 벨벳같은 부드러움까지 살린 리저브 나이트로 커피', 1),
          ('제주 비자림 콜드 브루', 'Jeju Forest Cold Brew', '[제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는 음료로 제주에서 유기농 말차로 만든 파우더와 Cold Brew를 활용한 음료.', 1),
          ('콜드 브루', 'Cold Brew', '스타벅스 바리스타의 정성으로 탄생한 콜드 브루! 콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 한정된 양만 제공됩니다. 깊은 풍미의 새로운 커피 경험을 즐겨보세요.', 1),
          ('콜드 브루 몰트', 'Cold Brew Malt', '[리저브 전용음료] 리저브 콜드 브루, 바닐라 아이스크림, 몰트가 블렌딩된 리저브만의 쉐이크', 1),
          ('콜드 브루 오트 라떼', 'Cold Brew Oat Latte', '콜드 브루의 풍미와 깔끔한 오트 밀크가 어우러진 달콤 고소한 라떼. 식물성 밀크를 사용해 모든 고객이 부담없이 즐길 수 있는 콜드 브루 음료', 1),
          ('콜드 브루 플로트', 'Cold Brew Float', '[리저브 전용음료] 리저브 콜드 브루 위에 녹아 내리는 한 스쿱의 바닐라 아이스크림', 1),
          ('프랜치 애플 타르트 나이트로', 'French Apple Tarte Nitro', '카라멜향을 머금은 애플의 달콤함과 부드러운 콜드 크레마를 조화롭게 느낄 수 있는 리저브 나이트로 음료', 1),
          ('아이스 커피', 'Iced Coffee', '깔끔하고 상큼함이 특징인 시원한 아이스 커피', 2),
          ('오늘의 커피', 'Brewed Coffee', '신선하게 브루드(Brewed)되어 원두의 다양함이 살아있는 커피', 2);
          `;

  res.json({ message: 'products res SUCCESS'});
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

  res.json({ message: 'products_allergies res SUCCESS'});
});

app.post("/users", async (req, res) => {
  const user = await prisma.$queryRaw`
  INSERT INTO users(email, password, user_name, address, phone_number, policy_agreed)
  VALUES  ('taegyu@wecode.com', 'wecode!', 'taegyu', 'jongro', '0101111111', true),
          ('jinsung@wecode.com', 'wecode!', 'jinsung', 'jongro', '0102222222', true),
          ('seoungwan@wecode.com', 'wecode!', 'seoungwan', 'jongro', '0103333333', true),
          ('dongkwon@wecode.com', 'wecode!', 'dongkwon', 'jongro', '0104444444', true),
          ('hwimin@wecode.com', 'wecode!', 'hwimin', 'jongro', '0105555555', true);
          `;
  
  return res.json({message: 'users res SUCCESS'})
})

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Success`);
  } else {
    console.log(err);
  }
}); 