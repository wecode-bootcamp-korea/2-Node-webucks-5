import categoryDao from '../models/categoryDao.js';

const getAllCategories = async () => {
  const categories = await categoryDao.getAllCategories();
  return categories;
}

const getCategoryById = async id => {
  const [categories] = await categoryDao.getCategoryById(id);
  return categories;
}

const createCategory = async () => {
  const categories = await categoryDao.createCategory();
  return categories;
};

export default {
  getAllCategories, getCategoryById, createCategory
}


