import express from 'express';
import { productController } from '../controllers';
const router = express.Router();

router.get('/list', productController.getProductList);
router.get('/detail/:id', productController.getProductDetail);
router.get('/category', productController.getCategory);

export default router;
