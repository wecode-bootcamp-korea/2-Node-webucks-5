import express from 'express';
import categoryRouter from '../routes/categoryRouter';
// import drinkRouter from './drinkRouter';
// import userRouter from './userRouter';
// import nutritionRouter from './nutritionRouter';
// import allergyRouter from './allergyRouter';


// import getHome from '../controllers/indexController';

const router = express.Router() // express 라우팅 기능을 사용하기 위해서 router 객체가 필요합니다.


// router.get('/', getHome);
router.use('/categories', categoryRouter);
// router.use('/drink', drinkRouter);
// router.use('/user', userRouter);
// router.use('/allergy', allergyRouter);
// router.use('/nutrition', nutritionRouter);


// '/users' 엔드포인트를 처리하기 위해 UserRouter 를 붙여줍니다.

module.exports = router // 이렇게 내보낸 router 는 express app 의 미들웨어로 사용됩니다.