import express from 'express';
import CategoryController from '../controllers/categoryController';

const router = express.Router();
const categoryController = new CategoryController();

router.get('/', async (req, res) => {
  const categoryList = await categoryController.getCategoryList();
  res.send(categoryList);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const category = await categoryController.getCategoryById(id);
  res.send(category);
});

module.exports = router;
