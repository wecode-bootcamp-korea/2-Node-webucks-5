import express from 'express';
import Controller from '../controllers';

const Route = express.Router();


Route.get('/product/', Controller.productController.productList);
Route.get('/product/detail', Controller.productController.productDetail);
Route.get('/product/detail/:id', Controller.productController.productDetailById);
Route.post('/product/create', Controller.productController.createProduct);

export default Route;