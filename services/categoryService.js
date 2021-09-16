import CategoryDao from '../models/categoryDao';

const categoryDao = new CategoryDao();

export default class CategoryService {
  getCategoryList = async () => {
    const categoryList = await categoryDao.getCategoryList();
    return JSON.stringify(categoryList);
  };

  getCategoryById = async _id => {
    const [category] = await categoryDao.getCategoryById(_id);
    return JSON.stringify(category);
  };
}
