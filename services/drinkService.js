import drinkDao from '../models/drinkDao.js'

const getAllDrinks = async () => {
  console.log('drinkDao hello')
  const drinks = await drinkDao.getAllDrinks();
  return drinks;
}

const getDrinkDetail = async () => {
  const drinks = await drinkDao.getDrinkDetail();
  return drinks;
}

export default{
  getAllDrinks, getDrinkDetail
}