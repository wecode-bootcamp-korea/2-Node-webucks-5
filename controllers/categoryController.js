import Service from '../services';

const getCategory = async (req, res) => {
  const getCategory = await Service.categoryService.getCategory()
  res.json(getCategory);
};

const createCategory = async (req, res) => {
  const createCategory = await Service.categoryService.createCategory()
  res.json(createCategory);
};

export default {
  getCategory,
  createCategory
};