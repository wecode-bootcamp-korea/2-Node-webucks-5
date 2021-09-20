import { userDao } from '../models';

const findAllUsers = async () => {
  return await userDao.findAllUsers();
};

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

export default { findAllUsers, createUser };