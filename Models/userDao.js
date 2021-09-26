import prisma from "../prisma/index";

const createUser = async (
  email,
  password,
  username,
  address,
  phone_number,
  policy_agreed
) => {
  return await prisma.$queryRaw`
  INSERT INTO 
    users (
        email, 
        password, 
        username, 
        address, 
        phone_number, 
        policy_agreed
        )
    VALUES (
        ${email}, 
        ${password}, 
        ${username}, 
        ${address}, 
        ${phone_number}, 
        ${policy_agreed})
  `;
};

const getUserEmail = async () => {
  return await prisma.$queryRaw`
    SELECT email
    FROM users
  `;
};

export default { createUser, getUserEmail };
