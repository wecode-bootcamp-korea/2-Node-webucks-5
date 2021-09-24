import { categoryService } from '../services';

const getCategoryList = async (req, res) => {
  const categoryList = await categoryService.getCategoryList();
  res.json(categoryList);
};

const getCategoryById = async (req, res) => {
  const id = req.params.id;
  const categoryInfo = await categoryService.getCategoryById(id);
  res.json(categoryInfo);
};

export default { getCategoryList, getCategoryById };
