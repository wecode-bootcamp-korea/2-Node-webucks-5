import express from 'express';
import categoryRouter from './categoryRouter.js';
import drinkRouter from './drinkRouter.js';
import userRouter from './userRouter.js';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello !'));
router.use('/categories', categoryRouter);
router.use('/drinks', drinkRouter);
router.use('/users', userRouter);

export default router;
