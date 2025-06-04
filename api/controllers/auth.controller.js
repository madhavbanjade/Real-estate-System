import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/errorhandler.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ userName, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
    // next(errorHandler(500, "error comes from the function"));
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    //it checks if the email with same address is already exists or not.
    const validUser = await User.findOne({ email }); //after E6 version.
    if (!validUser) {
      //This errorhandler is already made by us..
      return next(errorHandler(404, "User not found!"));
    }
    //The code checks weather the password enter by the user is correct or not with the password when the user sign up...
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong credentials!"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    // console.log(token);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has logged out");
  } catch (error) {
    next(error);
  }
};
