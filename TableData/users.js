app.post("/user", async (req, res) => {

  const {email, password, user_name, address, phone_number, policy_agreed} = req.body;
  
  const createUser = await prisma.$queryRaw`
  INSERT INTO users(email, password, user_name, address, phone_number, policy_agreed)
  VALUES  (${email}, ${password}, ${user_name}, ${address}, ${phone_number}, ${policy_agreed});
          `;
  
  return res.status(201).json({message: 'Welcome!'})
  
})