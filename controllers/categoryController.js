import { categoryService } from '../services';

const getCategoryList = async (req, res) => {
  const categoryList = await categoryService.getCategoryList();
  res.json(categoryList);
};

export default { getCategoryList };