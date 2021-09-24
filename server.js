import http from 'http';
import dotenv from 'dotenv';
import express from 'express';
import router from './routes/index.js';
import categoryRouter from './routes/categoryRouter.js';
import drinkRouter from './routes/drinkRouter.js';
import allergyRouter from './routes/allergyRouter.js';
import nutritionRouter from './routes/nutritionRouter.js';


dotenv.config();

const app = express();
const PORT = 8000 | process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.use(express.json());

app.use('/categories', categoryRouter);
app.use('/drinks', drinkRouter);
app.use('/allergy', allergyRouter);
app.use('/nutritions', nutritionRouter);
app.use('/users', userRouter);

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err);
  res.status(status || 500).json({ message });
});

// app.post('/drinks', async (req, res) => {
  // const drink = await prisma.$queryRaw`
  //   INSERT INTO drinks (korean_name, english_name, category_id, description, new)
  //   VALUES  ('아이스크림 블렌딩 콜드 브루', 'Icecream Belnding coldbrew', 1, '아이스크림은 맛있어, 그러면 이 메뉴도 맛있어', false),
  //           ('나이트로 바닐라 크림', 'Nitro Vanilla Cream', 1, '부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!', false),
  //           ('나이트로 콜드 브루', 'Nitro Cold Brew', 1, '나이트로 커피 정통의 캐스케이딩과 부드러운 콜드 크레마!', false),
  //           ('돌체 콜드 브루', 'Dolce Cold Brew', 1, '동남아 휴가지에서 즐기는 커피를 떠오르게 하는 스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를 만나보세요!', false),
  //           ('바닐라 크림 콜드 브루', 'Vanilla Cream Cold Brew', 1, '콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를 새롭게 즐길 수 있는 음료입니다.', false);
  // `;

//   await prisma.$queryRaw`
//     SELECT  d.id
//           , d.korean_name
//           , d.english_name
//           , d.category_id
//           , d.discription
//           , d.new
//     FROM  drinks d
//     JOIN  categories c
//       ON  d.category_id = c.id;
//   `;

//   res.json(drink);
// })

// app.post('/nutritions', async (req, res) => {
//   const nutrition = await prisma.$queryRaw`
//     INSERT INTO nutritions (serving_size, kcal, fat, protein, natrium, sugars, caffeine, drink_id)
//     VALUES  ('tall', '345', '0', '150', '0', '0', '100', 1),
//             ('tall', '5', '0', '0', '5', '0', '245', 2),
//             ('tall', '345', '0', '0', '150', '0', '100',3),
//             ('tall', '265', '9', '8', '115', '29', '150', 4),
//             ('tall', '125', '6', '3', '58', '11', '150', 5);
//   `;

//   // await prisma.$queryRaw`
//   //   SELECT  d.id
//   //         , d.
//   //         , d.
//   //   FROM drink_detail d;
//   // `;
//   res.json(nutrition);
// })

// app.post('/images', async (req, res) => {
//   const image = await prisma.$queryRaw`
//     INSERT INTO images (image, drink_id)
//     VALUES  ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg', 1),
//             ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg', 2),
//             ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg', 3),
//             ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg', 4),
//             ('https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg', 5);
//   `;

  

//   res.json(image);
// })

// app.post('/drinks_allergies', async (req, res) => {
//   const drinkAllergy = await prisma.$queryRaw`
//     INSERT INTO drinks_allergies (drink_id, allergy_id)
//     VALUES  (1, 1)
//           , (2, 2)
//           , (3, 2)
//           , (4, 1)  
//           , (5, 1);
//   `;

//   await prisma.$queryRaw`
//   SELECT  da.id
//         , da.drink_id
//         , da.allergy_id
//   FROM  drinks_allergies da
//       , drinks d
//       , allergies a
//   WHERE da.drink_id = d.drink.id
//         da.allergy_id = d.allergy.id;
//   `;
// })

// app.post('/allergies', async (req, res) => {
//   const allergy = await prisma.$queryRaw`
//     INSERT INTO allergies (allergy_name)
//     VALUES  ('milk')
//           , ('')
//   `;

//   await prisma.$queryRaw`
//     SELECT  a.id
//           , a.allergy_name
//     FROM allergies a;
//   `;

//   res.json(allergy);
// })

// // app.post('/drink_detail', async (req, res) => {
// //   const nutrition = await prisma.$queryRaw`
// //     INSERT INTO (serving_size, kcal, fat, protein, natrium, caffeine, drink_id)
// //     VALUES  ('tall, '345', '0', '150', '0', '100', 1),
// //             ('tall, '5', '0', '0', '5', '0', '245', 2),
// //             ('tall, '345', '0', '0', '150', '0', '100',3),
// //             ('tall, '265', '9', '8', '115', '29', '150', 4),
// //             ('tall, '125', '6', '3', '58', '11', '150', 5);
// //     `;

// //   await prisma.$queryRaw`
// //   SELECT  n.id
// //         , n.serving_size
// //         , n.kcal
// //         , n.fat
// //         , n.protein
// //         , n.natrium
// //         , n.sugars
// //         , n.caffeine
// //         , n.drink_id
// //   FROM  nutritions n
// //       , drinks d
// //   WHERE n.drink_id = d.id;
// //   `;

// //   res.json(nutrition);
// // })

// app.post('/users', async (req, res) => {
//   for(let key in req.body.users){
//   const { email, password, user_name, address, phone_number, policy_agreed } = req.body.users[key];
//   const user = await prisma.$queryRaw`
//   INSERT INTO users (email, password, user_name, address, phone_number, policy_agreed)
//   VALUES  (${email}, ${password}, ${user_name}, ${address}, ${phone_number}, ${policy_agreed});
//   `;

//   res.json(user);
//   }
// });

app.get('/', (req, res) => res.send('엄커풀'));

const server = http.createServer(app);

server.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});