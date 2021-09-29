import express from 'express';
import userRouter from './userRouter';
import productRouter from './productRouter';
const router = express.Router();

router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
