import { categoryService } from '../services';

const getCategories = async (req, res) => {
  try{
    const getCategories = await categoryService.getCategories();
    res.json(getCategories);
  }
  catch(err) {
    console.error(err);
  };
};

const getCategoryByName = async (req, res) => {
  try{
    const name = req.params.name;
    const getCategoryByName = await categoryService.getCategoryByName(name);
    res.json(getCategoryByName)
  }
  catch(err) {
    console.error(err);
  };
}

export default {
  getCategories,
  getCategoryByName
};