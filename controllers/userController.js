import { userService } from '../services';

const getAllUserInfo = async (req, res) => {
  try{
    const getAllUserInfo = await userService.getAllUserInfo()
    res.status(200).json(getAllUserInfo);
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
    res.status(201).json ({
      message: 'SIGN_UP_SUCCESS'
    })}
  }
  catch(err) {
    const { statusCode, message } = err
    res.status(statusCode || 500).json({
      message
    });
  };
};

const userLogin = async (req, res) => {
  try{
    const { email, password } = req.body;
    const token = await userService.userLogin(email, password);
  if(token == undefined) { 
    res.status(401).json ({
      message: 'INVALID_EMAIL_OR_PASSWORD'
    })} else {
    res.status(200).json({
        message: 'LOGIN_SUCCESS'
      })
    res.cookie ('token', token)
  }
  } 
  catch(err) {
    const { statusCode, message } = err
    res.status(statusCode || 500).json({
      message
    })
  };
};
 
export default {
  getAllUserInfo,
  createUser,
  userLogin
};