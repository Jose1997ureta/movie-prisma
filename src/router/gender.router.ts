import { Router } from "express";
import { genderController } from "../view/gender/controller";

export const genderRouter = Router();

genderRouter.get("/home", genderController.getGenderHome);
genderRouter.get("/list", genderController.getGender);
