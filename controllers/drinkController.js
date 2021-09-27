// import drinkService from '../services/drinkService';
import { drinkService } from '../services';

const getDrinkList = async (req, res) => {
  const drinkList = await drinkService.getDrinkList();
  res.json(drinkList);
};

const getDrinkDetail = async (req, res) => {
  const id = req.params.id;
  const drinkDetail = await drinkService.getDrinkDetail(id);
  res.json(drinkDetail);
};

export default { getDrinkList, getDrinkDetail };
