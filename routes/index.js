import express from 'express';
import categoryRouter from '../routes/categoryRouter.js';
import drinkRouter from '../routes/drinkRouter.js';
import userRouter from '../routes/userRouter.js'

const router = express.Router();

router.get('/', (req, res) => res.send('오류좀 그만...'));
router.use('/categories', categoryRouter);
router.use('/drinks', drinkRouter);
router.use('/users', userRouter);


export default router