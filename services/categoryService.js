import { categoryDao } from '../models';

const getCategoryList = async () => {
  const categoryList = await categoryDao.getCategoryList();
  return categoryList;
};

const getCategoryById = async id => {
  const [category] = await categoryDao.getCategoryById(id);
  return category;
};

export default { getCategoryList, getCategoryById };
