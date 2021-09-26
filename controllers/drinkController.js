import drinkService from '../services/drinkService.js'

const getAllDrinks = async (req, res) => {
  console.log('drinkcont hello1')
  const drinks = await drinkService.getAllDrinks();
  res.json(drinks);
}

const getDrinkDetail = async (req, res) => {
  const drinks = await drinkService.getDrinkDetail();
  res.json(drinks);
}

export default {
  getAllDrinks, getDrinkDetail
}