import { userService } from '../services';
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers(req.body);
    res.status(201).json({
      msg: "SUCCESS",
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "INTERNAL_SERVER_ERROR"
    })
  }
};

const createUser = async (req, res) => {
  try{
    await userService.createUser(req.body);
    res.status(201).json({
      msg: "CREATED",
    });
  } catch (err) {
    const { statusCode, message } = err;
    res.status(statusCode || 500).json({
      msg: message,
    });
  }
};

const logIn = async (req, res) => {
  try{
    const accessToken = jwt.sign(req.body.email, process.env.ACCESS_TOKEN_SECRET);
    await userService.logIn(req.body);
    res.status(200).json({ 
      msg: "VALID_PASSWORD_AND_EMAIL", 
      accessToken : accessToken 
    });
  } catch (err) {
    const { statusCode, message } = err;
    res.status(statusCode || 500).json({
      msg: message,
    });
  }
};

export default { findAllUsers, createUser, logIn };
