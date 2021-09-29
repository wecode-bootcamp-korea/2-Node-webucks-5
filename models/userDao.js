import prisma from '../prisma';

const createUser = async (userData) => { 
  const { email, password, user_name, address, phone_number, policy_agreed } = userData;
  return await prisma.$queryRaw`
    INSERT INTO users (
                  email
                , password
                , user_name
                , address
                , phone_number
                , policy_agreed
                )
    VALUES( ${email}
          , ${password}
          , ${user_name}
          , ${address}
          , ${phone_number}
          , ${policy_agreed}
          );
  `;
};

const getAllUserInfo = async () => {
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
    SELECT  u.email
          , u.password
    FROM  users u
    WHERE u.email = ${email}
  `;
}

export default {
  createUser,
  getAllUserInfo,
  checkUserEmail,
  userLogin
};