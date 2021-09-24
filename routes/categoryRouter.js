import express from 'express';
import categoryController from '../controllers/categoryController';

const router = express.Router()

router.get('/categories', categoryController.getAllCategories) // '/products' 핸들링 하는 컨트롤러 함수
router.post('/new-category', categoryController.createCategory)

module.exports = router // 이렇게 내보내면 부모 router 에 자동으로 연결됩니다.