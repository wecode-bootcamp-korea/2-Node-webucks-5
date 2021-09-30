import drinkDao from '../models/drinkDao.js'

const getAllDrinks = async () => {
  const drinks = await drinkDao.getAllDrinks();
  return drinks;
}

const getDrinkById = async id => {
  const drinks = await drinkDao.getDrinkById(id);
  return drinks;
}

export default{
  getAllDrinks, getDrinkById
}
// //--------------------------------------------------------------------
// import { userService } from '../services';

// const getUserInfoList = async (req, res) => {
//   const userInfoList = await userService.getUserInfoList();
//   res.json(userInfoList);
// };

// const getUserInfoByEmail = async (req, res) => {
//   const email = req.body.email;
//   const userInfo = await userService.getUserInfoByEmail(email);
//   res.json(userInfo);
// };

// const createUser = async (req, res) => {
//   const result = await userService.createUser(req.body);
//   res.json(result);
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;
//   const result = await userService.login(email, password);
//   res.json(result);
// };

// export default { getUserInfoList, getUserInfoByEmail, createUser, login };
// //--------------------------------------------------------------------

// const getUserInfoList = async () => {
//   return await prisma.$queryRaw`
//     SELECT id
//          , email
//          , password
//          , user_name
//          , address
//          , phone_number
//          , policy_agreed
//      FROM users
//   ;`;
// };

// const getUserInfoByEmail = async email => {
//   return await prisma.$queryRaw`
//     SELECT id
//          , email
//          , password
//          , user_name
//          , address
//          , phone_number
//          , policy_agreed
//      FROM users
//     WHERE email = ${email}
//   ;`;
// };

// const createUser = async bodyObject => {
//   const { email, password, userName, address, phoneNumber, policyAgreed } =
//     bodyObject;
//   return await prisma.$queryRaw`
//     INSERT INTO users
//     (email, password, user_name, address, phone_number, created_at) 
//     VALUES
//     (${email}, ${password}, ${userName}, ${address}, ${phoneNumber}, ${new Date()});
//   ;`;
// };