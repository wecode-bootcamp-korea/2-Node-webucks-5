import Service from '../services';

const getUserInfo = async (req, res) => {
  const getUserInfo = await Service.userService.getUserInfo()
  res.json(getUserInfo);
};

const createUser = async (req, res) => {
  const {email, password, user_name, address, phone_number, policy_agreed} = req.body;
  const createUser = await Service.userService.createUser(email, password, user_name, address, phone_number, policy_agreed)
  res.json(createUser);
};

export default {
  getUserInfo,
  createUser
};