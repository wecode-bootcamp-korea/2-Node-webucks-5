import { DrinkDao } from '../models/drinkDao';

const drinkDao = new DrinkDao();

export default class DrinkService {
  getDrinkList = async () => {
    const drinkList = await drinkDao.getDrinkList();
    return JSON.stringify(drinkList);
  };

  getDrinkDetail = async id => {
    const [drinkDetail] = await drinkDao.getDrinkDetail(id);
    return JSON.stringify(drinkDetail);
  };
}
