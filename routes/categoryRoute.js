import express from 'express';
import { categoryController } from '../controllers';

const Route = express.Router();

Route.get('/category', categoryController.getCategories);
Route.get('/category/:name', categoryController.getCategoryByName);

export default Route;
