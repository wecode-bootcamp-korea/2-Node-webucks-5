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
  if (drinkDetailById === undefined) {
    const err = new Error("NOT_FOUND");
    err.statusCode = 404;
    throw err;
  }
  return drinkDetailById;
};

export default { getDrinkList, getDrinkDetail, getDrinkDetailById };
