import { Router } from "express";
import {
  signIn,
  signOut,
  signup,
  
} from "../controllers/auth.controller.js";

const authRouter = Router();
authRouter.route("/sign-up").post(signup);
authRouter.route("/sign-in").post(signIn);
authRouter.route("/sign-out").get(signOut);

export default authRouter;
