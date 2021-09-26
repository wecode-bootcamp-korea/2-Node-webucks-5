import userDao from "../models/userDao.js";

const joinUser = async () => {
  console.log('drinkservice hello1')
  const users = await userDao.joinUser();
  return users;
}

export default {
  joinUser
}