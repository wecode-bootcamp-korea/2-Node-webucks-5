import categoryService from '../services/categoryService.js';

const getAllCategories = async (req, res) => {
  console.log('cont hello1')
  const categories = await categoryService.getAllCategories();
  res.json(categories);
}

const createCategory = async (req, res) => {
  const { category_name } = req.body
  const categories = await categoryService.createCategory(category_name);
  res.json(categories);
}

export default {
  getAllCategories, createCategory
};