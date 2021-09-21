import express from 'express';
import Controller from '../controllers';

const Route = express.Router();

Route.get('/category', Controller.categoryController.getCategory);
Route.post('/category/create', Controller.categoryController.createCategory);

export default Route;