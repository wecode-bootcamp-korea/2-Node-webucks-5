import userService from '../services/userService';

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const isExistEmail = await userService.isExistUser(userData);
    if (!isExistEmail) {
      await userService.createUser(req.body);
      res.status(200).json({ message: 'sign up success' });
      return;
    } else {
      throw new Error('the email is already taken!');
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `sign up failed ${error.message}` });
  }
};

const loginUser = async (req, res) => {
  try {
    const userData = req.body;
    if (!(await userService.isValidPassword(userData))) {
      throw new Error('패스워드가 틀렸습니다');
    }
    const access_token = userService.createToken(userData);
    res.cookie('access_token', access_token, { httpOnly: true });
    res.status(200).json({ message: '로그인 성공' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `Login Failed ${error.message}` });
  }
};

export default { createUser, loginUser };
