import { Router } from "express";
import { authController } from "../view/auth/controller";

export const authRouter = Router();

authRouter.post("/signIn", authController.signIn);
authRouter.post("/signUp", authController.signUp);
