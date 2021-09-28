import userDao from '../Models/userDao';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import dotenv from 'dotenv';
dotenv.config();

const convertToHashedPassword = password => {
  return bcrypt.hash(password, 10);
};

const isExistUser = async email => {
  const usersEmail = await userDao.getUserEmail();
  return !!usersEmail.filter(user => user.email === email).length;
};

const validateData = async userData => {
  if (!userData.email || !userData.password) {
    throw new Error(`email & password can't not be blank`);
  }
  if (!validator.isEmail(userData.email)) {
    throw new Error('please check email type');
  }
  if (await isExistUser(userData.email)) {
    throw new Error('the email is alread taken!');
  }
  if (!userData.policyAgreed) {
    throw new Error('please agree with private policy');
  }
  if (userData.password !== validator.trim(userData.password)) {
    throw new Error(`password can't contain blank`);
  }
};

const createUser = async userData => {
  const { email, password, username, address, phoneNumber, policyAgreed } =
    userData;
  await validateData(userData);
  const hashedPassword = await convertToHashedPassword(password);
  const userDataWithHashedPassword = {
    email,
    hashedPassword,
    username,
    address,
    phoneNumber,
    policyAgreed,
  };
  return await userDao.createUser(userDataWithHashedPassword);
};

const isValidUser = async userData => {
  const { email, password } = userData;
  const userEmailAndPassword = await userDao.getEmailAndPassword();
  const userToLogin = userEmailAndPassword.filter(user => user.email === email);
  if (userToLogin.length === 0) {
    throw new Error('this email does not exist');
  } else {
    return await bcrypt.compare(password, userToLogin[0].password);
  }
};

const createToken = userData => {
  const { email } = userData;
  const secret = process.env.SECRET;
  const access_token = jwt.sign(
    {
      email,
      isAdmin: false,
    },
    secret,
    { expiresIn: '1h' },
  );
  return access_token;
};

const loginUser = async userData => {
  if (!(await isValidUser(userData))) {
    throw new Error('wrong password');
  }
  return createToken(userData);
};

export default {
  createUser,
  isExistUser,
  isValidUser,
  createToken,
  loginUser,
};
