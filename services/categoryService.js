import { categoryDao } from '../models';

const getCategories = async () => {
  return await categoryDao.getCategories();
};

const getCategoryByName = async (name) => {
  return await categoryDao.getCategoryByName(name);
}

export default {
  getCategories,
  getCategoryByName
};