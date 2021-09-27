import { userDao } from '../models';

const findAllUsers = async () => {
  return await userDao.findAllUsers();
};

const getUserInfoByEmail = async (email) => {
  return await userDao.getUserInfoByEmail(email);
};

const createUser = async (
  email, 
  hash, 
  username, 
  address, 
  phone_number, 
  policy_agreed
) => {
  return await userDao.createUser(
    email, 
    hash, 
    username, 
    address, 
    phone_number, 
    policy_agreed
  );
};

export default { findAllUsers, createUser, getUserInfoByEmail };
