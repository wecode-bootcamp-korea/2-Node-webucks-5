import { categoryDao } from '../models';

const getCategoryList = async () => {
  const categoryList = await categoryDao.getCategoryList();
  return categoryList;
};

export default { getCategoryList };