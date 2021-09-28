import userService from '../services/userService';

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

export default { createUser, loginUser };
