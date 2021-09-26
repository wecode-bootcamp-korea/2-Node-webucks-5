import userDao from "../Models/userDao";

const createUser = async (
  email,
  password,
  username,
  address,
  phone_number,
  policy_agreed
) => {
  return await userDao.createUser(
    email,
    password,
    username,
    address,
    phone_number,
    policy_agreed
  );
};

const isExistUser = async (email) => {
  const usersEmail = await userDao.getUserEmail();
  const isEmailAlreadyTaken = usersEmail.find(user => user.email === email);
  return await isEmailAlreadyTaken;
};

export default { createUser, isExistUser };
