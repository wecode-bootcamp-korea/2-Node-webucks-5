import { userService } from '../services';

const getAllUserInfo = async (req, res) => {
  try{
    const getAllUserInfo = await userService.getAllUserInfo()
    res.json(getAllUserInfo);
  }
  catch(err) {
    console.error(err);
  };
};

const createUser = async (req, res) => {
 try{
    const userData = req.body;
    const createUser = await userService.createUser(userData);  
  if(createUser == undefined) {
    res.json ({
      message: '회원가입 성공'
    })} else {
    res.json ({
      message: '이미 사용중인 이메일 입니다.'
    })
  };
  }
  catch(err) {
    console.error(err);
  };
};

const userLogin = async (req, res) => {
  try{
    const {email, password} = req.body;
    const token = await userService.userLogin(email, password);
  if(token == undefined){ 
    res.json ({
      message: '이메일 혹은 비밀번호가 일치하지 않습니다.'
    })} else {
    res.json({
        message: '로그인 성공'
      })
    res.cookie ('token', token)
  }
  } 
  catch(err) {
    console.error(err);
  };
};
 
export default {
  getAllUserInfo,
  createUser,
  userLogin
};