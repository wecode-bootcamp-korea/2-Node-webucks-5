import prisma from '../prisma/index.js';

const joinUser = async () => {
  console.log('userdao hello1')
  for(let key in req.body.users){
  const { email, password, user_name, address, phone_number, policy_agreed } = req.body.users[key];
  return await prisma.$queryRaw`
  INSERT INTO users (email, password, user_name, address, phone_number, policy_agreed)
  VALUES  (${email}, ${password}, ${user_name}, ${address}, ${phone_number}, ${policy_agreed});
  `;
}}

export default {
  joinUser
}


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
