// import drinkDao from '../models/drinkDao'
import { drinkDao } from '../models';

const getDrinkList = async () => {
  const drinkList = await drinkDao.getDrinkList();
  return drinkList;
};

const getDrinkDetail = async id => {
  const [drinkDetail] = await drinkDao.getDrinkDetail(id);
  return drinkDetail;
};

export default { getDrinkList, getDrinkDetail };
