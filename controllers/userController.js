import { userService } from '../services';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    await userService.createUser(userData);
    res.status(201).json({ message: 'CREATED' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `SIGNUP_FAILED: ${error.message}` });
  }
};

const loginUser = async (req, res) => {
  try {
    const userData = req.body;
    const access_token = await userService.loginUser(userData);
    res.cookie('access_token', access_token, { httpOnly: true });
    res.status(200).json({ message: 'LOGIN_SUCCESS' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `LOGIN_FAILED : ${error.message}` });
  }
};

const testToken = async (req, res) => {
  const userData = req.body;
  const access_token = await userService.loginUser(userData);

  console.log('access_token :', access_token);
  console.log('------------------------------------------------------');
  console.log('req cookie :', req.cookies);
  const isValid = jwt.verify(req.cookies.access_token, process.env.SECRET);
  console.log(isValid);
  res.send('message');
};

export default { createUser, loginUser, testToken };
