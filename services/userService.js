import { userDao } from '../models';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const getUserInfoList = async () => {
  return await userDao.getUserInfoList();
};

const getUserInfoByEmail = async email => {
  const [userInfo] = await userDao.getUserInfoByEmail(email);
  return userInfo;
};

const createUser = async bodyObject => {
  const email = bodyObject.email;
  const [userInfo] = await userDao.getUserInfoByEmail(email);

  if (userInfo !== undefined) {
    return { msg: '중복된 이메일입니다. 다른 이메일을 입력해주세요.' };
  } else {
    const pw = bodyObject.password;
    bodyObject.password = await bcryptjs.hash(pw, 15);
    // bodyObject.password = await bcryptjs.hash(pw, process.env.PASSWORD_SALT);

    try {
      await userDao.createUser(bodyObject);
      return { msg: '정상적으로 등록되었습니다.' };
    } catch (error) {
      return {
        msg: '회원 등록을 실패하였습니다.',
        error: error,
      };
    }
  }
};

const login = async (email, password) => {
  const [userInfo] = await userDao.getUserInfoByEmail(email);

  if (userInfo === undefined) {
    return { msg: '이메일이 존재하지 않습니다.' };
  } else {
    const isValid = await bcryptjs.compare(password, userInfo.password);
    if (isValid) {
      const id = userInfo.id;
      const token = jwt.sign({ id: id }, process.env.ACCESS_TOKEN_SIGN, {
        expiresIn: 3600,
      });
      return { msg: '로그인 성공', token: token };
    } else {
      return { msg: '비밀번호가 일치하지 않습니다.' };
    }
  }
};

export default { getUserInfoList, getUserInfoByEmail, createUser, login };
