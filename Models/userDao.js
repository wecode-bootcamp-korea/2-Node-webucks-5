import prisma from '../prisma/index';

const createUser = async userData => {
  const {
    email,
    hashedPassword,
    username,
    address,
    phoneNumber,
    policyAgreed,
  } = userData;
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
        ${hashedPassword},
        ${username},
        ${address},
        ${phoneNumber},
        ${policyAgreed})
  `;
};

const getUserEmail = async () => {
  return await prisma.$queryRaw`
    SELECT u.email
    FROM users u
  `;
};

const getEmailAndPassword = async () => {
  return await prisma.$queryRaw`
  SELECT u.email,
         u.password
  FROM users u
  `;
};

export default { createUser, getUserEmail, getEmailAndPassword };
