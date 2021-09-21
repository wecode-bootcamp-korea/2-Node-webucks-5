app.post("/categorie", async (req, res) => {
  const category = await prisma.$queryRaw`
  INSERT INTO categories (name)
  VALUES ('coldbrew'),
         ('brewed');
          `;

  res.json({ message: 'categories res SUCCESS'});
});