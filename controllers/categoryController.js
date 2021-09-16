import CategoryService from '../services/categoryService';

const categoryService = new CategoryService();

export default class CategoryController {
  getCategoryList = async () => {
    return await categoryService.getCategoryList();
  };

  getCategoryById = async _id => {
    return await categoryService.getCategoryById(_id);
  };
}
