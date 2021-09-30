import { userDao } from '../models';
import bcrypt from "bcryptjs";

const findAllUsers = async () => {
  const users = await userDao.findAllUsers();
  return users;
};

const createUser = async (userInput) => {
  const { email, password } = userInput;

  if (email === undefined || email === "") {
    const err = new Error("이메일을 입력해주세요.");
    err.statusCode = 400;
    throw err;
  }

  if (password === undefined || password === "") {
    const err = new Error("비밀번호를 입력해주세요.");
    err.statusCode = 400;
    throw err;
  }

  const userInfoFromDb = await userDao.getUserInfo(email);
  const hash = await bcrypt.hash(password, 10);
  userInput.password = hash;
  
  if (userInfoFromDb !== undefined) {
    const err = new Error("중복된 이메일입니다.");
    err.statusCode = 400;
    throw err;
  }
  return await userDao.createUser(userInput);
};

const logIn = async (userInput) => {
  const { email, password } = userInput;
  const userInfoFromDb = await userDao.getUserInfo(email);
    
  if (userInfoFromDb === undefined) {
    const err = new Error("가입된 이메일이 아닙니다.");
    err.statusCode = 400;
    throw err;
  }

  const validPw = await bcrypt.compare(password, userInfoFromDb.password);

  if (!validPw) {
    const err = new Error("비밀번호가 틀렸습니다.");
    err.statusCode = 400;
    throw err;
  }
};

export default { findAllUsers, createUser, logIn };
