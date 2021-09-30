import userService from "../services/userService.js";

const getUserInfo = async (req, res) => {
  const users = await userService.getUserInfo();
  res.json(users);
}

const signUpUser = async (req, res) => {
  const users = await userService.signUpUser(req.body);
  res.json(users);
}

const userLogin = async (req, res) => {
  const users = await userService.userLogin(req.body);
  res.json(users);
}

export default {
  signUpUser, getUserInfo, userLogin
}