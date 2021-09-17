import express from 'express';
import DrinkController from '../controllers/drinkController';

const router = express.Router();
const drinkController = new DrinkController();

// drink list
router.get('/', async (req, res) => {
  const drinkList = await drinkController.getDrinkList();
  res.send(drinkList);
});

// drink detail
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const drinkDetail = await drinkController.getDrinkDetail(id);
  res.send(drinkDetail);
});

module.exports = router;
