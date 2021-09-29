import { userDao } from '../models';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllUserInfo = async () => {
  return await userDao.getAllUserInfo()
};

const createUser = async (userData) => {
  const { email, password } = userData;
  if(!email.includes('@')) {
    const err = new Error ("이메일 형식이 올바르지 않습니다.")
    err.statusCode= 400;
    err.message = "이메일 형식이 올바르지 않습니다."
    throw err
  }
  const matchData = await userDao.checkUserEmail(email);
  const [match] = matchData
  if(match == undefined){
    userData.password = await bcrypt.hash(password, 10);
    await userDao.createUser(userData);
    return match;
  }else{
    return email;
  }
};

const userLogin = async (email, password) => {
  const getDbInfo = await userDao.userLogin(email)
  const [DbInfo] = getDbInfo
  if(DbInfo !== undefined){
    const comparePw = await bcrypt.compare(password, DbInfo.password);
  if(comparePw){
    return jwt.sign(DbInfo.email, process.env.JWT_SECRET);
  }  
  }
};

export default {
  getAllUserInfo,
  createUser,
  userLogin
};

