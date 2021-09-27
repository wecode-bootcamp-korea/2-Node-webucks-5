import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.get('/', userController.getUserInfoList); // 전체 사용자 조회
router.post('/profile', userController.getUserInfoByEmail); // 나의 정보 조회
router.post('/register', userController.createUser); // 신규 회원 등록
router.post('/login', userController.login); // 로그인

export default router;
