import drinkDao from '../models/drinkDao.js'

const getAllDrinks = async () => {
  const drinks = await drinkDao.getAllDrinks();
  return drinks;
}

const getDrinkById = async id => {
  const drinks = await drinkDao.getDrinkById(id);
  return drinks;
}

export default{
  getAllDrinks, getDrinkById
}