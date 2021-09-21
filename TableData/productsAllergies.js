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