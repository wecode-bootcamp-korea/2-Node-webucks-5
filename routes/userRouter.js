import express from "express";
import { userController } from '../controllers';

const router = express.Router();

router.get("/", userController.findAllUsers);
router.post("/register", userController.createUser);


export default router;
