import Dao from '../models';

const getCategory = async () => {
  return await Dao.categoryDao.getCategory()
};

const createCategory = async () => {
  return await Dao.categoryDao.createCategory()
};

export default {
  getCategory,
  createCategory
};