import Dao from '../models';

const getUserInfo = async () => {
  return await Dao.userDao.getUserInfo()
};

const createUser = async (email, password, user_name, address, phone_number, policy_agreed) => {
  return await Dao.userDao.createUser(email, password, user_name, address, phone_number, policy_agreed)
};

export default {
  getUserInfo,
  createUser
};