import categoryService from '../services/categoryServices';

const getAllCategories = async (req, res, next) => {
  console.log('hello')
	try {
		const categories = await categoryService.getAllCategories();
	} catch (err) {
		next(err)
	}
}

const createCategory = async (req, res, next) => {
  console.log('hello')

  try {
    const { category_name } = req.body
    const categories = await categoryService.createCategory(category_name);
  } catch (err) {
    next(err)
  } 
}

// const findCoffeeCategory = async (req, res, next) => {
//   console.log('hello')

//   try {
//     // const { category_name } = req.body
//     const categories = await categoryService.findCoffeeCategory(category_name);
    
//     res.status(200).json({
//       message: 'true',
//       category_id: categories.id,
//     })
//   } catch (err) {
//     next(err)
//   }
// }

module.exports = {
  getAllCategories, createCategory
}



// const getCategory = async (req, res) => {
//   const category = await categoryService.getCategory();
//   res.json(category);
// };

// const setCategory = async (req, res) => {
//   const category = await categoryService.setCategory();
//   res.json(category);
// };

