import Dao from '../models';

const bcrypt = require('bcrypt');

const getUserInfo = async () => {
  return await Dao.userDao.getUserInfo()
};

const createUser = async (email, password, user_name, address, phone_number, policy_agreed) => {
  password = await bcrypt.hash(password, 10);
  const [ dbEmail ] = await Dao.userDao.checkUserEmail(email);
  if(dbEmail !== undefined) {
    return {
      message: '이미 사용중인 이메일 입니다.'
    }
  } else {
    await Dao.userDao.createUser(email, password, user_name, address, phone_number, policy_agreed);
    return {
      message: '회원가입 성공'
    }
  }
};

const userLogin = async (email, password) => {
  const getDbPw = await Dao.userDao.userLogin(email); // 이메일 매칭 후 같은 이메일이 존재하면 db의 패스워드를 반환받음
  const comparePw = await bcrypt.compare(password, getDbPw[0].password);
  console.log(password);
  console.log(getDbPw);
  console.log(comparePw);

  if( !comparePw ) {
    return {
      message: '이메일 혹은 비밀번호가 일치하지 않습니다.'
    }
  } else {
    await Dao.userDao.userLogin(email)
    return{
      message: '로그인 성공'
    }
  };
};

export default {
  getUserInfo,
  createUser,
  userLogin
};