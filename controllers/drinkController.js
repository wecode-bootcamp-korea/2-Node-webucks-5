import { drinkService } from '../services';

const getDrinkList = async (req, res) => {
  try {
    const drinkList = await drinkService.getDrinkList();
    res.json(drinkList);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "INTERNAL_SERVER_ERROR"
    })
  }
};

const getDrinkDetail = async (req, res) => {
  try {
    const drinkDetail = await drinkService.getDrinkDetail();
    res.json(drinkDetail);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "INTERNAL_SERVER_ERROR"
    })
  }
};

const getDrinkDetailById = async (req, res) => {
  try {
    const id = req.params.id;
    const drinkDetailById = await drinkService.getDrinkDetailById(id);
    res.json(drinkDetailById);
  } catch (err) {
    console.log(err);
    const { statusCode, message } = err;
    res.status(statusCode || 500).json({
      msg: message,
    });
  }
};

export default { getDrinkList, getDrinkDetail, getDrinkDetailById };
