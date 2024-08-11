import { NextFunction, Request, Response } from "express";
import { createMovieProps } from "../interface/movie.interface";
import { MovieModel } from "../model";

export const createMovieController = async (
	req: Request<{}, {}, createMovieProps>,
	res: Response,
	next: NextFunction
) => {
	const {} = req.body;

	try {
		const result = await MovieModel.create(req.body);

		res.status(201).json({
			message: "Se registro la pelicula correctamente",
			data: {
				id: result,
			},
		});
	} catch (error) {
		next(error);
	}
};
