import { ERROR_CODE } from "../Error.js";
import userService from "../services/userService.js";

const getUserInfo = async (req, res) => {
  const users = await userService.getUserInfo(req.body);
  res.json(users);
}

const signUpUser = async (req, res) => {
  let msg = {};
  try{
  const users = await userService.signUpUser(req.body);
  switch(users){
    case ERROR_CODE.FALSE:
      msg = { msg : 'insert 실패'}
    break;
    case ERROR_CODE.TRUE:
      msg = { msg: '회원가입이 되었습니다.' }
    break;
    case ERROR_CODE.EMAIL_ERROR:
      msg ={ msg: '이메일 오류'}
    break;
    default:
      msg = { msg: '띠용'}
    break;
  }
  } catch(e){
    msg = { msg: e}
  }
  res.json(msg);
}

const userLogin = async (req, res) => {
  const users = await userService.userLogin(req.body.email, req.body.password);

  res.json(users);
}

export default {
  signUpUser, getUserInfo, userLogin
}