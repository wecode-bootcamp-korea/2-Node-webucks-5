import express from 'express';
import { categoryController } from '../controllers';

const categoryRouter = express.Router();

categoryRouter.get('/', categoryController.getCategoryList);
categoryRouter.get('/:id', categoryController.getCategoryById);

export default categoryRouter;
