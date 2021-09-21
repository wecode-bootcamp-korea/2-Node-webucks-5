import { drinkDao } from '../models';

const getDrinkList = async () => {
  const drinkList = await drinkDao.getDrinkList();
  return drinkList;
};

const getDrinkDetail = async () => {
  const drinkDetail = await drinkDao.getDrinkDetail();
  return drinkDetail;
};

const getDrinkDetailById = async id => {
  const drinkDetailById = await drinkDao.getDrinkDetailById(id);
  return drinkDetailById;
};

export default { getDrinkList, getDrinkDetail, getDrinkDetailById };