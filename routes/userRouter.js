import express from 'express';
import userController from '../controllers/userController';
const Router = express.Router();

Router.post('/signup', userController.createUser);
Router.post('/login', userController.loginUser);

export default Router;
