import categoryDao from '../models/categoryDao';

const getAllCategories = () => {
  console.log('hello')
  const categories = await categoryDao.getAllCategories();
  return categories;
}

const createCategory = async () => {
  console.log('hello')
  const categories = await categoryDao.createCategory();
  return categories;
};

module.exports = {
  getAllCategories, createCategory
}


