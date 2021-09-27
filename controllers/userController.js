import { userService } from '../services';

const getUserInfoList = async (req, res) => {
  const userInfoList = await userService.getUserInfoList();
  res.json(userInfoList);
};

const getUserInfoByEmail = async (req, res) => {
  const email = req.body.email;
  const userInfo = await userService.getUserInfoByEmail(email);
  res.json(userInfo);
};

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  res.json(result);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.login(email, password);
  res.json(result);
};

export default { getUserInfoList, getUserInfoByEmail, createUser, login };
