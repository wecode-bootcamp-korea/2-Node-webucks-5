import categoryDao from '../models/categoryDao.js';

const getAllCategories = async () => {
  console.log('service hello1')
  const categories = await categoryDao.getAllCategories();
  return categories;
}

const createCategory = async () => {
  console.log('service hello')
  const categories = await categoryDao.createCategory();
  return categories;
};

export default {
  getAllCategories, createCategory
}


