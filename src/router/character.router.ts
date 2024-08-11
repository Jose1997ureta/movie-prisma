import { Router } from "express";
import { characterController } from "../view/character/controller";

export const characterRouter = Router();

characterRouter.get("/home", characterController.getCharacteHome);
