app.post("/allergie", async (req, res) => {
  const allergy = await prisma.$queryRaw`
  INSERT INTO allergies (name)
  VALUES  ('우유'),
          ('대두');
          `;

  res.json({ message: 'allergies res SUCCESS'});
});