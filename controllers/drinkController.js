import drinkService from '../services/drinkService.js'

const getAllDrinks = async (req, res) => {
  const drinks = await drinkService.getAllDrinks();
  res.json(drinks);
}

const getDrinkById = async (req, res) => {
  const id = req.params.id;
  const drinks = await drinkService.getDrinkById(id);
  res.json(drinks);
}

export default {
  getAllDrinks, getDrinkById
}