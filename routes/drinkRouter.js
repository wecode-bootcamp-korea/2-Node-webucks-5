import express from "express";
import { drinkController } from '../controllers/';

const router = express.Router();

router.get("/", drinkController.getDrinkList);
router.get("/detail", drinkController.getDrinkDetail);
router.get("/detail/:id", drinkController.getDrinkDetailById);

export default router;
