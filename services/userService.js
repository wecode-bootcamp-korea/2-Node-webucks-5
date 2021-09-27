import { userDao } from '../models';

const findAllUsers = async () => {
  return await userDao.findAllUsers();
};

const getUserInfo = async (email) => {
  return await userDao.getUserInfo(email);
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

export default { findAllUsers, createUser, getUserInfo };
