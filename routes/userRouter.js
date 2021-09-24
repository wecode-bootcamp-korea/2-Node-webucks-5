import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

let userInfo = {
  email: '',
  password: '',
  userName: '',
  address: '',
  phoneNumber: '',
  policyAgreed: '',
};

router.get('/', userController.getUserInfoList);
router.post('/profile', userController.getUserInfoByEmail);
router.post('/sign-in', userController.createUser);

export default router;
