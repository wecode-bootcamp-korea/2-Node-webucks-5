import { userService } from '../services';
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.status(201).json({
      message : "SUCCESS",
      data : users,
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).send("Somethig broke!");
  }
};

const createUser = async (req, res) => {
  try {
    const { 
      email, 
      password, 
      username, 
      address, 
      phone_number, 
      policy_agreed 
    } = req.body;

    const [ userInfo ] = await userService.getUserInfo(email);
    const hash = await bcrypt.hash(password, 10);
    
    if (userInfo !== undefined) {
      res.json({
        message : "중복된 이메일입니다.",
      });
    } else {
      await userService.createUser(
        email, 
        hash, 
        username, 
        address, 
        phone_number, 
        policy_agreed
      );
      res.status(201).json({
        message : "CREATED",
      });
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).send("Somethig wrong!");
  }
};

const logIn = async (req, res) => {
  const { email, password } = req.body;
  const [ userInfo ] = await userService.getUserInfo(email);

  if (userInfo === undefined) {
    return res.status(400).send("가입된 이메일이 아닙니다.");
  }
  try {
    const validPw = await bcrypt.compare(password, userInfo.password);
    if (validPw) {
      const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
      res.send({ msg : "Valid Email and Password!", accessToken : accessToken });
    } else {
      res.send("Wrong Password!");
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).send("Somethig wrong!");
  }
};

export default { findAllUsers, createUser, logIn };
