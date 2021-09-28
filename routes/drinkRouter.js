import express from 'express';
import drinkController from '../controllers/drinkController.js'

const drinkRouter = express.Router()

drinkRouter.get('/', drinkController.getAllDrinks)
drinkRouter.get('/:id', drinkController.getDrinkById)

export default drinkRouter;