import prisma from '../prisma';

const getUserInfoList = async () => {
  return await prisma.$queryRaw`
    SELECT id
         , email
         , password
         , user_name
         , address
         , phone_number
         , policy_agreed
     FROM users
  ;`;
};

const getUserInfoByEmail = async email => {
  return await prisma.$queryRaw`
    SELECT id
         , email
         , password
         , user_name
         , address
         , phone_number
         , policy_agreed
     FROM users
    WHERE email = ${email}
  ;`;
};

const createUser = async bodyObject => {
  const { email, password, userName, address, phoneNumber, policyAgreed } =
    bodyObject;
  return await prisma.$queryRaw`
    INSERT INTO users
    (email, password, user_name, address, phone_number, created_at) 
    VALUES
    (${email}, ${password}, ${userName}, ${address}, ${phoneNumber}, ${new Date()});
  ;`;
};

export default { getUserInfoList, getUserInfoByEmail, createUser };
