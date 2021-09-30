import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.get('/', userController.getUserInfo)
userRouter.post('/signup', userController.signUpUser)
userRouter.post('/login', userController.userLogin)

export default userRouter;