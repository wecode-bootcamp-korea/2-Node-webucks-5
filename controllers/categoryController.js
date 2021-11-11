import categoryService from '../services/categoryService.js';

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  res.json(categories);
}

const getCategoryById = async (req, res) => {
  const id = req.params.id;
  const categories = await categoryService.getCategoryById(id);
  res.json(categories);
}

const createCategory = async (req, res) => {
  const { category_name } = req.body
  const categories = await categoryService.createCategory(category_name);
  res.json(categories);
}

export default {
  getAllCategories, getCategoryById, createCategory
};