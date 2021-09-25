import { drinkService } from '../services';

const getDrinkList = async (req, res) => {
  const drinkList = await drinkService.getDrinkList();
  res.json(drinkList);
};

const getDrinkDetail = async (req, res) => {
  const drinkDetail = await drinkService.getDrinkDetail();
  res.json(drinkDetail);
};

const getDrinkDetailById = async (req, res) => {
  const id = req.params.id;
  const drinkDetailById = await drinkService.getDrinkDetailById(id);
  res.json(drinkDetailById);
};

export default { getDrinkList, getDrinkDetail, getDrinkDetailById };
