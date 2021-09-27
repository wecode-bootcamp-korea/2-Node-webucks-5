import express from 'express';
import Controller from '../controllers';

const Route = express.Router();

Route.get('/user', Controller.userController.getUserInfo);
Route.post('/user/create', Controller.userController.createUser);
Route.post('/user/login', Controller.userController.userLogin)

export default Route;