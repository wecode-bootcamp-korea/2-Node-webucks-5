import express from 'express';
const router = express.Router();

import categoryRouter from './categoryRouter';
import drinkRouter from './drinkRouter';
import userRouter from './userRouter';

router.use('/categories', categoryRouter);
router.use('/drinks', drinkRouter);
router.use('/users', userRouter);

export default router;