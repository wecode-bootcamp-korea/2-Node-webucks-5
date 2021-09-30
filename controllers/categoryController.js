import { categoryService } from '../services';

const getCategoryList = async (req, res) => {
  try {
    const categoryList = await categoryService.getCategoryList();
    res.json(categoryList);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "INTERNAL_SERVER_ERROR"
    })
  }
};

export default { getCategoryList };