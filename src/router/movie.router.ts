import { Router } from "express";

import { movieController } from "../view/movie/controller";

export const movieRouter = Router();

movieRouter.post("/create", movieController.create);
movieRouter.get("/list/destacado", movieController.getDescatado);
movieRouter.get("/list/home/gender", movieController.getHomeGender);
movieRouter.get("/banners", movieController.getBanner);
movieRouter.get("/info/:id", movieController.getMovieIdInfo);
movieRouter.get("/info/more/:id", movieController.getMoreMovieId);
movieRouter.get("/filter/:gender", movieController.getFilterMovieGender);

movieRouter.get("/add-favorite", movieController.addMovieFavorite);

movieRouter.get("/:id", movieController.getMovieId);
