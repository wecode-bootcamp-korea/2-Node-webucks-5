import express from 'express';
import Controller from '../controllers';

const Route = express.Router();


Route.get('/', Controller.userController.getUserInfo);
Route.post('user/create', Controller.userController.createUser);

export default Route;