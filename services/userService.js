import { userDao } from '../models';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllUserInfo = async () => {
  return await userDao.getAllUserInfo()
};

const createUser = async (userData) => {
  const { email, password } = userData;
  const DbUserDataKeys = Object.getOwnPropertyNames(await userDao.getAllUserInfo())
  const userDataKeys = Object.getOwnPropertyNames(userData)
  const isValidUserData = JSON.stringify(DbUserDataKeys) === JSON.stringify(userDataKeys) 
  if(!isValidUserData) {
    const err = new Error ("INVALID_OBJECT_KEYS");
    err.statusCode = 400;
    err.message = "INVALID_OBJECT_KEYS";
    throw err;
  }
  if(!email.includes('@')) {
    const err = new Error ("INVALID_EMAIL_FORMAT");
    err.statusCode = 400;
    err.message = "INVALID_EMAIL_FORMAT";
    throw err;
  }
  const matchData = await userDao.checkUserEmail(email);
  if(matchData !== undefined) {
    const err = new Error ("EMAIL_ALREADY_EXISTS");
    err.statusCode = 400;
    err.message = "EMAIL_ALREADY_EXISTS";
    throw err
  }
  if(matchData == undefined) {
    userData.password = await bcrypt.hash(password, 10);
    await userDao.createUser(userData);
    return matchData;
  }
};//에러처리 추가 리팩토링 필요

const userLogin = async (email, password) => {
  const getDbInfo = await userDao.userLogin(email)
  if(getDbInfo == undefined) {
    const err = new Error ("CAN_NOT_FOUND_EMAIL");
    err.statusCode = 401;
    err.message = "CAN_NOT_FOUND_EMAIL";
    throw err;
  }
  if(getDbInfo !== undefined) {
    const comparePw = await bcrypt.compare(password, getDbInfo.password);
  if(comparePw) {
    return jwt.sign(getDbInfo.email, process.env.JWT_SECRET);
  }  
  }
};//에러처리 추가 리팩토링 필요

export default {
  getAllUserInfo,
  createUser,
  userLogin
};

