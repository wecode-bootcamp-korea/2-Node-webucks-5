import express from "express";
import { drinkController } from '../controllers/';

const router = express.Router();

router.get("/", drinkController.getDrinkList);
router.get("/detail", drinkController. getDrinkDetail);

export default router;