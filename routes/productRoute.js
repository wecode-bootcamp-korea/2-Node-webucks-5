import express from 'express';
import { productController } from '../controllers';

const Route = express.Router();

Route.get('/product', productController.productList);
Route.get('/product/detail', productController.productsDetail);
Route.get('/product/detail/:id', productController.productDetailById);

export default Route;