import express from 'express';
import categoryController from '../controllers/categoryController.js';

const categoryRouter = express.Router()

categoryRouter.get('/', categoryController.getAllCategories)
categoryRouter.post('/new-category', categoryController.createCategory)

export default categoryRouter;