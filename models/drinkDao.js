import prisma from "../prisma/index.js";

const getAllDrinks = async () => {
  console.log('drinkDao hello')
  return await prisma.$queryRaw`
  SELECT  d.id
        , d.korean_name
        , d.english_name
        , d.category_id
        , d.description
        , d.new
  FROM  drinks d
  JOIN  categories c
    ON  d.category_id = c.id;
  `;
}

const getDrinkDetail = async () => {
  return await prisma.$queryRaw`
  SELECT  n.id
        , n.serving_size
        , n.kcal
        , n.fat
        , n.protein
        , n.natrium
        , n.sugars
        , n.caffeine
        , n.drink_id
  FROM  nutritions n
      , drinks d
  WHERE n.drink_id = d.id;
  `;
}

export default {
  getAllDrinks, getDrinkDetail
}



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
