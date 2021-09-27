import prisma from '../prisma';

const createUser = async (email, password, user_name, address, phone_number, policy_agreed) => { 
  return await prisma.$queryRaw`
    INSERT INTO users(email, password, user_name, address, phone_number, policy_agreed)
    VALUES  (${email}, ${password}, ${user_name}, ${address}, ${phone_number}, ${policy_agreed})
  `;
};

const getUserInfo = async () => {
  return await prisma.$queryRaw`
    SELECT  u.email
          , u.password
          , u.user_name
          , u.address
          , u.phone_number
          , u.policy_agreed
    FROM  users u;
  `;
};

const checkUserEmail = async (email) => {
  return await prisma.$queryRaw`
    SELECT  u.email
    FROM  users u
    WHERE u.email = ${email};
  `;
}

const userLogin = async (email) => {
  return await prisma.$queryRaw`
    SELECT u.email, u.password
    FROM  users u
  `;
}

export default {
  createUser,
  getUserInfo,
  checkUserEmail,
  userLogin
};