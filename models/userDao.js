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
  const [getAllUserInfo] = await prisma.$queryRaw`
    SELECT  u.email
          , u.password
          , u.user_name
          , u.address
          , u.phone_number
          , u.policy_agreed
    FROM  users u;
  `;
  return getAllUserInfo;
};

const checkUserEmail = async (email) => {
  const [checkUserEmail] = await prisma.$queryRaw`
    SELECT  u.email
    FROM  users u
    WHERE u.email = ${email};
  `;
  return checkUserEmail
}

const userLogin = async (email) => {
  const [userLogin] = await prisma.$queryRaw`
    SELECT  u.email
          , u.password
    FROM  users u
    WHERE u.email = ${email}
    LIMiT 1
  `;
  return userLogin
}

export default {
  createUser,
  getAllUserInfo,
  checkUserEmail,
  userLogin
};