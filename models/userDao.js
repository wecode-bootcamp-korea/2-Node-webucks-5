import prisma from "../prisma";

const findAllUsers = async () => {
  return await prisma.$queryRaw`
    SELECT
      u.id,
      u.email,
      u.password,
      u.username,
      u.address,
      u.phone_number,
      u.policy_agreed
    FROM
      users u
  `;
};

const getUserInfo = async (email) => {
  const [ userInfo ] = await prisma.$queryRaw`
    SELECT
      u.email, 
      u.password
    FROM
      users u
    WHERE
      u.email = ${email}
    LIMIT 1
  `;
  return userInfo;
};

const createUser = async (userData) => {
  return await prisma.$queryRaw`
    INSERT INTO users(
      email,
      password,
      username,
      address,
      phone_number,
      policy_agreed
    ) VALUES (
      ${userData.email},
      ${userData.password},
      ${userData.username},
      ${userData.address},
      ${userData.phone_number},
      ${userData.policy_agreed}
    )
  `;
};

export default { findAllUsers, createUser, getUserInfo };
