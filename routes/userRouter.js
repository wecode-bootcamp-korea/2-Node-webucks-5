import express from 'express';
import { userController } from '../controllers';
const Router = express.Router();

Router.post('/signup', userController.createUser);
Router.post('/login', userController.loginUser);
Router.get('/test', userController.testToken);

export default Router;
