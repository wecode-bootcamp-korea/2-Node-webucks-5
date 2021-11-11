import userDao from "../models/userDao.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import express from "express";
import { ERROR_CODE } from "../Error.js";

const getUserInfo = async () => {
  return await userDao.getUserInfo();
}

const getUserEmailInfo = async email => {
  return await userDao.getUserEmailInfo(email)
}

const signUpUser = async (user) => {
  const { email, password } = user;

  if(email === undefined  || email === ""){
    return {msg : '이메일입력'}
  }
  if(password === undefined || password ===""){
    return {msg : '비번입력'}
  }

  let userEmailInspection = [];
  userEmailInspection = await userDao.getUserEmailInfo(email);
  const pwHash = await bcrypt.hash(password, 10);
  user.password = pwHash;

  if(userEmailInspection.length > 0){
    return ERROR_CODE.EMAIL_ERROR
  }

  return await userDao.signUpUser(user) ? ERROR_CODE.TRUE : ERROR_CODE.FALSE;
}

const userLogin = async (email, password) => {
  const tF = checkUser(email, password);
  if(tF){
  return jwt.sign({ id:2 }, 'server_made_secret_key', { expiresIn: '1h' })
  }else{
    return ERROR_CODE.FALSE;
  }
}

const checkUser = async (email, password) => {
  const pwHash = await bcrypt.hash(password, 10);
  const user = await userDao.userLogin(email);
  let match =3;
    await bcrypt.compare(pwHash, user[0].password).then((result) => {
    if (result) console.log(password, result, 'password is valid');
    else console.log(password, result, 'password is invalid');
    console.log('pwHash', pwHash);
    console.log('user[0].password', user[0].password)
    match = result;
  });
  console.log('match', match)
  return match;
};

export default {
  signUpUser, getUserInfo, userLogin, getUserEmailInfo
}
