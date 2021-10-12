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

const getUserEmailInfo = async email => {
  return await prisma.$queryRaw`
  SELECT
      u.email
  FROM
      users u
  WHERE
      email = ${email}
  `;
}

const signUpUser = async (user) => {
  const { email, password, user_name, address, phone_number} = user;
  return await prisma.$queryRaw`
  INSERT INTO users (email, password, user_name, address, phone_number, policy_agreed)
  VALUES  (${user.email}, ${user.password}, ${user.user_name}, ${user.address}, ${user.phone_number}, ${user.policy_agreed});
  `;
}

const userLogin = async (email) => {
  return await prisma.$queryRaw`
  SELECT
      u.email
    , u.password
  FROM  users u
  WHERE email = ${email}
  `;
}

export default { 
  signUpUser, getUserInfo, userLogin, getUserEmailInfo
}