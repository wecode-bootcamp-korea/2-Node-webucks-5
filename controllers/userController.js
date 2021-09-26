import userService from "../services/userService.js";

const joinUser = async (req, res) => {
  console.log('userService hello1');
  const users = await userService.joinUser();
  res.json(users);
}

export default {
  joinUser
}