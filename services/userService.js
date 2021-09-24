import { userDao } from '../models';

const getUserInfoList = async () => {
  return await userDao.getUserInfoList();
};

const getUserInfoByEmail = async email => {
  return await userDao.getUserInfoByEmail(email);
};

const createUser = async bodyObject => {
  const email = bodyObject.email;
  const [userInfo] = await getUserInfoByEmail(email);
  if (userInfo !== undefined) {
    return {
      msgCd: '9999',
      msg: '중복된 이메일입니다. 다른 이메일을 입력해주세요.',
    };
  } else {
    await userDao.createUser(bodyObject);
    return {
      msgCd: '0000',
      msg: '정상적으로 등록되었습니다.',
    };
  }
};

export default { getUserInfoList, getUserInfoByEmail, createUser };
