import userDao from "../models/userDao.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

const getUserInfo = async () => {
  return await userDao.getUserInfo();
}

const signUpUser = async (user) => {
  const pwHash = await bcrypt.hash(user.password, 10)
  user.password = pwHash;
  return await userDao.signUpUser(user);
}

const userLogin = async (user) => {
  // const makeToken = jwt.sign({ id:2 }, 'server_made_secret_key', { expiresIn: '1h' })

  return await userDao.userLogin(user);
}

export default {
  signUpUser, getUserInfo, userLogin
}

// const saltRounds = 10;
// const plainTextPassword1 = 'asdf1234';
// // const plainTextPassword2 = 'qwer1234';
// const password = 'asdf1234';

// const createDigest = (password, rounds) =>
//   bcrypt.hash(password, rounds, (err, hash) => {
//   });

// createDigest(plainTextPassword1, saltRounds);

// const checkUser = async (password, hash) => {
//   const match = await bcrypt.compare(password, hash).then((result) => {
//     if (result) console.log(password, 'password is valid');
//     else console.log(password, 'password is invalid');
//     return result;
//   });
//   console.log(match);

//   //   if(match) login success;
// };

// checkUser(plainTextPassword1, hash);





// const validPassword = await bcrypt.compare(req.body.password, user.password);

// if (!validPassword) {

//     return res.status(400).send('이메일이나 비밀번호가 올바르지 않습니다.');
