import userDao from '../Models/userDao';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createUser = async userData => {
  const { email, password, username, address, phone_number, policy_agreed } =
    userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userDataWithHashedPassword = {
    email,
    hashedPassword,
    username,
    address,
    phone_number,
    policy_agreed,
  };
  return await userDao.createUser(userDataWithHashedPassword);
};

const isExistUser = async userData => {
  const { email } = userData;
  const usersEmail = await userDao.getUserEmail();
  return usersEmail.find(user => user.email === email);
};

const isValidPassword = async userData => {
  const { email, password } = userData;
  const userEmailAndPassword = await userDao.getEmailAndPassword();
  const userToLogin = userEmailAndPassword.filter(user => user.email === email);
  if (userToLogin.length === 0) {
    throw new Error('해당하는 아이디가 없습니다');
  } else {
    return await bcrypt.compare(password, userToLogin[0].password);
  }
};

const createToken = userData => {
  const { email } = userData;
  const secret = '5J#wHA&jAbTmdRcaYPGu8s83Mc0vtf#w';
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

export default {
  createUser,
  isExistUser,
  isValidPassword,
  createToken,
};
