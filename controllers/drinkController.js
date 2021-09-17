import DrinkService from '../services/drinkService';

const drinkService = new DrinkService();

export default class DrinkController {
  getDrinkList = async () => {
    return await drinkService.getDrinkList();
  };

  getDrinkDetail = async id => {
    return await drinkService.getDrinkDetail(id);
  };
}
