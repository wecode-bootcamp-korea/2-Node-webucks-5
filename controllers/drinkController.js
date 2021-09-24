// import drinkService from '../services/drinkService';
import { drinkService } from '../services';

const getDrinkList = async (req, res) => {
  const drinkList = await drinkService.getDrinkList();
  res.send(drinkList);
};

const getDrinkDetail = async (req, res) => {
  const id = req.params.id;
  const drinkDetail = await drinkService.getDrinkDetail(id);
  res.send(drinkDetail);
};

export default { getDrinkList, getDrinkDetail };
