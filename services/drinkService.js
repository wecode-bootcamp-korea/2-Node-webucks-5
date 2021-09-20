import { drinkDao } from '../models';

const getDrinkList = async () => {
  const drinkList = await drinkDao.getDrinkList();
  return drinkList;
};

const getDrinkDetail = async () => {
  const drinkDetail = await drinkDao.getDrinkDetail();
  return drinkDetail;
};

export default { getDrinkList, getDrinkDetail };