import { NextFunction, Request, Response } from "express";
import { MovieModel } from "../model";

export const addMovieFavoriteController = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { idMovie, idUser } = req.body;
		const result = await MovieModel.addMovieFavorite(idMovie, idUser);

		res.status(201).json(result);
	} catch (error) {
		next(error);
	}
};
