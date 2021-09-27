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
  return await prisma.$queryRaw`
    SELECT
      u.email, 
      u.password
    FROM
      users u
    WHERE
      u.email = ${email}
  `;
};

const createUser = async (email, hash, username, address, phone_number, policy_agreed) => {
  return await prisma.$queryRaw`
    INSERT INTO
      users(
        email,
        password,
        username,
        address,
        phone_number,
        policy_agreed
      )
    VALUES (
      ${email},
      ${hash},
      ${username},
      ${address},
      ${phone_number},
      ${policy_agreed}
    )
  `;
};

export default { findAllUsers, createUser, getUserInfo };
