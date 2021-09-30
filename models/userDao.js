import prisma from '../prisma/index.js';

const getUserInfo = async () => {
  return await prisma.$queryRaw`
  SELECT
      u.id
    , u.email
    , u.password
    , u.user_name
    , u.address
    , u.phone_number
    , u.policy_agreed
  FROM users u
  `;
}

const signUpUser = async (user) => {
  return await prisma.$queryRaw`
  INSERT INTO users (email, password, user_name, address, phone_number, policy_agreed)
  VALUES  (${user.email}, ${user.password}, ${user.user_name}, ${user.address}, ${user.phone_number}, ${user.policy_agreed});
  `;
}

const userLogin = async () => {
  return await prisma.$queryRaw`
  SELECT
      u.email
    , u.password
  FROM  users u
  `;
}

export default { 
  signUpUser, getUserInfo, userLogin
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
