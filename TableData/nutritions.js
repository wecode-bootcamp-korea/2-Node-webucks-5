app.post("/nutrition", async (req, res) => {
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