import express from 'express';
import { userController } from '../controllers';

const Route = express.Router();

Route.get('/user', userController.getAllUserInfo);
Route.post('/user/create', userController.createUser);
Route.post('/user/login', userController.userLogin);

export default Route;